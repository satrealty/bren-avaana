"use client";

import { useState } from "react";
import { useScrollThreshold } from "@/app/hooks/useScrollThreshold";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import dynamic from "next/dynamic";


const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-12 bg-gray-200 animate-pulse rounded-lg" />
  ),
});
// ✅ Loader component
function Loader() {
  return (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
  );
}

// ✅ Phone Input custom styles
const PhoneInputStyles = () => (
  <style>{`
    .custom-phone-input {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .custom-phone-input .PhoneInputCountry {
      margin: 0.5rem 0 0.5rem 0.75rem;
    }
    .custom-phone-input .PhoneInputInput {
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;
      padding: 0.75rem 1rem 0.75rem 0.5rem;
      color: #4a2e20;
      font-size: 1rem;
      width: 100%;
    }
    .custom-phone-input .PhoneInputInput::placeholder {
      color: rgba(107, 114, 128, 0.8);
    }
  `}</style>
);

// ✅ Zod schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().refine((value) => isValidPhoneNumber(value), {
    message: "Invalid phone number",
  }),
});
type FormValues = z.infer<typeof formSchema>;

export default function FloatingSticky() {
  const isScrolled = useScrollThreshold(100);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const userPhone = watch("phone");

  // ✅ Submit handler
  const handleClaimSubmit = async (values: FormValues) => {
    try {
      const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL_CALL!;
      const response = await fetch(googleScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: values.name,
          phone: values.phone,
        }),
      });



      const result = await response.json();

      if (result.success) {
        setShowModal(false);
        setValue("name", "");
        setValue("phone", "");
      
      } else {
        alert("⚠️ Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <>
      {/* ✅ Floating Bar */}
   <div
  className={`
    fixed left-1/2 transform -translate-x-1/2
    bottom-2 lg:bottom-5 z-50
    w-[305.75px] md:w-[405.75px] max-w-full
    h-[63px]
    flex justify-center items-center
    bg-white rounded-[10px]
    mx-auto py-1
    transition-all duration-300
    ${isScrolled
      ? "translate-y-0 opacity-100"
      : "translate-y-4 opacity-0 pointer-events-none"
    }
  `}
  style={{boxShadow: '0 2px 8px rgba(0,0,0,0.07)'}}
>
  <div className="w-full h-full  flex">
    {/* Call Button */}
    <button
      onClick={() => setShowModal(true)}
      className="
        flex-1 flex items-center justify-center gap-3
        font-bold text-[#25d366] 
        hover:bg-[#f8fdf9] rounded-[10px] transition
        cursor-pointer
        h-full
      "
    >
      {/* SVG Icon */}
     <Image src='/icons/phoneIcon.svg' alt="" width={20} height={20}  />
      <span className="font-semibold text-[#999999] text-[18px]">Call</span>
    </button>

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
      onClick={() => setShowModal(true)}
      className="
        flex-1 flex items-center justify-center gap-3
        font-bold text-[#b0b0b0]
        hover:bg-[#f9fafb] rounded-[10px] transition
        cursor-pointer
        h-full
      "
      
    >
      {/* WhatsApp SVG */}
       <Image src='/icons/whatsappIcon.svg' alt="" width={20} height={20}  />
      <span className="font-semibold text-[#999999] text-[18px]">WhatsApp</span>
    </a>
  </div>
</div>


      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
              Claim Your Callback
            </h3>
            <form onSubmit={handleSubmit(handleClaimSubmit)} className="space-y-4">
              {/* Name field */}
              <input
                type="text"
                placeholder="Your Name"
                required
                {...register("name")}
                className="w-full text-black px-4 py-2   shadow-sm bg-[#ebebeb] rounded-lg"
              />
            

              {/* Phone field */}
              <PhoneInputStyles />
              <PhoneInput
                international
                defaultCountry="IN"
                value={userPhone}
                onChange={(value) => setValue("phone", value || "")}
                className="custom-phone-input shadow-sm bg-[#ebebeb] rounded-lg"
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setShowModal(false)}
                  className={`px-4 py-2 rounded-lg cursor-pointer bg-gray-300 text-white hover:bg-gray-400 transition-all ${
                    isSubmitting ? "opacity-50" : ""
                  }`}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-lg ${!isSubmitting&&"cursor-pointer"} bg-[#3D9E8B] text-white hover:bg-[#296b5e]
                   flex items-center justify-center transition-all`}
                >
                  {isSubmitting ? <Loader /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
