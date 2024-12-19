import { Fragment } from "react";

const Glue = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-pink border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex flex-col text-black">
        <div className="bg-skyblue w-4/5 py-12 border border-black rounded-tl-xl rounded-br-full">
          GLUE
        </div>
        <div className="flex flex-col px-8 py-4 gap-2 text-black">
          <h2 className="text-3xl text-black font-semibold">
            Connecting Brands and Fans with Engaging AI.
          </h2>
          <p className="text-lg">
            Allows brands to create fan pages featuring AI-generated videos,
            enhancing engagement and fostering loyalty through a gamified
            rewards system.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Glue;
