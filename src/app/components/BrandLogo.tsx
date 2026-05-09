type BrandLogoProps = {
  theme?: "light" | "dark";
  variant?: "horizontal" | "icon";
  className?: string;
};

export function BrandLogo({
  theme = "dark",
  variant = "horizontal",
  className = "",
}: BrandLogoProps) {
  const color = theme === "dark" ? "#FFFFFF" : "#0A0A0A";
  const accentColor = theme === "dark" ? "#6366F1" : "#4F46E5";

  if (variant === "icon") {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Web Studio"
        role="img"
      >
        <path
          d="M24 4L4 14V34L24 44L44 34V14L24 4Z"
          stroke={accentColor}
          strokeWidth="2"
          fill="none"
        />
        <path d="M24 14L14 19.5V28.5L24 34L34 28.5V19.5L24 14Z" fill={accentColor} />
        <circle cx="24" cy="24" r="4" fill={theme === "dark" ? "#0A0A0A" : "#FFFFFF"} />
      </svg>
    );
  }

  return (
    <svg
      width="200"
      height="48"
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Web Studio"
      role="img"
    >
      <path
        d="M24 4L4 14V34L24 44L44 34V14L24 4Z"
        stroke={accentColor}
        strokeWidth="2"
        fill="none"
      />
      <path d="M24 14L14 19.5V28.5L24 34L34 28.5V19.5L24 14Z" fill={accentColor} />
      <circle cx="24" cy="24" r="4" fill={theme === "dark" ? "#0A0A0A" : "#FFFFFF"} />
      <text
        x="58"
        y="30"
        fill={color}
        fontSize="20"
        fontWeight="300"
        letterSpacing="1.5"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        WEB STUDIO
      </text>
    </svg>
  );
}
