"use client";

// library imports
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//hooks
import { useMemo, useState } from "react";

// ui components
import { Button } from "@/components/ui/button";
import CustomCheckBox from "@/components/ui/customCheckBox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
//utils
import { countryCodes } from "@/lib/data/countryCodes";
import { userSchema, UserSchemaType } from "@/lib/schemas/siteVisitSchema";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function SiteVisitForm({ style = 1 }: { style?: number }) {
  const router = useRouter();
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    getValues,
    setValue,
  } = useForm<UserSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
      contactConsent: true,
    },
    resolver: zodResolver(userSchema),
    // validate fields as the user types so we can disable/enable the submit button dynamically
    mode: "onChange",
    reValidateMode: "onChange",
  });


const onSubmit = async (data: UserSchemaType) => { 
  setLoading(true);

  try {
    const fullPhoneNumber = `${data.countryCode}${data.phone}`;



    const response = await fetch("/api/sendForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        phone: fullPhoneNumber,
        email: data.email,
        message: data.message || "",
        consent: checked ? "Yes" : "No",
        timestamp: new Date().toLocaleString(),
      }),
    });

    
    const result = await response.text();
    console.log("API response:mjmiijij", result);

   if (result.trim() === "Success") {
  // 🔹 Check storage for custom brochure/image path
  const storedData = localStorage.getItem("brochureFile");
  let filePath = "/files/E Brochure - Avalon.pdf";
  let fileName = "E Brochure - Avalon.pdf";

  if (storedData) {
    try {
      const parsed = JSON.parse(storedData); 
      if (parsed?.value) {
        filePath = parsed.value;
        fileName = parsed.value.split("/").pop() || "download";
      }
    } catch (err) {
      console.error("Failed to parse brochureFile storage:", err);
    }

    // clear storage after use
    localStorage.removeItem("brochureFile");
  }

  // trigger download
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  router.push("/bren-avaana/thank-you");
} else {
      alert("Form submitted but email/PDF might have failed.");
    }
  } catch (error) {
    console.error("Form submission failed:", error);
    alert("Failed to submit the form. Please try again.");
  } finally {
    setLoading(false);
  }
};




  // Only re-render this component when country code changes; avoid re-render on each message keystroke
  const countryCode = watch("countryCode");
  const [messageValue, setMessageValue] = useState(
    () => getValues("message") || ""
  );

  // compute overall form validity (fields valid + consent checked)
  const isFormValid = Boolean(isValid) && checked;

  // Memoize the list of country code items so it's not regenerated on every unrelated re-render
  const countryCodeItems = useMemo(
    () =>
      countryCodes.map((code) => (
        <SelectItem
          key={code.value}
          value={code.value}
          className="cursor-pointer"
        >
          {code.label}
        </SelectItem>
      )),
    []
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 ">
      <div
        className={`grid grid-cols-1 ${
          style === 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"
        } gap-4 `}
      >
        <div className={style === 1 ? "lg:col-span-2" : ""}>
          <Input placeholder="Name" {...register("name")} />
          {errors.name && (
            <Typography variant={"caption"} className="text-red-500 mt-1">
              {errors.name.message}
            </Typography>
          )}
        </div>

        <div>
          <div className="flex w-full h-fit items-stretch">
            <Select
              value={countryCode}
              onValueChange={(value) => {
                setValue("countryCode", value);
              }}
              defaultValue="+91"
            >
              <SelectTrigger
                className={cn(
                  " border-[#E2E2E2] cursor-pointer text-[#848484] font-medium bg-transparent px-4 py-3 text-lg h-full rounded-tr-none rounded-br-none border-r-0",
                  "aria-invalid:border-destructive"
                )}
              >
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                {countryCodeItems}
              </SelectContent>
            </Select>

            {/* Phone number input */}
            <Input
              {...register("phone")}
              type="tel"
              placeholder="Phone"
              className="flex-1 rounded-tl-none rounded-bl-none"
            />
          </div>
          {/* Country Code Select */}

          {errors.phone && (
            <Typography variant={"caption"} className="text-red-500 mt-1">
              {errors.phone.message}
            </Typography>
          )}
        </div>
        <div>
          <Input placeholder="Email" {...register("email")} />
          {errors.email && (
            <Typography variant={"caption"} className="text-red-500 mt-1">
              {errors.email.message}
            </Typography>
          )}
        </div>
        <div className={`relative ${style === 1 ? "lg:col-span-2" : ""}`}>
          {messageValue?.length === 0 && (
            <Typography
              variant={"caption"}
              className="absolute top-7 left-24 text-[#848484] text-xs"
            >
              (Optional)
            </Typography>
          )}
          <Typography
            variant={"caption"}
            className="absolute top-3 right-5 text-[#848484] text-xs"
          >
            {messageValue?.length}/125
          </Typography>
          <Textarea
            maxLength={125}
            placeholder="Message"
            {...register("message", {
              onChange: (e) => {
                setMessageValue(e.target.value);
              },
            })}
            rows={4}
            className="pt-5"
          />
          {errors.message && (
            <Typography variant={"caption"} className="text-red-500 mt-1">
              {errors.message.message}
            </Typography>
          )}
        </div>
      </div>

      <div
        className={`flex flex-col ${
          style === 1 && "lg:flex-row"
        } items-center justify-between ${
          style === 2 ? "mt-4  gap-4" : "mt-6  gap-8"
        }`}
      >
        <div className="flex items-center gap-2 justify-center">
          <CustomCheckBox
            checked={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
          />
          <Typography variant={"caption"} className="text-xs lg:text-sm">
            Consent to contact me via Call, SMS, Email, or WhatsApp
          </Typography>
        </div>
        <div className="flex justify-center w-full lg:w-fit">
          <Button
            type="submit"
            disabled={!isFormValid || loading || isSubmitting}
            className={cn(
              "w-full lg:w-auto rounded-lg min-w-32 font-bold",
              isFormValid
                ? "bg-[#3D9E8B] hover:bg-[#245c51] text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            )}
          >
            {loading ? <div className="loader-form-button" /> : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
