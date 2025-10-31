import { appData } from "@/lib/appData";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"], // Prevent search engines from indexing sensitive areas
      },
    ],
    sitemap: [`${appData.appURL}/sitemap.xml`],
    host: appData.appURL,
  };
}
