import type { NextPage } from "next";
import Head from "next/head";

import { Banner, Connect, Footer, Navigation } from "@/components/index";
import meta from "data/meta.json";
import content from "data/pages/jobs.json";
import SecondaryHero from "@/components/sections/SecondaryHero";
import { Meta } from "@/components/common";
import ContentContainer from "@/components/sections/ContentContainer";
import { getAllJobs } from "lib/jobs";

const Jobs: NextPage = ({ jobs }: any) => {
  return (
    <div className="bg-gray-100">
      <Meta title={content.meta.title ?? meta.title} />

      <main className="overflow-hidden">
        <Banner />

        <Navigation textColor="text-gray-700" />

        {/* @ts-ignore */}
        <SecondaryHero index={0} {...content.hero} />

        {jobs && jobs.length > 0 && (
          <div className="relative z-10 flex flex-col items-center pb-24 space-y-16 lg:pb-40 md:space-y-32">
            {jobs.map((item: any, index: number) => (
              <ContentContainer
                key={index}
                features={{
                  columns: "three",
                  features: item.items.map((job: any) => ({
                    title: job.job.title,
                    content: job.job.description,
                    cta: {
                      title: "More",
                      href: `/jobs/${job.job.slug}`,
                      arrow: true,
                      background: "transparent",
                    },
                  })),
                }}
                {...item}
              />
            ))}
          </div>
        )}

        <Connect />

        <Footer />
      </main>
    </div>
  );
};

export default Jobs;

export async function getStaticProps() {
  const jobs = getAllJobs();

  // Find unique categories from list
  const categories = jobs.reduce((acc: any, item: any) => {
    if (!acc.includes(item.job.category)) {
      acc.push(item.job.category);
    }
    return acc;
  }, []);

  const order = [
    "Bee",
    "JS / Bee-JS",
    "Research",
    "Comms",
    "Fair Data Society project",
  ];

  // Sort categories by order
  categories.sort((a: any, b: any) => {
    return order.indexOf(a) - order.indexOf(b);
  });

  // Group jobs by the categories above and list them
  const groupedJobs = categories.map((category: string) => ({
    title: category,
    items: jobs.filter((job: any) => job.job.category === category),
  }));

  return {
    props: { jobs: groupedJobs },
  };
}
