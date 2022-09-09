import type { NextPage } from "next";
import Head from "next/head";

import {
  Banner,
  Connect,
  Cta,
  Footer,
  Navigation,
  Post,
  Section,
} from "@/components/index";
import meta from "data/meta.json";
import SecondaryHero from "@/components/sections/SecondaryHero";
import { Meta } from "@/components/common";
import { getJobBySlug, getJobsSlugs } from "lib/jobs";

const JobSingle: NextPage = (content: any) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <Meta title={content.meta.title ?? meta.title} />
      </Head>

      <main>
        <Banner />

        <Navigation textColor="text-gray-700" />

        {/* @ts-ignore */}
        <SecondaryHero index={0} title={content.job.title} />

        <div className="md:pt-20 lg:pt-40">
          <Post
            sidebar={{
              ctas: [
                {
                  title: "All Jobs",
                  href: "/jobs",
                  arrow: true,
                  background: "transparent",
                },
              ],
            }}
            content={content.job.content}
            border={false}
          />
        </div>

        <Connect />

        <Footer />
      </main>
    </div>
  );
};

export default JobSingle;

export async function getStaticProps(context: any) {
  const content = getJobBySlug(context.params.slug);

  return {
    props: { ...content },
  };
}

export async function getStaticPaths() {
  const paths = getJobsSlugs();

  return {
    paths: paths.map((path) => ({ params: { slug: path.slice(0, -5) } })),
    fallback: false,
  };
}
