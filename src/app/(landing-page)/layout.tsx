"use client";

import { FormProvider } from "@/app/context/formContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <FormProvider>
        <Header />
        {children}
        <Footer />
      </FormProvider>
    </div>
  );
}
