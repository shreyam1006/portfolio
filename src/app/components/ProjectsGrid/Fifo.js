import { Fragment } from "react";

const Fifo = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-blue border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex text-black font-medium">
        <div>Blog</div>
        <div className="flex flex-col px-8 gap-2 my-auto text-black">
          <h1 className="text-2xl font-semibold">Modern Blogging Platform</h1>
          <p>
            A feature-rich blogging platform built with modern web technologies,
            enabling seamless content creation, management, and sharing with an
            intuitive user interface and robust backend infrastructure.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Fifo;
