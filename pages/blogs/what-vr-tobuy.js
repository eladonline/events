import Blog from "src/screens/blogs/what-vr-tobuy.js";
import { NextSeo } from "next-seo";
import { blogwhatVrTobuy } from "src/components/seo/seoDesc";

export default () => {
  return (
    <>
      <NextSeo {...blogwhatVrTobuy} />
      <Blog />
    </>
  );
};
