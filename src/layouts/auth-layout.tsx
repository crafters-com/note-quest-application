import { Brain, FileText } from "lucide-react";
import type React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen via-card to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Branding and welcome */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="relative">
                <FileText className="h-8 w-8 text-primary" />
                <Brain className="h-5 w-5 text-secondary absolute -top-1 -right-1" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                NoteQuest-AI
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Bienvenido a <span className="text-primary">NoteQuest-AI</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-md mx-auto lg:mx-0">
                Transforma tus ideas en notas inteligentes con el poder de la
                inteligencia artificial. Organiza, busca y conecta tu
                conocimiento como nunca antes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 rounded-lg bg-card/50">
                <div className="text-2xl font-bold text-primary">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50">
                <div className="text-2xl font-bold text-primary">Smart</div>
                <div className="text-sm text-muted-foreground">Search</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50">
                <div className="text-2xl font-bold text-primary">Auto</div>
                <div className="text-sm text-muted-foreground">Organize</div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="flex justify-center lg:justify-end">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
