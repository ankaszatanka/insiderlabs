import React, { FunctionComponent, ReactElement } from "react";
import Image from "next/image";
import classnames from "classnames";
import { LogoSizeType } from "@interfaces";

export const Logo: FunctionComponent<{
    size?: LogoSizeType
    classes?: string;
}> = ({ size = LogoSizeType.large, classes }): ReactElement => {
    return (
        <div className={classnames("aspect-w-12 aspect-h-4", classes, size)}>
            <style jsx>{`
                .large {
                    width: 215.06px;
                    height: 58px;
                }

                @media only screen and (min-width: 640px) {
                    .large {
                        width: 352.26px;
                        height: 95px;
                    }
                }

                .medium {
                    width: 150px;
                    height: 40.45px;
                }
            `}</style>
            <Image
                src="/assets/images/logo.svg"
                alt="logo InsiderLabs"
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
};
