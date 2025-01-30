import React from "react";
import { BeatLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="#0ea5e9" />
    </div>
  );
}
