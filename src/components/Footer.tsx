import { NavLink } from "react-router";
import LogoText from "./svgComponents/LogoText";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 mt-8 lg:mt-16 bg-[#00000099]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center">
            <LogoText maxWidth="max-w-[148px] md:max-w-[177px]" />
          </div>

          <div className="flex gap-4 text-center justify-center text-[12px] sm:text-left">
            <NavLink
              to="/policy"
              className="text-gray-400 border-r border-[#FFFFFF] pr-6 hover:text-white transition-colors"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/termsandcondition"
              className="text-gray-400  pr-6 hover:text-white transition-colors"
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
