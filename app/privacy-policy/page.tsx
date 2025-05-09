"use client";
import { BuyPage } from "@/modules/components";
import FundMain from "@/modules/components/fund-main";
import React from "react";

export default function PriavcyPolicy() {
  return (
    <div className="flex justify-center gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-[32px] w-full">
        <div>
          <div className="section !pt-[200px] max-md:!pt-[120px] max-sm:!pb-[60px]   ">
            <h1 className="text-[80px] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px] uppercase text-anybody text-white font-extrabold text-center ">
              <span className="gradText !uppercase">Privacy </span> Policy           
            </h1>
          </div>
          <div className=" fundUpdatesCardList pb-[40px]">
            <div className="container">
              <div className="policySec">
                <p className="text-[24px]">Last Updated: March 2025</p>

                <p>
                  Unilabs ("we," "us," or "our") respects your privacy. This
                  Privacy Policy explains how we collect, use, and protect your
                  personal data when you visit{" "}
                  <a href="https://unilabs.finance">https://unilabs.finance</a>{" "}
                  or participate in our presale.
                </p>

                <h2>1. Information We Collect</h2>
                <ul>
                  <li>
                    <p>
                      <strong>Personal Data:</strong> Name, email, wallet
                      address, KYC details (if required).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Technical Data:</strong> IP address, browser type,
                      cookies, and analytics.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Transaction Data:</strong> Purchase history,
                      contributions in crypto (ETH, BTC, etc.).
                    </p>
                  </li>
                </ul>

                <h2>2. How We Use Your Data</h2>
                <ul>
                  <li>
                    <p>To process token sales and verify eligibility.</p>
                  </li>
                  <li>
                    <p>To improve website functionality and user experience.</p>
                  </li>
                  <li>
                    <p>
                      To comply with legal obligations (e.g., anti-money
                      laundering laws).
                    </p>
                  </li>
                </ul>

                <h2>3. Data Sharing & Third Parties</h2>
                <p>We may share data with:</p>
                <ul>
                  <li>
                    <p>Payment processors (e.g., MetaMask, Binance Pay).</p>
                  </li>
                  <li>
                    <p>Legal authorities if required by law.</p>
                  </li>
                  <li>
                    <p>Analytics providers (Google Analytics).</p>
                  </li>
                </ul>

                <h2>4. Security Measures</h2>
                <ul>
                  <li>
                    <p>
                      We implement SSL encryption, secure wallets, and strict
                      access controls.
                    </p>
                  </li>
                  <li>
                    <p>
                      However, no online system is 100% secure; use caution.
                    </p>
                  </li>
                </ul>

                <h2>5. Your Rights</h2>
                <ul>
                  <li>
                    <p>Access, correct, or delete your personal data.</p>
                  </li>
                  <li>
                    <p>Opt out of marketing emails.</p>
                  </li>
                  <li>
                    <p>Withdraw consent (where applicable).</p>
                  </li>
                </ul>

                <h2>6. Cookies & Tracking</h2>
                <ul>
                  <li>
                    <p>We use cookies for analytics and session management.</p>
                  </li>
                  <li>
                    <p>You can disable cookies in your browser settings.</p>
                  </li>
                </ul>

                <h2>7. Changes to This Policy</h2>
                <ul>
                  <li>
                    <p>
                      We may update this Privacy Policy; check the last updated
                      date.
                    </p>
                  </li>
                </ul>

                <h2>8. Contact Us</h2>
                <ul>
                  <li>
                    <p>
                      For questions, contact:{" "}
                      <a href="mailto:support@unilabs.finance">
                        support@unilabs.finance
                      </a>
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
