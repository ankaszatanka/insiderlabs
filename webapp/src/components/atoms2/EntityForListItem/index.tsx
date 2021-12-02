import * as React from "react";
import { separator } from "@utils";

export interface IAssetNameViewProps {
    title: string;
    value?: number | string;
}

export const EntityForListItem: React.FunctionComponent<IAssetNameViewProps> = ({
    title,
    value,
    children,
}) => {
    return (
        <div className="text-right mb-4 flex flex-col items-end">
            <p className="text-gray-6 capitalize mb-1">
                {title.split("-").join(" ")}
            </p>
            {value && (
                <p className="text-white">
                    {typeof value === "number" ? separator(value) : value}
                </p>
            )}
            {/* <div className='flex justify-end'> {children}</div> */}
            {children}
        </div>
    );
};
