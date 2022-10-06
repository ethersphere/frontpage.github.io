import type { NextPage } from "next";
import Head from "next/head";

import {
  Banner,
  Connect,
  Cta,
  Footer,
  Navigation,
  Post,
  Roadmap,
  Section,
} from "@/components/index";
import { getPageBySlug } from "lib/pages";
import meta from "data/meta.json";
import { Meta } from "@/components/common";

const Page: NextPage = (content: any) => {
  const sections: any = {
    Section: Section,
    Cta: Cta,
    Post: Post,
    Roadmap: Roadmap
  };

  return (
    <div className="bg-gray-100">
      <Meta title={content.meta.title ?? meta.title} />

      <main>
        <Banner />

        <Navigation textColor="text-gray-700" />

        {content.sections.map((section: any, index: number) => {
          const SectionTag = sections[section.type];
          return <SectionTag key={index} index={index} {...section.data} />;
        })}

        <Connect />

        <Footer />
      </main>
    </div>
  );
};

export default Page;

export async function getStaticProps(context: any) {
  const content = getPageBySlug(context.params.slug);

  return {
    props: { ...content },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["build"] } },
      { params: { slug: ["build", "desktop"] } },
      { params: { slug: ["build", "run-a-full-node"] } },
      { params: { slug: ["why"] } },
      { params: { slug: ["roadmap"] } },
      { params: { slug: ["milestone1"] } },
      { params: { slug: ["milestone2"] } },
      { params: { slug: ["milestone3"] } },
      { params: { slug: ["milestone4"] } },
      { params: { slug: ["grants"] } },
      { params: { slug: ["foundation"] } },
    ],
    fallback: false,
  };
}
