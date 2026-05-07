import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "./SiteHeader";
import { Chatbot } from "./Chatbot";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <Chatbot />
    </div>
  );
}
