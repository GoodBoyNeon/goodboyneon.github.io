'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const RedirectModal = () => {
  const [showModal, setShowModal] = useState(true);
  if (!showModal) {
    return null;
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="z-40 flex flex-col items-center justify-center rounded-md p-10">
        <h2 className="text-3xl font-extrabold text-primary">Hold Up!</h2>
        <p className="mb-4 text-2xl text-white">
          This portfolio is not complete. Do you want to visit my previous portfolio
          instead?
        </p>
        <div className="flex items-center justify-between">
          <button
            className="rounded border border-white p-4 text-white hover:bg-white hover:bg-opacity-75 hover:text-black"
            onClick={() => setShowModal(false)}
          >
            No, Stay here
          </button>
          <Link
            href="https://v1.neon.is-a.dev"
            className="m-4 cursor-pointer rounded border border-white bg-white p-4 hover:bg-opacity-75"
          >
            Yes, Take me to the old one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RedirectModal;
