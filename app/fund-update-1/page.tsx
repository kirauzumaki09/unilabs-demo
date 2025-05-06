import assets from "@/assets";
import FundDetailsPage from "@/modules/components/fund-details";

const FundUpdate1 = () => {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col w-full">
        <FundDetailsPage
          image={assets.fundUpdate1}
          title="Fund Update 1"
           date="May 1, 2025"
        >
          <p>Hello Unilabs Community,</p>

          <p>
            Today, we are excited to share the very first steps in building
            Unilabs — the next-generation AI-powered DeFi asset manager. Our
            presale platform is already live, but now begins the full rollout of
            the autonomous systems that will define Unilabs over the next 90
            days.
          </p>

          <h2>Setting the Core Foundations</h2>

          <p>
            Our team has finalized the modular blueprint for the AI Portfolio
            Engine. This system will power fund management across sectors like
            Layer-1 assets, AI tokens, DeFi protocols, and emerging real-world
            assets (RWA).
          </p>

          <p>
            We have laid down the basics for a self-adjusting portfolio logic,
            ensuring the system can rebalance itself based on market volatility,
            asset correlations, and momentum shifts. Our experts also designed a
            yield aggregation framework, which will pull from staking, lending,
            and liquidity provisioning to optimize returns through AI.
          </p>

          <p>
            To strengthen risk management, we structured the foundation for
            real-time scanning of liquidity risks, smart contract
            vulnerabilities, and changing market sentiment.
          </p>

          <h2>Launching the AI Signal Engine</h2>

          <p>
            We kicked off Phase 0 of the AI Signal Engine. Our data science team
            started training models on historical market data and blockchain
            activity to predict the best asset allocations.
          </p>

          <p>
            The data pipelines are now live, pulling in crypto market feeds,
            on-chain metrics, and DeFi protocol health scores. Early modeling
            has begun for volatility clustering and mean-reversion indicators,
            helping to shape smarter future predictions.
          </p>

          <h2>Enhancements to Our Presale Platform</h2>

          <p>
            Our presale platform got its first major backend upgrade. We
            improved referral link tracking to better validate affiliate
            rewards. We also began setting the groundwork for dynamic bonus
            token allocations, which will soon be powered by AI-detected wallet
            behaviors.
          </p>

          <h2>Building a Transparent Audit Layer</h2>

          <p>
            Transparency is at the heart of Unilabs. Our team has started
            designing an audit layer for real-time tracking of AI-driven
            investment actions.
          </p>

          <p>
            We are planning to offer public access to portfolio rebalancing
            proofs through Merkle tree verification. Wireframes for a
            user-facing AI activity log dashboard are also in development.
          </p>

          <p>
            This is just the beginning. We’re moving fast and can’t wait to show
            you more. Stay tuned — the future of autonomous DeFi is being built
            right here.
          </p>
        </FundDetailsPage>
      </main>
    </div>
  );
};

export default FundUpdate1;
