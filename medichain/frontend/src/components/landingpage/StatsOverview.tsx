import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const StatsOverview = () => {
  return (
    <Card className="p-6 rounded-2xl shadow-lg border-2 border-teal-400 bg-white overflow-hidden relative mr-20 ml-20">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-xl"></div>

      <CardContent className="grid gap-6 relative z-10">
        <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md">
          <Image
            src="/images/sample.png"
            alt="Statistics visualization"
            layout="responsive"
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-auto"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/api/placeholder/800/400";
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsOverview;
