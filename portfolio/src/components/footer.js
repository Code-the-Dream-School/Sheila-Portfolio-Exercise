import React, { Component } from "react";
import __ReactMDL from "react-mdl";
import {
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";

const Footer = () => {
  return (
    <Footer size="mega">
      <FooterSection type="middle">
        <FooterDropDownSection title="Features">
          <FooterLinkList>
            <a href="#">About</a>
            <a href="#">Terms</a>
            <a href="#">Partners</a>
            <a href="#">Updates</a>
          </FooterLinkList>
        </FooterDropDownSection>
      </FooterSection>

      <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
          <a href="#">Help</a>
          <a href="#">Privacy & Terms</a>
        </FooterLinkList>
      </FooterSection>
    </Footer>
  );
};

export default Footer;
