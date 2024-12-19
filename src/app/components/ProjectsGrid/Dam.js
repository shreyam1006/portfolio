import { Fragment } from "react";

const Dam = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
      <div className="flex flex-col absolute inset-0 gap-6 overflow-hidden">
        <div className="flex flex-col">
          <span className="flex bg-pink border-black border mt-4 rounded-tr-xl rounded-br-xl text-4xl px-4 py-4 font-bold w-2/3 items-center justify-end -translate-x-4">
            Digital
          </span>
          <span className="flex bg-sage border-black border rounded-tr-xl rounded-br-xl text-4xl px-4 py-4 font-bold w-5/6 items-center justify-end -translate-x-4 -translate-y-2">
            Asset
          </span>
          <span className="flex bg-skyblue border-black border rounded-tr-xl rounded-br-xl text-4xl px-4 py-4 font-bold w-3/4 items-center justify-end -translate-x-4 -translate-y-4">
            Manager
          </span>
        </div>
        <div className="flex flex-col px-8 gap-2 text-white font-semibold">
          <h1 className="text-5xl text-black">Organize</h1>
          <h1 className="text-5xl text-black">Your Assets.</h1>

          <p className="text-xl font-medium">
            A software solution that centralizes, organizes, and facilitates the
            storage, retrieval, and sharing of digital assets such as images,
            videos, and documents.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Dam;
