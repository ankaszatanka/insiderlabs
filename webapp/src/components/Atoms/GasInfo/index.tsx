import React, { FunctionComponent, ReactElement } from "react";
import Image from "next/image";
import { separator } from "@utils";

export interface IAsset {
    value: number;
    type: "btc" | "eth";
}

export const GasInfo: FunctionComponent = (): ReactElement => {
    const asset: IAsset = {
        value: 2675,
        type: "eth",
    };
    const gas = 27;
    return (
        <div className="hidden sm:flex justify-center items-center bg-gray-2 w-180px h-12 rounded px-2 mx-3 w-180">
            <div className="flex mr-1">
                <Image
                    src={`/assets/images/icons/${asset.type}.svg`}
                    width="12"
                    height="14"
                    alt="asset icon"
                />
                <span className="text-white font-grotesk ml-2 text-xs inline">
                    ${separator(asset.value)}
                </span>
            </div>
            <div className="flex">
                <Image
                    src="/assets/images/icons/gas.svg"
                    width="15"
                    height="15"
                    alt="gas icon"
                />
                <span className="text-white font-grotesk text-xs mx-1">
                    {gas}
                </span>
                <span className="text-white font-grotesk text-xs">Gwei</span>
            </div>
        </div>
    );
};
