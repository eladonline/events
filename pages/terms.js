import Terms from "src/screens/terms";
import { terms } from "src/components/seo/seoDesc";
import { NextSeo } from "next-seo";

export default () => (
  <>
    <NextSeo {...terms} />
    <Terms />
  </>
);
