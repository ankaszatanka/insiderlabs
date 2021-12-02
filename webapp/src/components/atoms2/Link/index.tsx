import * as React from "react";

import { useRouter } from "next/router";

export interface SocialButtonProps {
    href: string;
    title?: string;
    classnames?: string;
}
export const Link: React.FunctionComponent<SocialButtonProps> = ({
    href,
    title,
    classnames,
    children,
}) => {
    const router = useRouter();

    return (
        <a href={href} target="_blank" rel="noreferrer" className={classnames}>
            {children ? (
                children
            ) : (
                <div className="mr-2 capitalize font-poppins flex items-center justify-center bg-gray-2 py-3 px-4 rounded-lg text-sm font-medium text-white  hover:bg-gray-8 transition-all max-w-xs cursor-pointer z-10 relative h-10">
                    <img
                        src={`${router.basePath}/assets/images//icons/${title}.svg`}
                        alt={`${title}'s icon`}
                        className="m-0 sm:mr-2"
                    />
                    <p className="font-bold sm:inline-block hidden">{title}</p>
                </div>
            )}
        </a>
    );
};
