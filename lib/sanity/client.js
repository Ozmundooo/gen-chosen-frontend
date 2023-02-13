// Inside sanity.js

import { createCurrentUserHook, createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: "liv4e4gc",
  dataset: "production",
  apiVersion: "2023-02-01",
  useCdn: "production",
};

// This is to fetch data by making a query to the backend in sanity studio
export const sanityClient = createClient(config);

// This will parse the source we get back from the query and give us the image url
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
