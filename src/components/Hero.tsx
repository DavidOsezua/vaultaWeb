import Card from "./svgComponents/Card";

const Hero: React.FC = () => {
  return (
    <section className="">
      {/* Main Content */}
      <div className="text-center space-y-6 md:space-y-12 px-4 md:px-0">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl  font-bold text-white  lg:mb-6 leading-tight px-4">
          Virtual Cards Made Easy
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            for Crypto & Fiat
          </span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto px-4">
          Create secure virtual cards directly from your wallet. Pay for
          subscriptions, bills, and more using USDT, USDC, or your fiat balance
          all in one app.
        </p>

        <div className="flex justify-center">
          <Card maxWidth="700px" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
