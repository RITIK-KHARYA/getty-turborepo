import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/custom/custom-header";
import Breadcrumbdemo from "@/components/custom/custom-breadcum";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full">
        <div className="flex w-full justify-between">
          <div className="gap-x-2">
            <SidebarTrigger className="mt-3" />
            <Breadcrumbdemo
              classname="inline-flex "
              link1="/dashboard"
              link2="/components"
              link3="/components/breadcrumb"
            />
          </div>

          <Header />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
