import { Fragment, useEffect, useState } from "react";

const Heading = () => {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("");

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-lavender border border-neutral-900 rounded-xl">
        <div className="w-full h-full p-10 flex flex-col items-center justify-center gap-3">
          <div className="border border-neutral-900 bg-white w-fit px-5 py-3">
            <span className="text-5xl font-bold text-pink" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-lavender animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-white w-fit px-5 py-2">
            <span className="lg:text-md text-pink font-semibold">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-lavender animate-pulse"></span>
            </span>
          </div>
        </div>
      </span>
    </Fragment>
  );
};

export default Heading;
