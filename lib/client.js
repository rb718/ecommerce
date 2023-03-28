import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dsnr1rid",
  dataset: "production",
  apiVersion: "2023-03-24",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const client1 = createClient({
  projectId: "dsnr1rid",
  dataset: "production",
  apiVersion: "2023-03-24",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
