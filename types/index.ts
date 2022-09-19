import * as React from "react";

export type ButtonBackgroundType =
  | "orange"
  | "orange-onDark"
  | "transparent"
  | "white"
  | "black";
export type ButtonTextColorType = "black" | "gray";

export type CtaType = {
  title: string;
  href: string;
  background?: ButtonBackgroundType;
  color?: ButtonTextColorType;
  arrow?: boolean;
  type?: "default" | "download";
  back?: boolean;
};

export type LinkType = {
  children: React.ReactNode;
  href: string;
};

export type ImageType = {
  src: string;
  alt: string;
  class?: string;
  lazy?: boolean;
  position?: string;
};

export type FeatureListType = {
  features: Array<FeatureType>;
  className?: string;
  columns?: "six" | "four" | "three" | "two";
  type?: "default" | "large";
  spacing?: "default" | "wide";
};

export type FeatureType = {
  title: string;
  content?: string;
  icon?: string;
  cta?: CtaType;
  type?: "default" | "large";
  copyClass?: string;
};

export type TabType = {
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
  code?: string;
  code_language?: string;
};

export type CardType = {
  className?: string;
  title: string;
  href: string;
  image?: ImageType;
  copy?: string;
  cta?: CtaType;
  type?: "large" | "regular";
  category?: string;
  readTime?: Number;
};
