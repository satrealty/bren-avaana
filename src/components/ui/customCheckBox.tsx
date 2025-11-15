"use client";

import { CustomCheckIcon } from "../common/Icons";

export default function CustomCheckBox({
  checked,
  onChange,
  checkIcon,
}: {
  checked: boolean;
  onChange: () => void;
  checkIcon?: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: checked ? "#3D9E8B" : "transparent",
      }}
      className={`!rounded-sm border border-[#3D9E8B] w-4 h-4 flex items-center justify-center cursor-pointer transition-colors ease-in-out duration-300`}
      onClick={onChange}
    >
      {checked && (checkIcon || <CustomCheckIcon fill="#3D9E8B"/>)}
    </div>
  );
}
