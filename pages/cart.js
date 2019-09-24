import Cart from "src/screens/cart";
import { NextSeo } from "next-seo";
import { cart } from "src/components/seo/seoDesc";

export default () => (
  <>
    <NextSeo {...cart} />
    <Cart />
  </>
);
