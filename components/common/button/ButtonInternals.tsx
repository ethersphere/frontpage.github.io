import * as React from "react";
import { ArrowIcon } from "@/icons/components/index";

type ButtonInternalsProps = {
  title: string;
  arrow: boolean;
};

const ButtonInternals: React.FC<ButtonInternalsProps> = ({ title, arrow }) => (
  <>
    <span>{title}</span>

    {arrow && (
      <div className="relative w-4 h-4">
        <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 group-hover:translate-x-4 group-hover:opacity-0" />
        <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    )}
  </>
);

export default ButtonInternals;
