"use client";

import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import Link from "next/link";
import { CloseIcon } from "@/components/common/Icons";
import { useScrollThreshold } from "@/app/hooks/useScrollThreshold";
import Image from "next/image";
export default function Header() {
  const hasScrolled = useScrollThreshold(50);
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyScrollLock(menuOpen);
  const pathName = usePathname();

  const isThankYouPage = pathName.endsWith("/thank-you");

  const whiteLogoPaths = ["/brigade-avalon"];

  const logo1 =
    // On thank-you page, always use the dark variant of the brigade logo.
    isThankYouPage
      ? "/images/landing-page/logos/brigade-avalon-dark.svg"
      : hasScrolled
      ? "/images/landing-page/logos/brigade-avalon-dark.svg"
      : menuOpen || !whiteLogoPaths.includes(pathName)
      ? "/images/landing-page/logos/bran-avan.svg"
      : "/images/landing-page/logos/brigade-avalon.svg";

  

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[99999999] transition-all ease-in-out duration-300 ${
        hasScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto flex justify-between items-center ${
          hasScrolled ? "pt-2 pb-3" : "pt-7 lg:pt-10 pb-3"
        }`}
      >
        <Link
          href={"/brigade-avalon"}
          className={`flex relative z-[9999] items-center justify-start ${
            hasScrolled ? "gap-3 lg:gap-2" : "gap-3 lg:gap-6"
          }`}
        >
          <Image
          height={10}
          width={10}
            src={logo1}
            alt="brigade avalon logo"
            className={`w-auto  h-10 lg:h-24 ${
              hasScrolled ? "lg:scale-75" : "scale-100"
            }`}
          />
         
          
        </Link>
        <div className="gap-8 items-center hidden lg:flex">
          <Navigation
            textColor={
              isThankYouPage
                ? "text-[#202020]"
                : hasScrolled || !whiteLogoPaths.includes(pathName)
                ? "text-foreground"
                : "text-white"
            }
            disableScrollEffect={isThankYouPage}
          />
          {!isThankYouPage && (
            <Link href={"/brigade-avalon#enquire-form"}>
              <Button
                variant={hasScrolled ? "default" : "secondary"}
                className={`${
                  hasScrolled ? "text-[white] bg-[#3D9E8B] " : "text-[#3B84BF] bg-[white] "
                } transition-colors rounded-lg font-bold ease-in-out duration-300`}
              >
                Enquire Now
              </Button>
            </Link>
          )}
        </div>
        <div className="lg:hidden relative z-[9999]">
          {isThankYouPage ? (
            <Link href={"/brigade-avalon"}>
              <CloseIcon className="size-6" />
            </Link>
          ) : (
            <HamburgerButton
              hasScrolled={hasScrolled}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          )}
        </div>
        <MobileNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          hideCta={isThankYouPage}
        />
      </div>
    </header>
  );
}
