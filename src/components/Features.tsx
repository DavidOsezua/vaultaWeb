import StackedCard from "./svgComponents/StackedCard";
import Coins from "./svgComponents/Coins";

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-0" id="/features">
      <div className="text-center text-white space-y-5 mb-5 ">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl  font-bold text-white  lg:mb-6 leading-tight px-4">
          Your Money, Your Cards,Total freedom
        </h1>

        <p>
          Use your crypto or fiat funds to generate virtual cards instantly.
          Spend globally and manage everything from one secure, private wallet.
        </p>
      </div>

      <div
        className="mx-auto max-w-[1296px] p-7 rounded-lg space-y-6"
        style={{
          background:
            "linear-gradient(90.34deg, rgba(64, 72, 104, 0.2) 0%, rgba(69, 79, 126, 0.2) 100%)",
        }}
      >
        <div className="md:max-w-[1000px] mx-auto">
          <div className="space-y-6 md:flex items-center md:justify-between">
            {/* Content */}
            <div className="space-y-4 text-white">
              <h3 className=" text-[24px] font-bold">
                Create Virtual Cards Instantly
              </h3>
              <p className="md:max-w-[450px] text-sm sm:text-base  w-full leading-7">
                Get unlimited virtual cards in seconds — backed by either crypto
                or fiat. Perfect for managing subscriptions like Netflix or
                Spotify, online purchases, or separating business and personal
                spending. Each card is secure, reloadable, and easy to manage
                directly from the app.
              </p>
            </div>

            <div className="flex justify-center">
              <StackedCard />
            </div>
          </div>

          <div className="space-y-6 md:flex items-center md:justify-between ">
            {/* Content */}
            <div className="space-y-4 text-white md:order-1">
              <h3 className=" text-[24px] font-bold md:text-right">
                Wallet Transfers, Deposits & Withdrawals
              </h3>
              <p className="md:max-w-[450px] text-sm sm:text-base mx-auto w-full leading-7 md:text-right">
                Move funds seamlessly between your Vaulta wallet and your cards.
                Deposit crypto through supported chains like ERC20 and TRC20 for
                USDT/USDC. Withdraw to your local bank account, or transfer
                funds instantly within the Vaulta ecosystem. Every transaction
                is fast, traceable, and secure.
              </p>
            </div>

            <div className="flex justify-center ">
              <Coins />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
