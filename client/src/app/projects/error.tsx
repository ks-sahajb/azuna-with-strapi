"use client";

import { IErrorProps } from "@/app/error";

import { FC, useEffect } from "react";

import ErrorState from "@/components/common/ErrorState";

const Error: FC<IErrorProps> = (props) => {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState
      message={error.message}
      btnProps={{ children: "Try Again", onClick: () => reset() }}
    />
  );
};

export default Error;
