import React, { Fragment } from "react";

const Xg = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-yellow border border-neutral-900 rounded-xl"></span>
      <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
        xG
      </span>
    </Fragment>
  );
};

export default Xg;
