"use client"

import { useState, useEffect, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/buttons/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/cards/card'
import { Toast, useToast } from '@/components/ui/toast'
import { CheckCircle, AlertCircle, Loader2, Shield, ShieldCheck } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface InviteData {
    email: string
    role: 'admin' | 'officer'
}

function InviteContent() {
    const router = useRouter()
    const { toast, showToast, hideToast } = useToast()
    const supabase = createClient()

    const [inviteData, setInviteData] = useState<InviteData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    // Handle Supabase invite callback
    useEffect(() => {
        async function handleInvite() {
            // Check if there's a session from Supabase invite
            const { data: { session }, error: sessionError } = await supabase.auth.getSession()
            
            if (session?.user) {
                // User already has a session from the invite link
                const userMeta = session.user.user_metadata
                setInviteData({
                    email: session.user.email || '',
                    role: userMeta?.role || 'officer',
                })
                setLoading(false)
                return
            }

            // Check URL hash for tokens (Supabase invite flow)
            const hash = window.location.hash
            if (hash) {
                const params = new URLSearchParams(hash.substring(1))
                const accessToken = params.get('access_token')
                const refreshToken = params.get('refresh_token')
                const type = params.get('type')

                if (accessToken && type === 'invite') {
                    // Exchange tokens for session
                    const { data, error } = await supabase.auth.setSession({
                        access_token: accessToken,
                        refresh_token: refreshToken || '',
                    })

                    if (error) {
                        setError('Failed to process invite: ' + error.message)
                        setLoading(false)
                        return
                    }

                    if (data.user) {
                        const userMeta = data.user.user_metadata
                        setInviteData({
                            email: data.user.email || '',
                            role: userMeta?.role || 'officer',
                        })
                        setLoading(false)
                        return
                    }
                }
            }

            // No valid invite found
            setError('Invalid or expired invite link. Please request a new invite.')
            setLoading(false)
        }

        handleInvite()
    }, [supabase.auth])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            showToast('Passwords do not match', 'error')
            return
        }

        if (password.length < 8) {
            showToast('Password must be at least 8 characters', 'error')
            return
        }

        setIsSubmitting(true)

        try {
            // Update password
            const { error: updateError } = await supabase.auth.updateUser({
                password,
                data: {
                    full_name: fullName.trim() || null,
                },
            })

            if (updateError) {
                showToast(updateError.message, 'error')
                setIsSubmitting(false)
                return
            }

            // Update profile with role
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                await supabase
                    .from('profiles')
                    .update({ 
                        role: inviteData?.role || 'officer',
                        full_name: fullName.trim() || null,
                    })
                    .eq('id', user.id)

                // Mark invite as accepted in our tracking table
                await supabase
                    .from('invites')
                    .update({ status: 'accepted' })
                    .eq('email', user.email)
                    .eq('status', 'pending')
            }

            setSuccess(true)
            showToast('Account setup complete!', 'success')
            setTimeout(() => {
                router.push('/dashboard')
            }, 2000)
        } catch {
            showToast('An unexpected error occurred', 'error')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Setting up your account...</p>
                </div>
            </div>
        )
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Invalid Invite
                            </h2>
                            <p className="text-gray-500 mb-6">{error}</p>
                            <Button onClick={() => router.push('/login')}>
                                Go to Login
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // Success state
    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Account Created!
                            </h2>
                            <p className="text-gray-500 mb-6">
                                Redirecting you to login...
                            </p>
                            <Loader2 className="h-5 w-5 animate-spin text-gray-400 mx-auto" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // Signup form
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Accept Invite</CardTitle>
                    <p className="text-gray-500 mt-2">
                        Create your account to join the team
                    </p>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Invite Info */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Email</span>
                            <span className="font-medium text-gray-900">{inviteData?.email}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Role</span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                {inviteData?.role === 'admin' ? (
                                    <ShieldCheck className="h-3 w-3" />
                                ) : (
                                    <Shield className="h-3 w-3" />
                                )}
                                {inviteData?.role === 'admin' ? 'Admin' : 'Officer'}
                            </span>
                        </div>
                    </div>

                    {/* Signup Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name (optional)</Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="John Doe"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="At least 8 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={hideToast}
                    position="top"
                />
            )}
        </div>
    )
}

export default function InvitesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Loading...</p>
                </div>
            </div>
        }>
            <InviteContent />
        </Suspense>
    )
}
