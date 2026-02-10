import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const updateMemberSchema = z.object({
    role: z.enum(['admin', 'officer']),
})

// PATCH - Update member role
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const supabase = await createClient()
        const { id } = await params

        // Check authentication
        const { data: { user }, error: authError } = await supabase.auth.getUser()
        if (authError || !user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        // Check if user is admin
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()

        if (profile?.role !== 'admin') {
            return NextResponse.json(
                { error: 'Admin access required' },
                { status: 403 }
            )
        }

        // Prevent self-demotion
        if (id === user.id) {
            return NextResponse.json(
                { error: 'Cannot change your own role' },
                { status: 400 }
            )
        }

        // Parse and validate request body
        const body = await request.json()
        const validation = updateMemberSchema.safeParse(body)

        if (!validation.success) {
            return NextResponse.json(
                { error: 'Invalid data', details: validation.error.flatten() },
                { status: 400 }
            )
        }

        // Update member role
        const { data, error } = await supabase
            .from('profiles')
            .update({ role: validation.data.role })
            .eq('id', id)
            .select()
            .single()

        if (error) {
            console.error('Error updating member:', error)
            return NextResponse.json(
                { error: 'Failed to update member' },
                { status: 500 }
            )
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// DELETE - Remove member
export async function DELETE(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const supabase = await createClient()
        const { id } = await params

        // Check authentication
        const { data: { user }, error: authError } = await supabase.auth.getUser()
        if (authError || !user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        // Check if user is admin
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()

        if (profile?.role !== 'admin') {
            return NextResponse.json(
                { error: 'Admin access required' },
                { status: 403 }
            )
        }

        // Prevent self-deletion
        if (id === user.id) {
            return NextResponse.json(
                { error: 'Cannot remove yourself' },
                { status: 400 }
            )
        }

        // Delete the profile (this will cascade to auth.users if set up)
        const { error } = await supabase
            .from('profiles')
            .delete()
            .eq('id', id)

        if (error) {
            console.error('Error deleting member:', error)
            return NextResponse.json(
                { error: 'Failed to remove member' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
