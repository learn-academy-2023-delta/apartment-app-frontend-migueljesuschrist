import React from 'react';
import { HeaderContent } from "./HeaderContent.js";
import { HeaderBox } from "./HeaderBox.js";

export const HeaderLayout = ({ children }) => (
  <HeaderBox
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <HeaderContent />
  </HeaderBox>
);
