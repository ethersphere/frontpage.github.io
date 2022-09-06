import * as React from "react";
import { FeatureListType } from "types";
import { cx } from "utils";
import Feature from "./Feature";

type FeatureListProps = FeatureListType;

const FeatureList: React.FC<FeatureListProps> = ({
  features = [],
  className = "",
  columns = "four",
  type = "default",
}) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "grid relative z-10",
        type === "default" ? "gap-y-12" : "gap-y-16",
        columns === "four"
          ? "grid-cols-1 -ml-3 md:grid-cols-4 sm:grid-cols-2 sm:-ml-4"
          : "",
        columns === "six"
          ? "grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 sm:-ml-4"
          : "",
        columns === "three"
          ? "grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 sm:-ml-4"
          : "",
        columns === "two"
          ? "grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 sm:-ml-4 sm:gap-x-14"
          : "",
        className
      )}
    >
      {features.map((feature, index) => (
        <Feature key={index} type={type} {...feature} />
      ))}
    </div>
  );
};

export default FeatureList;
