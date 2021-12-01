import * as React from "react";
import { EntityForListItem } from "../../atoms";

export interface IBooleanInfoViewProps {
    value: boolean;
    title: string;
}

export const BooleanInfoView: React.FunctionComponent<
    IBooleanInfoViewProps
> = ({ value, title }) => {
    const yes = (
        <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z"
                fill="#0BC189"
            />
        </svg>
    );
    const no = (
        <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.1 0.5L4 2.6L1.9 0.5L0.5 1.9L2.6 4L0.5 6.1L1.9 7.5L4 5.4L6.1 7.5L7.5 6.1L5.4 4L7.5 1.9L6.1 0.5Z"
                fill="#FB4E78"
            />
        </svg>
    );
    return (
        <EntityForListItem title={title}>
            <div className="flex items-center">
                {value ? yes : no}
                <span className="capitalize text-white text-sm ml-1">
                    {value ? "yes" : "no"}
                </span>{" "}
            </div>
        </EntityForListItem>
    );
};
