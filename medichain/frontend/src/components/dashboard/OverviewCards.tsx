import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-muted-foreground">
            Total Scans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl font-extrabold">42</div>
          <p className="text-md text-muted-foreground">Scans This Month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-muted-foreground">
            Verified Drugs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl font-extrabold text-gray-700">38</div>
          <p className="text-md text-muted-foreground">Verified</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-muted-foreground">
            Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl font-extrabold text-destructive">2</div>
          <p className="text-md text-muted-foreground">Potential Issues</p>
        </CardContent>
      </Card>
    </div>
  );
}
