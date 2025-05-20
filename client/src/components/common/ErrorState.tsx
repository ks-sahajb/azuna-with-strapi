import React, { FC } from "react";

type IErrorStateProps = {
  message?: string;
};

const ErrorState: FC<IErrorStateProps> = ({ message }) => (
  <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
    <div className="mb-4 text-5xl">😢</div>
    <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
    <p className="text-gray-600">
      {message ||
        "We couldn't load the project details. Please try again later."}
    </p>
  </div>
);

export default ErrorState;
