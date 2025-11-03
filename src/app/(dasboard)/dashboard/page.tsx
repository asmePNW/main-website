import {Card} from "@/components/ui/cards/card";
import {redirect} from "next/navigation"
import {createClient} from "../../../../utils/supabase/server"
import {FolderKanban, Users, Calendar, LogOut, Plus} from "lucide-react"
import {Button} from "@/components/ui/buttons/button";
import {logout} from "@/components/actions/logout"
import Link from "next/link";

export default async function Dashboard() {
    const supabase = await createClient()
    const {data: {
            user
        }} = await supabase
        .auth
        .getUser()

    if (!user) {
        redirect("/login")
    }

    return (
        <div className="space-y-6 px-4 sm:px-6 lg:px-8 pb-10">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Dashboard
                </h1>

                <form action={logout}>
                    <Button
                        type="submit"
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2">
                        <LogOut className="h-4 w-4"/>
                        <span>Log Out</span>
                    </Button>
                </form>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <Link href="/dashboard/projects" className="block">
                    <Card className="p-5 sm:p-6 hover:bg-accent cursor-pointer transition-colors">
                        <div className="flex items-center space-x-2">
                            <FolderKanban className="h-4 w-4 text-muted-foreground"/>
                            <h3 className="text-sm font-medium">Create project page</h3>
                        </div>

                        {/* Center the plus icon below */}
                        <div className="my-10 pb-5 flex justify-center">
                            <Plus className="h-8 w-8 text-primary"/>
                        </div>
                    </Card>
                </Link>
                <Link href="/dashboard/teams" className="block">
                    <Card className="p-5 sm:p-6 hover:bg-accent cursor-pointer transition-colors">
                        <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground"/>
                            <h3 className="text-sm font-medium">Create team page</h3>
                        </div>

                        {/* Center the plus icon below */}
                        <div className="my-10 pb-5 flex justify-center">
                            <Plus className="h-8 w-8 text-primary"/>
                        </div>
                    </Card>
                </Link>
                <Link href="/dashboard/events" className="block">
                    <Card className="p-5 sm:p-6 hover:bg-accent cursor-pointer transition-colors">
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground"/>
                            <h3 className="text-sm font-medium">Create event</h3>
                        </div>

                        {/* Center the plus icon below */}
                        <div className="my-10 pb-5 flex justify-center">
                            <Plus className="h-8 w-8 text-primary"/>
                        </div>
                    </Card>
                </Link>

            </div>

            {/* Recent Activity + Popular Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                    <div className="space-y-3">
                        {[
                            {
                                id: "ORD-001",
                                price: "$45.99",
                                status: "Completed",
                                color: "text-green-600"
                            }, {
                                id: "ORD-002",
                                price: "$32.50",
                                status: "Processing",
                                color: "text-yellow-600"
                            }, {
                                id: "ORD-003",
                                price: "$78.25",
                                status: "Pending",
                                color: "text-blue-600"
                            }
                        ].map((order) => (
                            <div key={order.id} className="flex justify-between items-center">
                                <p className="font-medium">{order.id}</p>
                                <div className="text-right">
                                    <p className="font-medium">{order.price}</p>
                                    <p className={`text-sm ${order.color}`}>{order.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4">Popular Items</h3>
                    <div className="space-y-3">
                        {[
                            {
                                name: "Classic Burger",
                                sold: "23 sold today",
                                price: "$12.99"
                            }, {
                                name: "Margherita Pizza",
                                sold: "18 sold today",
                                price: "$15.50"
                            }, {
                                name: "French Fries",
                                sold: "31 sold today",
                                price: "$5.99"
                            }
                        ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">{item.sold}</p>
                                </div>
                                <p className="font-medium">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
