import type { NextPage } from "next";
import Head from "next/head";

import {
  Banner,
  Connect,
  Cta,
  Footer,
  Navigation,
  Section,
} from "@/components/index";
import { getPageBySlug } from "lib/pages";
import meta from "data/meta.json";
import content from "data/pages/jobs.json";
import SecondaryHero from "@/components/sections/SecondaryHero";
import { Meta } from "@/components/common";

// Fetch jobs with categories
// link single page jobs

const Jobs: NextPage = () => {
  const sections: any = {
    Section: Section,
    Cta: Cta,
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <Meta title={content.meta.title ?? meta.title} />
      </Head>

      <main>
        <Banner />

        <Navigation textColor="text-gray-700" />

        {/* @ts-ignore */}
        <SecondaryHero index={0} {...content.hero} />

        <Connect />

        <Footer />
      </main>
    </div>
  );
};

export default Jobs;
