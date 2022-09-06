import * as React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType, CardType } from "types";
import { HeadingUnderline } from "@/components/common";
import FeatureList from "../common/FeatureList";
import Card from "../common/Card";

type NewsProps = {
  tagline?: string;
  title: string;
  ctas: Array<CtaType>;
  items: Array<CardType>;
};

const News: React.FC<NewsProps> = ({ tagline, title, ctas, items = [] }) => {
  return (
    <section className="relative flex justify-center overflow-hidden text-gray-100 bg-gray-700">
      <Container className="flex flex-col pt-24 pb-16 md:pb-44 md:pt-40">
        <Tagline copy={tagline} />

        <div className="mb-8 md:mb-16 md:w-1/2">
          <HeadingUnderline title={title} />
        </div>

        {/* News cards */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 gap-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.slice(0, 3).map((item, index) => (
              <Card
                key={index}
                className={index === 0 ? "sm:col-span-2" : ""}
                type={index === 0 ? "large" : "regular"}
                title={item.title}
                category={item.category}
                readTime={item.readTime}
                href={item.href}
                image={item.image}
                copy={item.copy}
                cta={item.cta}
              ></Card>
            ))}
          </div>
        )}

        <ButtonGroup ctas={ctas} className="mt-16 mb-4" />
      </Container>
    </section>
  );
};

export default News;
