import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Brain,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Upload,
  User,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Mis Apuntes",
    href: "/notes",
    icon: BookOpen,
  },
  {
    name: "Subir Apuntes",
    href: "/upload",
    icon: Upload,
  },
  {
    name: "Quizzes",
    href: "/quizzes",
    icon: HelpCircle,
  },
  {
    name: "Perfil",
    href: "/profile",
    icon: User,
  },
];

const SidebarContent: React.FC = () => {
  const pathname = useLocation();
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b px-6">
        <div className="relative">
          <FileText className="h-8 w-8 text-primary" />
          <Brain className="h-5 w-5 text-secondary absolute -top-1 -right-1" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-foreground">
            NoteQuest-AI
          </span>
          <span className="text-xs text-muted-foreground">
            Gestión inteligente
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Usuario
            </p>
            <p className="text-xs text-muted-foreground truncate">
              usuario@ejemplo.com
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0 xl:z-50 xl:bg-card xl:border-r">
      <SidebarContent />
    </div>
  );
};

export const MobileSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="xl:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64 gap-0">
        <SheetTitle className="h-0" />
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
};