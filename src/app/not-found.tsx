import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <h1 className="text-white font-black text-6xl pb-2">
        <span className="text-primary">Oops,</span> seems like you&apos;re lost!
      </h1>
      <p className="text-subtext">
        We cannot find the page you&apos;re looking for, sorry about that!{" "}
        <a className="underline text-primary" href="/">
          Click here to get back!
        </a>
      </p>
    </div>
  );
};

export default NotFound;
