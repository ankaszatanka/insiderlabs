import React, { FunctionComponent, ReactElement } from "react";
import Image from "next/image";

export const Search: FunctionComponent = (): ReactElement => {
    const [value, setValue] = React.useState<string>("");
    return (
        <div className="flex justify-between items-center flex-grow flex-nowrap flex-shrink bg-gray-2 h-12 rounded px-4 search order-4 lg:order-2 w-full">
            <style jsx>{`
                .clear-btn {
                    border: 0.1px solid #575761;
                    box-shadow: 0 3px #272730;
                }
            `}</style>
            <div className="flex justify-between items-center">
                <Image
                    src="/assets/images/icons/search.svg"
                    alt="search icon"
                    width={16}
                    height={16}
                />
                <input
                    type="text"
                    value={value}
                    placeholder="Search Market"
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-gray-2 outline-none text-gray-7 ml-3 text-left"
                />
            </div>
            <button
                type="button"
                className="bg-gray-3 clear-btn h-8 w-8 rounded flex justify-center items-center"
                onClick={() => setValue("")}
            >
                <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.18457 11.6973H1.62695L7.72461 0.5H6.28906L0.18457 11.6973Z"
                        fill="#9A99AD"
                    />
                </svg>
            </button>
        </div>
    );
};
