import { Fragment } from "react";

const Dashgen = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-pink border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex text-black font-medium">
        <div>Circles</div>
        <div className="flex flex-col px-8 gap-2 my-auto text-black">
          <h1 className="text-2xl font-semibold">
            Revolutionizing Multi-Platform AI Integration
          </h1>
          <p>
            Effortlessly Connect Top AI Models Using Your API Keys to Optimize
            Performance at a Low Cost, Ensuring Secure and Efficient
            Integrations with Minimal Setup and Management Efforts.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashgen;
