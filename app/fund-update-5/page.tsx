import assets from "@/assets";
import FundDetailsPage from "@/modules/components/fund-details";

const FundUpdate1 = () => {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col w-full">
        <FundDetailsPage
          image={assets.fundUpdate5}
          title="Fund Update 5"
          date="May 7, 2025"
        >
          <p>Hello Unilabs Community,</p>

          <p>
            Today, our team made important progress on one of the most vital
            parts of the Unilabs ecosystem: the Treasury Management Protocol.
            This protocol will serve as the brain of our operations—allocating
            funds, handling withdrawals, managing risk, and optimizing yields
            across all investment portfolios.
          </p>

          <p>
            After successfully deploying our simulation environments, we’ve now
            started building the real backbone. Here are today’s
            accomplishments.
          </p>

          <h2>Laying the Foundation for Treasury Management</h2>

          <p>
            Our experts kicked off the initial framework of the Treasury
            Management Protocol. The architecture is designed to be fully
            autonomous, with minimal human oversight limited to audits and
            compliance checks. Each fund—whether it’s BTC, AI, RWA, or
            Mining—will function in its own isolated smart contract. This means
            capital and risk will be contained within each fund, making the
            system safer and more efficient.
          </p>

          <p>
            We’re also developing a Dynamic Allocation Engine. This will connect
            directly with our AI Signal Engines, enabling real-time fund
            rebalancing based on live market data. Alongside that, we’re
            implementing liquidity buffers for each fund, ensuring investors can
            withdraw without disrupting our strategies.
          </p>

          <p>
            We’ve added another layer of protection with risk-triggered
            emergency states. If the market crashes or an exploit is detected,
            assets will automatically shift to safer pools or stablecoins.
          </p>

          <h2>Portfolio Execution Engine – Work in Progress</h2>

          <p>
            In parallel, we began building the Portfolio Execution Engine. This
            system turns AI decisions into real-world blockchain transactions.
            Today, we focused on planning how this engine will connect with DeFi
            protocols, staking platforms, and liquidity pools.
          </p>

          <p>
            We’re also working on optimizing transaction costs and minimizing
            slippage. Our initial models show promising ways to bundle
            transactions and cut down on fees, all while keeping speed and
            accuracy high.
          </p>

          <h2>Compliance Layer – Strengthening Risk Control</h2>

          <p>
            Lastly, we expanded our compliance framework. We’re planning to
            integrate real-time monitoring tools and decentralized oracles to
            keep an eye on all assets. We’ve started drafting an auto-blacklist
            system to flag and isolate risky contracts or pools.
          </p>

          <p>
            Every transaction and portfolio adjustment will be recorded for full
            transparency. Our aim is simple—keep operations secure, compliant,
            and auditable at every step.
          </p>
        </FundDetailsPage>
      </main>
    </div>
  );
};

export default FundUpdate1;
