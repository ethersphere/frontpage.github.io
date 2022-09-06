import * as React from "react";
import { IconProps } from "@/icons/type";

const StatsIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m1 10 4.8-4.8 3.6 3.6L14.2 4" stroke="currentColor" />
  </svg>
);

export default StatsIcon;
