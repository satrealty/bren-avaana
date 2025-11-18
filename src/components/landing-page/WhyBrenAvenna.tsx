import Image from "next/image";
import { Typography } from "../ui/typography";


export default function WhyBrenAvenna () {

    return(

        <>
        <section className="w-full px-4 pt-6 md:hidden">

  {/* Title */}
  <Typography variant={"title"} className="text-[28px] font-semibold leading-tight   mb-4">
    Why Bren Avaana
  </Typography >

  {/* Paragraph */}
  <Typography variant={"body"} className="text-[14px] leading-[22px] text-[#666666] mb-6">
    Bren Group, with over three decades of excellence, is among Bangalore’s most trusted developers,
    known for innovative design, meticulous quality, and a people-first approach. With a strong
    legacy across residential, commercial, and educational spaces, Bren combines thoughtful planning,
    modern architecture, and sustainable practices to create communities built to last.
  </Typography >

  {/* Image */}
  <div className="w-full py-4 pb-16">
    <Image
    height={100}
    width={100}
      src="/images/landing-page/where-life-comes.webp"
      alt="Why Bren Avaana"
      className="w-full rounded-xl object-cover"
    />
  </div>

</section>

        </>
    )

}