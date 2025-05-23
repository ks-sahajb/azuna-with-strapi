import NotFoundSVG from "@/../public/pagenotfound.svg";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";

import Image from "next/image";

type IErrorStateProps = {
  message?: string;
  btnProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  sectionProps?: HTMLAttributes<HTMLElement>;
};

// ======================= Component =====================
/**
 * ErrorState component
 * Displays an error message or fallback UI for error states.
 */
const ErrorState: FC<IErrorStateProps> = (props) => {
  const { message, btnProps, sectionProps } = props;

  const { t } = useTranslation("common");

  return (
    <section
      {...sectionProps}
      className={clsx(
        "w-full h-full py-20 flex flex-col items-center justify-center bg-cyan-50",
        sectionProps?.className,
      )}
    >
      <Image
        src={NotFoundSVG}
        alt="Not Found Image"
        width={500}
        height={500}
        className="mb-20 drop-shadow-lg"
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-cyan-700 sm:text-5xl mb-4 text-center">
        {t("errorPage.heading", { defaultValue: "Oops! Some Error Occurred" })}
      </h1>
      <p className="text-lg text-cyan-600 mb-8 text-center max-w-md">
        {message || "Page Not Found"}
      </p>
      {btnProps && (
        <button
          className={clsx(
            "inline-flex items-center rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2",
            btnProps.className,
          )}
          {...btnProps}
        >
          {btnProps.children
            ? btnProps.children
            : t("errorPage.btnText", { defaultValue: "Try Again" })}
        </button>
      )}
    </section>
  );
};

export default ErrorState;
