import * as React from "react";
import { ButtonGroup, Container, SectionContent } from "@/components/common";
import { CtaType, ImageType } from "types";
import { cx } from "utils";

type SecondaryHeroProps = {
  index: number;
  title: string;
  id?: string;
  background: ImageType;
  content: string;
  footnote?: string;
  ctas?: Array<CtaType>;
};

const SecondaryHero: React.FC<SecondaryHeroProps> = ({
  index = 0,
  id = "",
  title,
  background,
  content,
  ctas,
  footnote,
}) => {
  return (
    <div id={id} className="relative flex justify-center">
      {/* Whitelist Tailwind classes */}
      <div className="absolute hidden pointer-events-none top-32 md:left-16" />

      <div className="absolute z-0 w-screen min-h-screen pointer-events-none bg-gray-gradient"></div>
      <Container
        className={cx(
          "w-full z-10 pb-16 md:pb-0",
          index === 0 ? "mt-48 lg:mt-96" : "mt-32 lg:mt-64",
          background && background.src ? "md:aspect-[1.9]" : ""
        )}
      >
        <h1 className="font-bold text-6xl lg:text-[88px] tracking-[-0.01em] leading-[1.1] py-10">
          {title}
        </h1>

        {background && background.src.length > 0 && (
          <img
            className={cx(
              "absolute w-screen pointer-events-none max-w-[1440px] mx-auto",
              background.class
                ? background.class
                : index === 0
                ? "top-16 md:top-52 left-0 right-0"
                : "top-8 md:top-4 left-0 right-0"
            )}
            src={background.src}
            alt={background.alt}
          />
        )}

        <SectionContent className="md:pr-16" content={content} />
        <ButtonGroup className="py-4 mt-8" ctas={ctas} />

        {footnote && footnote.length > 0 && (
          <div
            className="max-w-lg py-4 pr-8 italic prose-sm prose"
            dangerouslySetInnerHTML={{
              __html: footnote,
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default SecondaryHero;
