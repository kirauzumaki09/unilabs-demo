import assets from "@/assets";
import FundDetailsPage from "@/modules/components/fund-details";

const FundUpdate1 = () => {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col w-full">
        <FundDetailsPage
          image={assets.fundUpdate7}
          title="Fund Update 7"
          date="May 9, 2025"
        >
          <p>Hello Unilabs Community</p>
          <p>
            One week into our structured development roadmap, our team at
            Unilabs is making steady progress toward launching a fully
            autonomous AI-powered DeFi platform. Today’s focus was on getting
            our systems operationally ready for the next stages. Here are the
            details.
          </p>

          <h2>Setting Up Controlled Fund Activation</h2>
          <p>
            Our experts kicked off the foundational work for Controlled Fund
            Activation Protocols. This framework will determine how and when
            presale funds are moved into active management. We’re designing a
            multi-phase approach where capital is first deployed internally for
            stress testing.
          </p>
          <p>
            Our AI will only authorize fund deployment after certain liquidity,
            security, and volatility conditions are met. To add another layer of
            protection, we’re integrating emergency rollback systems. If
            anything goes sideways during activation, funds can automatically
            shift to secure stablecoin pools with no manual intervention needed.
          </p>

          <h2>Preparing for Closed Alpha</h2>
          <p>
            We have also started laying the groundwork for our Closed Alpha
            Program. The wallet whitelisting system is in progress, allowing
            only select internal teams and strategic partners to gain early
            access to the platform.
          </p>
          <p>
            Our developers are drafting optional KYC modules to meet future
            compliance standards. Meanwhile, monitoring tools are being
            installed to track real-time activity during the alpha phase. This
            closed environment gives us the chance to fine-tune everything
            before opening up to a broader investor base.
          </p>

          <h2>Portfolio Monitoring Comes Online</h2>
          <p>
            To support live testing, we activated our Portfolio Health
            Monitoring System in a staging environment. Right now, it’s tracking
            real-time Net Asset Values (NAV) across all funds, along with risk
            scoring that adjusts dynamically based on market activity and fund
            composition.
          </p>
          <p>
            All AI actions like rebalances or reallocations are being logged in
            a private ledger. This helps us maintain transparency and supports
            future auditing and analysis.
          </p>

          <h2>Smart Contract Code Review</h2>
          <p>
            Our engineering team began reviewing the smart contracts in-house.
            The focus is on treasury flow logic, withdrawal buffer systems, and
            emergency fund reallocation mechanisms. While formal audits will
            come later, our internal reviews ensure we catch any issues early
            on.
          </p>
        </FundDetailsPage>
      </main>
    </div>
  );
};

export default FundUpdate1;
