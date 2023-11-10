import React, { ReactNode } from "react";
import Logo from "../../public/Logo.jpg";

interface Isprops {
  children: ReactNode;
  underLabel: string;
  mainLabel: string;
}

const LandingPage: React.FC<Isprops> = ({
  children,
  underLabel,
  mainLabel,
}) => {
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {underLabel}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {mainLabel}
              </p>
            </div>

            <div className="mt-10">
              <div>{children}</div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          {" "}
          <img
            className="absolute inset-0 h-[500] w-[250] object-cover"
            src={Logo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
