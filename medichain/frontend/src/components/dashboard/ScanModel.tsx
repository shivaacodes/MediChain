"use client";

import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ScanModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-teal-400 text-black font-bold hover:bg-teal-500 rounded-2xl">
          <QrCode className="mr-2 h-4 w-4" />
          Scan Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-teal-400">
            Quick Scan
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="relative flex h-[200px] w-[300px] items-center justify-center rounded-lg bg-muted">
            <div className="absolute inset-0 animate-pulse rounded-lg border-2 border-teal-400/50"></div>
            <span className="text-muted-foreground">
              Camera access required
            </span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Position the barcode within the scanner frame to verify medication
            authenticity
          </p>
          <div className="flex gap-2">
            <Button className="bg-teal-400 text-white hover:bg-teal-500">
              Capture
            </Button>
            <Button
              variant="outline"
              className="border-teal-400 text-teal-400 hover:bg-teal-400/10"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
