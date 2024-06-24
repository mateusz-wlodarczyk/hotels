import { MetadataRoute } from "next/types";

import { getPostsFileNames } from "./(lib)/blogUtils";
const BASE_URL = "mw/mw";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      priority: 1,
      url: BASE_URL,
    },
    {
      priority: 0.8,
      url: `${BASE_URL}/o-nas`,
    },
    {
      priority: 0.8,
      url: `${BASE_URL}/sklep`,
    },
    {
      priority: 0.7,
      url: `${BASE_URL}/blog`,
    },
    // slugi z hotels
    // ...(await getPostsFileNames()).map((fileName) => ({
    //   lastModified: new Date().toISOString(),
    //   priority: 0.7,
    //   url: `${BASE_URL}/blog/${fileName}`,
    // })),
  ];
}
