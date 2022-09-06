import * as React from "react";
import { cx } from "utils";

type SectionContentProps = {
  content?: string;
  className?: string;
  fullWidth?: boolean;
};

const SectionContent: React.FC<SectionContentProps> = ({
  content = "",
  className = "",
  fullWidth = false,
}) => {
  if (content.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "prose leading-[26px] md:prose-lg",
        className,
        fullWidth ? "w-full" : "max-w-xl"
      )}
      style={{ orphans: 4 }}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default SectionContent;
