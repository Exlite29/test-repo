import React, { ChangeEvent, useMemo, useState } from "react";
import style from "../cssFolder/TextInputs.scss";

const { container: eyesStyle, "password-revealed": passwordRevealedStyle } =
  style;

const standardInputclassName =
  "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

interface IsProps {
  label?: string;
  labelColor?: "red" | "blue";
  id?: string;
  type?: "text" | "password" | "email" | "date" | "datetime" | "time";
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hidelabel?: boolean;
  className?: string;
  disabled?: boolean;
  variant?: "standard" | "minimal";
  min?: string | number;
  max?: string | number;
}

const TextInputs: React.FC<IsProps> = ({
  label = "sample label",
  labelColor = "white",
  id,
  type = "text",
  value = "",
  onChange = () => "",
  placeholder = "",
  hidelabel = false,
  className = "",
  disabled = false,
  variant = "standard",
  min,
  max,
}) => {
  const [pseudoType, setPseudoType] = useState<"text" | "password">("password");

  useMemo;
};

return (
  <form action="#" method="POST" className="space-y-6">
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email address
      </label>
    </div>

    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Password
      </label>
      <div className="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label
          htmlFor="remember-me"
          classNameName="ml-3 block text-sm leading-6 text-gray-700"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm leading-6">
        <a
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
  </form>
);

export default TextInputs;
