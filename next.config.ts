import type { NextConfig } from "next";
import lingo from "lingo.dev/compiler";

const nextConfig: NextConfig = {
  /* Next.js config options here */
};

export default lingo.next({
  sourceLocale: "en",
  targetLocales: ["es", "fr", "de"],
  models: {
    "*:*": "groq:mistral-saba-24b",
  },
})(nextConfig);
