"use client";
import Link from "next/link";
import React, { useState } from "react";

const RedirectModal = () => {
  const [showModal, setShowModal] = useState(true);
  if (!showModal) {
    return null;
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="z-40 flex flex-col justify-center items-center bg-tooltipColor rounded-md p-10">
        <h2 className="text-primary text-3xl font-extrabold">Hold Up!</h2>
        <p className="text-2xl text-white mb-4">
          This portfolio is not complete. Do you want to visit my previous
          portfolio instead?
        </p>
        <div className="flex justify-between items-center">
          <button
            className="rounded border border-white p-4 text-white hover:bg-white hover:text-black hover:bg-opacity-75"
            onClick={() => setShowModal(false)}
          >
            No, Stay here
          </button>
          <Link
            href="https://v1.neon.is-a.dev"
            className="cursor-pointer m-4 bg-white p-4 rounded border border-white hover:bg-opacity-75"
          >
            Yes, Take me to the old one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RedirectModal;
