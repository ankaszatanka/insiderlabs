import * as React from "react";
import Image from "next/image";

export interface IAssetNameViewProps {
    name: string;
    iconSrc: string;
}
export const AssetNameView: React.FunctionComponent<IAssetNameViewProps> = ({
    name,
    iconSrc,
}) => (
    <div className="flex justify-between items-center w-24">
        <Image src={iconSrc} alt={`${name}'s icon`} width={20} height={20} />
        <span className="text-white text-sm">{name}</span>
    </div>
);
