import React from "react";
import tw from "tailwind-styled-components";

const Footer = () => {
  const FooterLi = tw.li`
    h-2
  `;
  return (
    <footer className="max-w-[960px] mx-auto">
      <div className="flex gap-16 pb-6">
        <div>
          <h2 className="font-bold">
            <a href="#">Real Estate Markets</a>
          </h2>
          <ul>
            <li className="text-sm">
              <a href="">Alaska Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Alabama Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arkansas Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arizona Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">
                More
                {/* <img src="/assets/down.svg" alt="#" /> */}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">
            <a href="#">Real Estate Markets</a>
          </h2>
          <ul>
            <li className="text-sm">
              <a href="">Alaska Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Alabama Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arkansas Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arizona Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">
                More
                {/* <img src="/assets/down.svg" alt="#" /> */}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">
            <a href="#">Real Estate Markets</a>
          </h2>
          <ul>
            <li className="text-sm">
              <a href="">Alaska Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Alabama Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arkansas Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arizona Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">
                More
                {/* <img src="/assets/down.svg" alt="#" /> */}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">
            <a href="#">Real Estate Markets</a>
          </h2>
          <ul>
            <li className="text-sm">
              <a href="">Alaska Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Alabama Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arkansas Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">Arizona Real Estate</a>
            </li>
            <li className="text-sm">
              <a href="">
                More
                {/* <img src="/assets/down.svg" alt="#" /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs py-4">
        <p>
          Trulia is a registered Trademark of Zillow, Inc. Zillow, Inc. holds
          real estate brokerage licenses in all 50 states and D.C. and Zillow
          (Canada) Inc. holds real estate brokerage licenses in multiple
          provinces.
        </p>
        <p>§ 442-H New York Standard Operating Procedures</p>
        <p>New York Fair Housing Notice</p>
        <p>
          TREC: Information about brokerage services, Consumer protection notice
        </p>
        <p>California DRE #1522444</p>
        <p>Contact Zillow, Inc Brokerage</p>
      </div>
      <div className="text-xs py-4">
        <p>
          Trulia CorporateAbout Zillow GroupFair Housing
          GuideCareersNewsroomInvestor RelationsAdvertising TermsPrivacyTerms of
          UseListings Quality PolicySubscription TermsHelpPrivacy PortalCookie
          Preference Do Not Sell My Personal Information
        </p>
      </div>

      <div className="text-xs py-4">
        <p>
          Zillow Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please let us know.
        </p>
      </div>
      <div className="text-xs py-4">
        <p>
          Copyright © 2022 Trulia, LLC. All rights reserved. Equal Housing
          Opportunity. Have a Question? Visit our Help Center to find the
          answer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
