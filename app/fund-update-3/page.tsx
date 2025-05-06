import assets from "@/assets";
import FundDetailsPage from "@/modules/components/fund-details";

const FundUpdate1 = () => {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col w-full">
        <FundDetailsPage
          image={assets.fundUpdate3}
          title="Fund Update 3"
          date="May 5, 2025"
        >
          <p>Hello Unilabs Community,</p>

          <p>
            Today, our team made strong progress toward building the core
            systems that will manage Unilabs’ fund strategies. Each fund —
            whether it's Bitcoin, AI, Real World Assets, or Mining — will soon
            have its own AI module, custom-built for its needs. This modular
            approach will allow each fund to perform at its best without
            depending on others. Here are the details from today’s work.
          </p>

          <h2>Building Fund-Specific AI Architecture</h2>

          <p>
            Our experts started laying out the modular architecture that will
            drive fund-specific AI management. Each fund will follow its own set
            of rules, tailored around unique performance goals, risk levels, and
            rebalancing habits. For instance, the Bitcoin Fund’s AI will monitor
            Bitcoin dominance, macroeconomic trends, and ETF flows. Meanwhile,
            the AI Fund’s system will track AI token movements and innovation
            trends.
          </p>

          <p>
            Smart contracts will keep funds isolated to prevent risks from
            spilling over. This structure ensures that every fund remains a
            fully independent, AI-powered product inside the Unilabs ecosystem.
          </p>

          <h2>Smart Contract Treasury Segmentation</h2>

          <p>
            We also introduced treasury segmentation into our smart contracts
            today. Moving forward, each fund strategy will have its own wallet.
            Funds collected during the presale will be sorted into the right
            pools once we launch. Our treasury system will be fully transparent,
            giving investors a clear view of how their assets are performing in
            each fund.
          </p>

          <h2>Early Models for Fund Rebalancing</h2>

          <p>
            Our team completed early modeling for dynamic fund rebalancing. The
            Bitcoin Fund will rebalance less often, responding to macro shifts.
            The AI Fund will see more frequent adjustments, considering the fast
            pace of innovation. The RWA Fund will follow traditional market
            cycles, while the Mining Fund will adjust based on profitability and
            network changes. These models are now entering simulation testing
            before being fully automated through AI.
          </p>

          <h2>Planning the Portfolio Health Dashboard</h2>

          <p>
            While our engineers built out the backend, our design team finalized
            wireframes for the Portfolio Health Dashboard. Investors will soon
            be able to track fund performance, asset breakdowns, risk scores,
            and AI activity in real-time. On-chain proof-of-allocation models
            will also be part of the dashboard. Our goal is to set a new
            standard for DeFi transparency, keeping it simple and user-friendly.
          </p>
        </FundDetailsPage>
      </main>
    </div>
  );
};

export default FundUpdate1;
