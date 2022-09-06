import * as React from "react";
import Link from "next/link";
import { cx } from "utils";
import ButtonInternals from "./button/ButtonInternals";
import { ButtonBackgroundType, ButtonTextColorType } from "types";

type ButtonProps = {
  background: ButtonBackgroundType;
  color: ButtonTextColorType;
  href: string;
  title: string;
  arrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  href,
  title,
  arrow = false,
  background = "orange",
  color = "black",
}) => {
  let classNameBackground =
    "bg-orange-500 focus:outline-none hover:bg-orange-hover";

  if (background === "transparent") {
    classNameBackground = "bg-orange-transparent focus:outline-none";
  } else if (background === "white") {
    classNameBackground = "bg-white focus:ring-white";
  } else if (background === "black") {
    classNameBackground = "bg-black focus:outline-none";
  } else if (background === "orange-onDark") {
    classNameBackground =
      "bg-orange-onDark focus:outline-none hover:bg-orange-hover";
  }

  let classNameColor = "text-black";

  if (color === "gray") {
    classNameColor = "text-gray-100";
  }

  const className = cx(
    "transition duration-200 uppercase inline-flex justify-center items-center text-lg font-semibold tracking-wider px-4 py-2 font-display gap-2 group focus:outline-none",
    classNameBackground,
    classNameColor
  );

  // If href starts with http, we use anchor html tag, otherwise we use next/link
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <ButtonInternals title={title} arrow={arrow} />
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={className}>
        <ButtonInternals title={title} arrow={arrow} />
      </a>
    </Link>
  );
};

export default Button;
