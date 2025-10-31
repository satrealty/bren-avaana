"use client";

import { useState } from "react";
import { useScrollThreshold } from "@/app/hooks/useScrollThreshold";
import { Typography } from "../ui/typography";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
        className={`fixed left-0 right-0 flex justify-center z-50 bottom-2 lg:bottom-5 h-[58.2px] bg-none  rounded-[10px] lg:bg-transparent max-w-[300px] md:max-w-[350px]  mx-auto py-1 transition-all duration-300 ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full bg-white cursor-pointer border border-[#F3F3F3] rounded-[10px] mx-auto">
          <div className=" cursor-pointer  h-full  flex items-stretch ">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center flex-1 gap-3"
            >
<svg
  className="text-[#25d366] lucide lucide-phone-call-icon lucide-phone-call"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M13 2a9 9 0 0 1 9 9" />
  <path d="M13 6a5 5 0 0 1 5 5" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
</svg>
              <Typography className="font-bold text-[#25d366] cursor-pointer">
                Get instant call in 5 min
              </Typography>
            </button>
          </div>
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
                className="w-full text-black px-4 py-2 border rounded-lg"
              />
            

              {/* Phone field */}
              <PhoneInputStyles />
              <PhoneInput
                international
                defaultCountry="IN"
                value={userPhone}
                onChange={(value) => setValue("phone", value || "")}
                className="custom-phone-input border rounded-lg"
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
                  className={`px-4 py-2 rounded-lg cursor-pointer bg-gray-300 text-white hover:bg-gray-400 ${
                    isSubmitting ? "opacity-50" : ""
                  }`}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-lg ${!isSubmitting&&"cursor-pointer"} bg-green-600 text-white hover:bg-green-700 flex items-center justify-center`}
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
