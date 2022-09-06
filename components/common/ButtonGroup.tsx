import * as React from "react";

import { cx } from "utils";
import Button from "./Button";
import { ButtonBackgroundType, ButtonTextColorType, CtaType } from "types";

type ButtonGroupProps = {
  ctas?: Array<CtaType>;
  className?: string;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  ctas = [],
  className = "",
}) => {
  if (ctas.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "flex flex-col gap-4 sm:flex-row sm:items-center",
        className
      )}
    >
      {ctas.map((cta, index) => (
        <Button
          key={index}
          background={cta.background as ButtonBackgroundType}
          color={cta.color as ButtonTextColorType}
          title={cta.title}
          href={cta.href}
          arrow={cta.arrow}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
