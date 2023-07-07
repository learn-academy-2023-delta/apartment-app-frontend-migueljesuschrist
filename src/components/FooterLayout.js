import React from 'react';
import { FooterContent } from "./FooterContent.js";
import { FooterBox } from "./FooterBox.js";

export const FooterLayout = ({ children }) => (
  <FooterBox
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <FooterBox />
  </FooterBox>
);
