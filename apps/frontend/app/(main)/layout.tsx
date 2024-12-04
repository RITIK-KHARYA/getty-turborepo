import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/custom/custom-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider> 
      <AppSidebar />

      <main className="w-full">
        <div className="flex w-full justify-between">
          <SidebarTrigger className="mt-2" />
          <Header />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
