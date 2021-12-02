import React, { FunctionComponent, ReactElement } from "react";

export interface IPriceChangesData {
    changes: {
        "1H": number;
        "24H": number;
        "7D": number;
        "30D": number;
    };
}

export const PriceChangesData: FunctionComponent<IPriceChangesData> = ({
    changes,
}): ReactElement => {
    return (
        <div className="flex justify-between mb-6">
            {Object.values(changes).map((change, i) => {
                return (
                    <div className="w-1/4" key={i}>
                        <p className="text-gray-7">{Object.keys(changes)[i]}</p>
                        <p
                            className={
                                change > 0 ? "text-main-green" : "text-main-red"
                            }
                        >
                            {(change * 100).toFixed(2)}%
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
