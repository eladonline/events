import Blog from "src/screens/blogs/get-over-dissyness.js";
import { NextSeo } from "next-seo";
import { blogGetOverDissyness } from "src/components/seo/seoDesc";

export default () => {
  return (
    <>
      <NextSeo {...blogGetOverDissyness} />
      <Blog />
    </>
  );
};
