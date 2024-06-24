import { MetadataRoute } from "next";

// import { BASE_URL } from "./(config)/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      disallow: "/terms/",
      userAgent: "*",
    },
    // sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
