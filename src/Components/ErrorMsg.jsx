import React from "react";

const ErrorMessage = React.memo(({ message }) => {
  return <p className="text-center text-red-500">{message}</p>;
});

export default ErrorMessage;
