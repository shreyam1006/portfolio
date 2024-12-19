import { Fragment } from "react";

const Glue = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-purple border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex text-black font-medium">
        <div>GLUE</div>
        <div className="flex flex-col px-8 gap-2 my-auto text-black">
          <h1 className="text-2xl font-semibold">
            Generative Language Understanding Engine
          </h1>
          <p>
            An advanced natural language processing system designed to
            understand and generate human-like text, leveraging state-of-the-art
            machine learning models for enhanced language comprehension and
            generation.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Glue;
