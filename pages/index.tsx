import type { NextPage } from "next";
import Head from "next/head";
import {
  Dapp,
  DevelopSection,
  FairdDriveSection,
  Wikipedia,
  Banner,
  Hero,
  Builders,
  Millions,
  Connect,
  Footer,
  GeneralSection,
  Navigation,
} from "@/components/index";
import meta from "data/meta.json";
import content from "data/pages/index.json";
import { CtaType, FeatureType, TabType } from "types";
import Bounties from "@/components/sections/Bounties";
import { Meta } from "@/components/common";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <Meta title={meta.title} />
      </Head>

      <main className="">
        <Banner />

        <Navigation />

        <Hero
          title={content.hero.title}
          background={content.hero.background}
          content={content.hero.content}
          ctas={content.hero.ctas as Array<CtaType>}
          quote={content.hero.quote}
          //  @ts-ignore
          cta={content.hero.cta}
        />

        {/* @ts-ignore */}
        <GeneralSection content={content.unstoppable} textColor="text-black" />

        <Wikipedia
          titleSuffix={content.wikipedia.titleSuffix}
          content={content.wikipedia.content}
          ctas={content.wikipedia.ctas as Array<CtaType>}
          tagline={content.wikipedia.tagline}
        />

        <DevelopSection
          tagline={content.develop.tagline}
          title={content.develop.title}
          ctas={content.develop.ctas as Array<CtaType>}
          content={content.develop.content}
          tabs={content.develop.tabs as Array<TabType>}
        />

        <FairdDriveSection
          tagline={content.fairdata.tagline}
          title={content.fairdata.title}
          content={content.fairdata.content}
          ctas={content.fairdata.ctas as Array<CtaType>}
        />

        <Dapp
          tagline={content.dapp.tagline}
          title={content.dapp.title}
          ctas={content.dapp.ctas as Array<CtaType>}
          features={content.dapp.features as Array<FeatureType>}
        />

        <GeneralSection
          // @ts-ignore
          content={content.news.content}
          // @ts-ignore
          background={content.news.background}
          // @ts-ignore
          textColor={content.news.textColor}
        />

        <Builders
          tagline={content.builders.tagline}
          title={content.builders.title}
          content={content.builders.content}
          ctas={content.builders.ctas as Array<CtaType>}
          features={content.builders.features as Array<FeatureType>}
        />

        <Millions
          tagline={content.millions.tagline}
          title={content.millions.title}
          content={content.millions.content}
          ctas={content.millions.ctas as Array<CtaType>}
          // @ts-ignore
          starts_in={content.millions.starts_in}
        />

        <Bounties
          tagline={content.bounties.tagline}
          title={content.bounties.title}
          content={content.bounties.content}
          ctas={content.bounties.ctas as Array<CtaType>}
          features={content.bounties.features as Array<FeatureType>}
        />

        <Connect />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
