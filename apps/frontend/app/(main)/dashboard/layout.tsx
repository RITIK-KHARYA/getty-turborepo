import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/custom/custom-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full">
        <Header />
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
