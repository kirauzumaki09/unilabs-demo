import assets from "@/assets";
import FundDetailsPage from "@/modules/components/fund-details";

const FundUpdate1 = () => {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col w-full">
        <FundDetailsPage
          image={assets.fundUpdate4}
          title="Fund Update 4"
          date="May 6, 2025"
        >
          <h2>Hello Unilabs Community,</h2>

          <p>
            Today marked an exciting leap for our team at Unilabs. We officially
            transitioned from theoretical modeling to live simulation testing
            for our AI-powered DeFi management systems. This move is crucial as
            we work toward making Unilabs Funds ready for real-world
            performance. Here’s what we achieved today.
          </p>

          <h2>Launching the Simulation Environment</h2>

          <p>
            Our experts deployed the first version of the Unilabs Simulation
            Framework. We built synthetic portfolios designed to mimic future
            funds like the BTC Fund, AI Fund, RWA Fund, and Mining Fund. To
            create realistic scenarios, we plugged in live market price feeds,
            on-chain metrics, and sentiment indicators.
          </p>

          <p>
            From there, the early version of our AI Signal Engine took over,
            making autonomous rebalancing decisions without human intervention.
            We are closely tracking how the system adapts, how quickly it
            responds, and how accurately it reallocates assets in a shifting
            market.
          </p>

          <h2>Stress Testing Fund Models</h2>

          <p>
            Our team also began stress testing each fund model under simulated
            high-volatility conditions. The BTC Fund models stayed stable,
            adjusting with minimal deviations. The AI Fund models needed quicker
            recalibrations due to rapid price movements in the AI sector. RWA
            Fund models performed steadily but reacted a bit slower, which we
            anticipated for real-world asset tracking.
          </p>

          <p>
            Meanwhile, the Mining Fund models handled expected changes well but
            showed sensitivity to sudden hash rate fluctuations. These early
            results confirmed that each fund requires its own dedicated AI
            management layer.
          </p>

          <h2>Backend Enhancements: Fund Identity Tagging</h2>

          <p>
            On the backend, our engineers rolled out a new fund identity tagging
            system. Now every trade, rebalance, and risk adjustment is tagged by
            Fund. This update will support clear accounting, strong reporting
            practices, and transparent performance tracking for our future
            investors.
          </p>

          <h2>Building Dynamic Risk Adjustment Systems</h2>

          <p>
            Finally, our compliance and risk management teams started drafting
            our Dynamic Risk Adjustment Protocols. These systems will help the
            AI not only react to asset movements but also respond to bigger
            systemic risks like liquidity issues, security breaches, and
            macroeconomic shifts. Our goal is to make Unilabs resilient in all
            kinds of market conditions.
          </p>
        </FundDetailsPage>
      </main>
    </div>
  );
};

export default FundUpdate1;
