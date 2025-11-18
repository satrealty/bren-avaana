import { cn } from "@/lib/utils";
import NumberInfoCard from "./cards/NumberInfoCard";
import Image from "next/image";

export default function StatsDisplaySection({
  stats,
  className = "",
}: {
  stats: { title: string; subTitle: string }[];
  className?: string;
}) {
  return (
    <div className="relative">
    <div className={cn("flex  justify-center bg-[#FBFBFB] gap-6 lg:gap-12 ", className)}>
      {stats.map((stat, index) => (
        <NumberInfoCard
          key={index}
          title={stat.title}
          subTitle={stat.subTitle}
        />
      ))}
    </div>
    <div className="absolute -top-20 left-0 hidden lg:block"><Image src="/images/landing-page/leaf-left-half-green.png" width={120} height={120} alt=""/></div>
    </div>
  );
}
