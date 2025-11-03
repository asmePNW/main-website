import {redirect} from "next/navigation";
import {createClient} from "../../../../utils/supabase/server";
import {Sidebar} from "@/components/layout/sidebar/sidebar";

export const metadata = {
    title: "Dashboard",
    description: "Admin dashboard"
};

export default async function DashboardLayout({children} : {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const {data: {
            user
        }} = await supabase
        .auth
        .getUser();

    if (!user) 
        redirect("/login");
    
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar/>
            <main className="flex-1 w-full md:ml-0 p-4 md:p-6">
                {children}
            </main>
        </div>
    );
}