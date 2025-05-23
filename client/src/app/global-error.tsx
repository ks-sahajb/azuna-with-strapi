"use client";

import { FC, useEffect } from "react";

import { useRouter } from "next/navigation";

import ErrorState from "@/components/common/ErrorState";

import "./globals.css";

type IGlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError: FC<IGlobalErrorProps> = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  let message = "Something went wrong. Please try again later.";

  if (error.message === "fetch failed") {
    message =
      "Oops! We couldn't connect to the server. Please check your internet connection and try again.";
  }

  return (
    <html>
      <body>
        <ErrorState
          sectionProps={{ className: "h-screen" }}
          message={message}
          btnProps={{
            children: "Try Again",
            onClick: () => reset(),
          }}
        />
      </body>
    </html>
  );
};

export default GlobalError;
