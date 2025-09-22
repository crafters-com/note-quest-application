import { MobileSidebar, Sidebar } from "@/components/navbar/sidebar/sidebar";
import type React from "react";
import { Outlet } from "react-router";

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />

      <div className="xl:pl-64">
        {/* Mobile header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-card px-4 shadow-sm xl:hidden">
          <MobileSidebar />
          <div className="flex-1 text-sm font-semibold leading-6 text-foreground">
            NoteQuest-AI
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1">
          <div className="px-4 py-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;