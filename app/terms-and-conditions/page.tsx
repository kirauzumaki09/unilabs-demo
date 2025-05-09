"use client";
import { BuyPage } from "@/modules/components";
import FundMain from "@/modules/components/fund-main";
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="flex justify-center gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-[32px] w-full">
        <div>
        <div className="section !pt-[200px] max-md:!pt-[120px] max-sm:!pb-[60px]   ">
        <h1 className="text-[80px] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px] uppercase text-anybody text-white font-extrabold text-center ">
              <span className="gradText !uppercase">Terms </span> and
              <span className="gradText !uppercase"> Conditions </span>
            </h1>
          </div>
          <div className="  pb-[40px]">
            <div className="container">
              <div className="policySec">
                <p className="text-[24px]">Last Updated: March 2025</p>

                <p>
                  Welcome to Unilabs (https://unilabs.finance). These Terms and
                  Conditions ("Terms") govern your use of our website,
                  participation in our Initial Coin Offering (ICO) presale, and
                  any related services. By accessing or using our website, you
                  agree to comply with these Terms. If you do not agree, please
                  refrain from using our services.
                </p>

                <h2>1. Definitions</h2>
                <ul>
                  <li>
                    <p>
                      <strong>"Unilabs," "We," "Us," or "Our"</strong> refers to
                      the Unilabs project and its team.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>"User," "You," or "Participant"</strong> refers to
                      any individual or entity accessing the website or
                      participating in the presale.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>"Token" (UNIL)</strong> refers to the digital
                      asset offered in the Unilabs ICO presale.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>"Presale"</strong> refers to the initial token
                      sale event before the public ICO.
                    </p>
                  </li>
                </ul>

                <h2>2. Eligibility</h2>
                <ul>
                  <li>
                    <p>
                      You must be at least 18 years old (or the legal age in
                      your jurisdiction) to participate.
                    </p>
                  </li>
                  <li>
                    <p>
                      Residents of restricted jurisdictions (e.g., the USA,
                      China, or countries with strict crypto regulations) are
                      prohibited from participating.
                    </p>
                  </li>
                  <li>
                    <p>
                      You must comply with all applicable local laws and
                      regulations regarding cryptocurrency purchases.
                    </p>
                  </li>
                </ul>

                <h2>3. Token Purchase & Sale Terms</h2>
                <ul>
                  <li>
                    <p>
                      Participation in the presale is voluntary and at your own
                      risk.
                    </p>
                  </li>
                  <li>
                    <p>Tokens are non-refundable once purchased.</p>
                  </li>
                  <li>
                    <p>
                      Unilabs reserves the right to modify, suspend, or cancel
                      the presale at any time.
                    </p>
                  </li>
                  <li>
                    <p>
                      Token distribution will occur after the presale concludes,
                      subject to smart contract execution.
                    </p>
                  </li>
                </ul>

                <h2>4. No Financial Advice</h2>
                <ul>
                  <li>
                    <p>
                      Unilabs does not provide investment, legal, or tax advice.
                    </p>
                  </li>
                  <li>
                    <p>
                      Cryptocurrencies are highly volatile; only invest what you
                      can afford to lose.
                    </p>
                  </li>
                </ul>

                <h2>5. Risks & Disclaimers</h2>
                <ul>
                  <li>
                    <p>
                      <strong>Market Risks:</strong> Token value may fluctuate
                      due to market conditions.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Regulatory Risks:</strong> Changes in laws may
                      impact token functionality.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Technology Risks:</strong> Smart contract
                      vulnerabilities, hacking, or network failures may occur.
                    </p>
                  </li>
                </ul>

                <h2>6. Intellectual Property</h2>
                <ul>
                  <li>
                    <p>
                      All content on the Unilabs website (logos, whitepaper,
                      code) is owned by Unilabs and protected under copyright
                      laws.
                    </p>
                  </li>
                  <li>
                    <p>
                      Unauthorized use, copying, or distribution is prohibited.
                    </p>
                  </li>
                </ul>

                <h2>7. Limitation of Liability</h2>
                <ul>
                  <li>
                    <p>
                      Unilabs is not liable for any losses, damages, or claims
                      arising from:
                    </p>
                    <ul>
                      <li>
                        <p>Token price volatility</p>
                      </li>
                      <li>
                        <p>
                          User errors (e.g., sending funds to the wrong address)
                        </p>
                      </li>
                      <li>
                        <p>Third-party actions (e.g., exchange hacks)</p>
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2>8. Governing Law & Disputes</h2>
                <ul>
                  <li>
                    <p>
                      These Terms are governed by the laws of [Your
                      Jurisdiction].
                    </p>
                  </li>
                  <li>
                    <p>
                      Any disputes shall be resolved through arbitration in
                      [Location].
                    </p>
                  </li>
                </ul>

                <h2>9. Amendments</h2>
                <ul>
                  <li>
                    <p>
                      Unilabs may update these Terms at any time. Continued use
                      of the website constitutes acceptance.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
