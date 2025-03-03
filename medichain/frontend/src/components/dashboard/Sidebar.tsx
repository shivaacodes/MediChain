"use client";

import {
  BarChart3,
  History,
  LogOut,
  QrCode,
  Settings,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 z-50 flex w-64 flex-col border-r border-border bg-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0">
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <div className="flex items-center gap-2 font-poppins text-xl font-extrabold ml-10">
          <span>MediChain</span>
        </div>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Main
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start bg-teal-300 hover:bg-teal-400"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:bg-teal-400/10"
            >
              <QrCode className="mr-2 h-4 w-4" />
              Scan New
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:bg-teal-400/10"
            >
              <History className="mr-2 h-4 w-4" />
              History
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Account
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:bg-teal-400/10"
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:bg-teal-400/10"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:bg-teal-400/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
