import React from "react";
import { Logo, Footer, Link } from "@atoms";

const Home: React.FC = () => {
    return (
        <div className="main h-screen flex flex-col justify-between border border-1">
            <section className="main_section pb-12 z-10 relative">
                <Logo classes="mb-6" />
                <p className="text-white font-poppins leading-8 z-10 relative">
                    Welcome to our humble beginning!
                </p>
                <br />
                <p className="text-white font-poppins leading-8">
                    The two extremes in cryptospace are the diamond holders and
                    the weak paper hands. We aim to balance this out with what
                    we bring to the market!
                </p>
                <br />
                <p className="text-white font-poppins leading-8">
                    Tune in and come along for the ride! As no day in crypto is
                    never boring.
                </p>
            </section>
            <section>
                <div className="flex justify-start sm:justify-between max-w-md sm:pr-2 sm:pb-36">
                    <Link title="discord" href="https://discord.com/" />
                    <Link title="telegram" href="https://telegram.org" />
                    <Link title="medium" href="https://medium.com/" />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
