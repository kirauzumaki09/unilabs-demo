import assets from "@/assets";
import FundDetailsPage from "@/modules/components/fund-details";

const FundUpdate1 = () => {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col w-full">
        <FundDetailsPage
          image={assets.fundUpdate6}
          title="Fund Update 6"
          date="May 8, 2025"
        >
          <p>Hello Unilabs Community</p>
          <p>
            Today, our team made significant progress on the path to fully
            autonomous treasury operations. We focused on connecting Unilabs’
            treasury simulation system with live DeFi environments in a
            controlled, secure setting.
          </p>
          <p>
            This hands-on testing gives our AI systems a realistic view of how
            decentralized markets behave—and prepares us for real-world
            execution. Here’s what we did today.
          </p>

          <h2>Live DeFi Integration Underway</h2>
          <p>
            Our experts successfully linked the Portfolio Execution Engine with
            selected DeFi protocol staging environments. This allowed us to
            simulate live asset deployments. We tested smart contract bridges
            between our treasury system and DeFi protocols handling staking,
            yield farming, and liquidity pools. These tests focused on safe fund
            deployments with optimized settings for gas fees, slippage, and
            liquidity pool choice.
          </p>
          <p>
            We also tried asset withdrawals and rebalancing strategies,
            responding to live price changes. These simulations proved the
            system’s speed, precision, and ability to adjust dynamically in real
            time. It’s a critical milestone as we edge closer to handling real
            funds with confidence.
          </p>

          <h2>Fund Simulations in Motion</h2>
          <p>
            Our team expanded testing across four different fund strategies:
            BTC, AI, RWA, and Mining. Each fund was set up in the simulation
            with different asset exposures. Bitcoin funds were tested using
            custodial wrappers and DeFi Bitcoin pools. AI funds explored tokens
            from the high-growth artificial intelligence sector.
          </p>
          <p>
            RWA simulations involved tokenized government bonds and stablecoins.
            The Mining fund focused on pools tied to mining rewards and hash
            rate derivatives. By tracking each fund’s behavior, we’re refining
            how our system adjusts portfolios and manages risk, all without
            human input.
          </p>

          <h2>Gas Optimization Breakthrough</h2>
          <p>
            Our engineering team introduced dynamic gas optimization to the
            execution layer. These algorithms analyze gas fee patterns in real
            time, allowing us to delay or batch transactions when needed. They
            also prioritize transactions based on urgency and risk.
          </p>
          <p>
            Early tests suggest we can cut transaction costs by up to 22% during
            peak congestion. This is a big step toward cost-efficient treasury
            operations.
          </p>

          <h2>Stronger Compliance and Transparency</h2>
          <p>
            To ensure full transparency, all test events—deployments,
            rebalancing, withdrawals—are now logged on-chain in our staging
            audit system. We also tested early-warning tools for detecting
            protocol risks like liquidity drops or smart contract
            vulnerabilities.
          </p>
        </FundDetailsPage>
      </main>
    </div>
  );
};

export default FundUpdate1;
