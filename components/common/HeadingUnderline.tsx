import * as React from "react";
import { motion } from "framer-motion";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import { cx } from "utils";

type HeadingUnderlineProps = {
  title: string;
  type?: "default" | "small";
};

const HeadingUnderline: React.FC<HeadingUnderlineProps> = ({
  title,
  type = "default",
}) => {
  const size: Size = useWindowSize();

  const underlineSize =
    type === "default" ? (size && size.width && size.width < 768 ? 8 : 16) : 10;
  const textSize =
    type === "default"
      ? "text-4xl md:text-[64px] md:leading-[70px]"
      : "text-[38px] leading-[50px]";

  return (
    <motion.h2
      whileInView={{
        backgroundSize: [`0% ${underlineSize}px`, `100% ${underlineSize}px`],
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className={cx(
        "inline font-bold tracking-[-0.01em] heading-underline",
        textSize
      )}
    >
      {title}
    </motion.h2>
  );
};

export default HeadingUnderline;
