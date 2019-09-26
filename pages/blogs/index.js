import Blogs from "../../src/screens/blogs/blogs";
import { NextSeo } from "next-seo";
import { blogs } from "src/components/seo/seoDesc";

export default () => {
  return   <>
  <NextSeo {...blogs} />
  <Blogs />
</>;
};
