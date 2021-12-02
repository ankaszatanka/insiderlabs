import { Logo } from "@atoms";
import { LogoSizeType } from "@interfaces";

export const LogoWithAlphaTab = () => (
    <>
        <div className="flex items-center ml-4">
            <style jsx>{`
                .alpha {
                    height: 19px;
                    width: 46px;
                    font-size: 11px;
                    line-height: 13px;
                }
            `}</style>

            <Logo size={LogoSizeType.medium} />
            <div className="alpha uppercase bg-gray-3 text-white font-bold rounded ml-2 font-grotesk flex items-center justify-center">
                alpha
            </div>
        </div>
    </>
);
