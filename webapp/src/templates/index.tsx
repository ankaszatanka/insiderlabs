import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { ReactNode } from "react";
import { Header } from "../components/organisms";
type IMainProps = {
    children: ReactNode;
};

export const Main: React.FunctionComponent<IMainProps> = ({ children }) => (
    <div className="bg-gray-1 h-screen">
        <div className="relative container">
            <Meta title={AppConfig.title} description={AppConfig.description} />
            <Header />
            {children}
        </div>
    </div>
);
