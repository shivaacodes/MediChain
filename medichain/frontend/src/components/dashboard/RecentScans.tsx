import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function RecentScans() {
  return (
    <div className="mt-6">
      <h2 className="mb-4 text-3xl font-extrabold">Recent Scans</h2>
      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Drug Name</TableHead>
              <TableHead>Batch ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-white hover:bg-muted">
              <TableCell className="font-medium">Ibuprofen</TableCell>
              <TableCell>ABC123</TableCell>
              <TableCell>
                <Badge className="bg-teal-400/10 text-teal-400">Verified</Badge>
              </TableCell>
              <TableCell>Mar 02, 2025</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-400 hover:bg-teal-400/10 hover:text-teal-500"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-secondary hover:bg-muted">
              <TableCell className="font-medium">Aspirin</TableCell>
              <TableCell>XYZ789</TableCell>
              <TableCell>
                <Badge className="bg-destructive/10 text-destructive">
                  Unverified
                </Badge>
              </TableCell>
              <TableCell>Mar 01, 2025</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-400 hover:bg-teal-400/10 hover:text-teal-500"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white hover:bg-muted">
              <TableCell className="font-medium">Amoxicillin</TableCell>
              <TableCell>DEF456</TableCell>
              <TableCell>
                <Badge className="bg-teal-400/10 text-teal-400">Verified</Badge>
              </TableCell>
              <TableCell>Feb 28, 2025</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-400 hover:bg-teal-400/10 hover:text-teal-500"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-secondary hover:bg-muted">
              <TableCell className="font-medium">Lisinopril</TableCell>
              <TableCell>GHI789</TableCell>
              <TableCell>
                <Badge className="bg-teal-400/10 text-teal-400">Verified</Badge>
              </TableCell>
              <TableCell>Feb 27, 2025</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-400 hover:bg-teal-400/10 hover:text-teal-500"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white hover:bg-muted">
              <TableCell className="font-medium">Metformin</TableCell>
              <TableCell>JKL012</TableCell>
              <TableCell>
                <Badge className="bg-destructive/10 text-destructive">
                  Unverified
                </Badge>
              </TableCell>
              <TableCell>Feb 26, 2025</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-400 hover:bg-teal-400/10 hover:text-teal-500"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
