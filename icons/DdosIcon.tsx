import * as React from "react";
import { IconProps } from "@/icons/type";

const DdosIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 35 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10.5v19L17.47 39l16.45-9.5v-19L17.47 1 1 10.5ZM1 20.12l16.47-9.49M1.07 28.93l16.46-9.5M8.75 33.98l8.72-5.04"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export default DdosIcon;
