"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScanModal } from "@/components/dashboard/ScanModel";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background px-6">
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <Search className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex-1">
        <h1 className="text-2xl font-extrabold">Welcome, Omkar</h1>
      </div>
      <ScanModal />
      <Avatar className="h-10 w-10">
        <AvatarImage src="/placeholder.svg" alt="User" />
        <AvatarFallback className="bg-muted text-muted-foreground">
          OM
        </AvatarFallback>
      </Avatar>
    </header>
  );
}
