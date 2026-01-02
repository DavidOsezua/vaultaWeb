const DownloadSection: React.FC = () => {

  return (
    <section className="" id="/download">
      <div className="max-w-7xl px-4 mdpx-0 w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Get Vaulta and Start Spending
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
          Freely
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base mb-12 max-w-3xl mx-auto">
          Start using Vaulta today for fast, secure, and borderless spending.
          Works seamlessly on web, anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* App Store Button */}
          <button
            className="flex items-center text-white px-6 py-4 rounded-lg transition-colors w-full md:max-w-[243px] justify-center gap-8"
            style={{
              background:
                "linear-gradient(11.41deg, #CB9CE0 5.95%, #903BC6 102.98%)",
            }}
          >
            Get Started now
          </button>
        </div>
      </div>

      {/* Images section with better centering */}
      <div className="w-full">
        {/* Desktop: centered flex, Mobile: scrollable */}

        <div className="max-w-[856px] mx-auto">
          <img
            src="/vaultaLaptop.webp"
            alt="vaultaLaptop"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
