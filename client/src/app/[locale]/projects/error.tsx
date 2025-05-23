"use client";

import { FC, useEffect } from "react";

import { IErrorProps } from "@/app/[locale]/error";

import ErrorState from "@/components/common/ErrorState";

const Error: FC<IErrorProps> = (props) => {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState message={error.message} btnProps={{ onClick: () => reset() }} />
  );
};

export default Error;
