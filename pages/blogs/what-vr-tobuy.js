import Blog from "src/screens/blogs/what-vr-tobuy.js";
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
