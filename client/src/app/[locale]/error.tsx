"use client";

import { FC, useEffect } from "react";

import ErrorState from "@/components/common/ErrorState";

export type IErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

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
