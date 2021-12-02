import { AppConfig } from "@utils";

const Footer = () => (
    <div className="font-poppins text-gray-6 text-sm z-10 relative">
        &#169; Copyright {new Date().getFullYear()} {AppConfig.title}.
    </div>
);

export { Footer };
