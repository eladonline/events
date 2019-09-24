import Stands from "src/screens/accessories/stands.js";
import { NextSeo } from "next-seo";
import { stands } from "src/components/seo/seoDesc";

export default () => (
  <>
    <NextSeo {...stands} />
    <Stands />
  </>
);
