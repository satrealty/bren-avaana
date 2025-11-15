import { Typography } from "@/components/ui/typography";

export default function NumberInfoCard({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="bg-[#F9F9F9] p-6 rounded-xl lg:min-w-[234px] w-full lg:w-fit">
      <Typography variant={"sectionTitle"} className="text-2xl lg:text-[38px] lg2:text-[40px] leading-[150%] font-bold text-center">
        {title}
      </Typography>
      <Typography variant={"body"} className="text-center font-medium mt-3">{subTitle}</Typography>
    </div>
  );
}
