import React from "react";
import { pillarsQuerys } from "../../sanity/pillarsQuery";
import { sanityClient } from "../../sanity/client";
export const getServerSideProps = async () => {
  const pillars = await sanityClient.fetch(pillarsQuerys);
  if (!pillars.length) {
    return {
      props: {
        pillars: [],
      },
    };
  } else
    return {
      props: {
        pillars,
      },
    };
};

export default function Pillars({ pillars }) {
  console.log(pillarsQuerys);
  return <div>Pillars</div>;
}
