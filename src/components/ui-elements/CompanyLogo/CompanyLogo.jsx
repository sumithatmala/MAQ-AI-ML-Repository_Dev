import { Link } from "react-router-dom";
import companyLogo from "./maqLogoHigh.png";

export const CompanyLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={companyLogo}
        alt="Company Logo"
        className="self-center h-4 w-auto"  // Adjust the height (e.g., h-6)
      />
    </Link>
  );
};
