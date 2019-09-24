import React from 'react'
import Controllers from "src/screens/accessories/controllers.js";
import { NextSeo } from "next-seo";
import { controllers } from "src/components/seo/seoDesc";

export default () => (
  <>
    <NextSeo {...controllers} />
    <Controllers />
  </>
);


