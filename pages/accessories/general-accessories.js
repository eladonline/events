import GeneralAccessories from "src/screens/accessories/generalAccessories.js";
import React from 'react'
import { NextSeo } from "next-seo";
import { generalAccessories } from "src/components/seo/seoDesc";

export default () => (
  <>
    <NextSeo {...generalAccessories} />
    <GeneralAccessories />
  </>
);
