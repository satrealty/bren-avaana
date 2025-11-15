export function CustomCheckIcon({
  className,
  fill = "none",
  stroke = "#D7D7D7",
}: {
  className?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m10 24l10 10l20-20"
      ></path>
    </svg>
  );
}

export function CloseIcon({
  className,
  fill = "none",
  stroke = "#848484",
}: {
  className?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.707 1.5L1.29297 12.914"
        stroke={stroke}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.707 12.914L1.29297 1.5"
        stroke={stroke}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
