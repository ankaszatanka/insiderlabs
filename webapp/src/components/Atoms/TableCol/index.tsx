import * as React from "react";

export const TableCol: React.FunctionComponent<{
    col1: React.ReactNode;
    col2?: React.ReactNode;
}> = ({ col1, col2 }) => (
    <div className="flex justify-end mb-8">
        <div className="w-1/2 mr-3">{col1}</div>
        <div className="w-1/2">{col2}</div>
    </div>
);
