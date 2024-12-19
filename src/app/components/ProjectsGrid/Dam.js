import { Fragment, useState } from "react";
import TextIcon from "../Icons/TextIcon";
import MediaIcon from "../Icons/MediaIcon";
import LogosIcon from "../Icons/LogosIcon";
import LinksIcon from "../Icons/LinksIcon";
import DocumentsIcon from "../Icons/DocumentsIcon";
import Misc from "../Misc";

const tools = [
  {
    icon: TextIcon,
    label: "Text",
    description: "Edit Text Content",
    color: "pink",
    miscColors: {
      petalColor: "skyblue",
      outerCircleColor: "yellow",
    },
  },
  {
    icon: MediaIcon,
    label: "Media",
    description: "Manage Media Files",
    color: "peach",
    miscColors: {
      petalColor: "lavender",
      outerCircleColor: "skyblue",
    },
  },
  {
    icon: LogosIcon,
    label: "Logo",
    description: "Brand Logo Storage",
    color: "skyblue",
    miscColors: {
      petalColor: "peach",
      outerCircleColor: "pink",
    },
  },
  {
    icon: LinksIcon,
    label: "Link",
    description: "Link Management Hub",
    color: "lavender",
    miscColors: {
      petalColor: "sage",
      outerCircleColor: "peach",
    },
  },
  {
    icon: DocumentsIcon,
    label: "Doc",
    description: "Document Control Center",
    color: "yellow",
    miscColors: {
      petalColor: "pink",
      outerCircleColor: "lavender",
    },
  },
];

const FlipContainer = ({ frontContent, backContent, color, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-container animate-float"
      style={{ animationDelay: `${index * 0.4}s` }}
    >
      <div
        className={`relative preserve-3d cursor-pointer bg-${color} rounded-lg ${
          isFlipped ? "animate-flip-forward" : "animate-flip-backward"
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flex hover:scale-105 transition-transform flex-col items-center gap-2 bg-inherit border border-black rounded-md backface-hidden text-black">
          {frontContent}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-inherit border border-black text-black rounded-md backface-hidden [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
};

const Dam = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-sage border border-neutral-900 rounded-xl"></span>
      <div className="flex flex-col absolute inset-0 gap-10 overflow-hidden">
        <div className="flex gap-6">
          <div className="flex flex-col gap-1 w-full text-black font-medium self-start pb-12">
            <span className="flex bg-pink border-black border mt-4 rounded-tr-xl rounded-br-xl text-3xl px-4 py-3 w-4/5 items-center justify-end -translate-x-4 transition-all duration-500 ease-in-out hover:scale-110 hover:translate-x-4 hover:w-[85%] animate-slideFromLeft [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              Digital
            </span>
            <span className="flex bg-peach border-black border rounded-tr-xl rounded-br-xl text-3xl px-4 py-3 w-4/6 items-center justify-end -translate-x-4 -translate-y-2 transition-all duration-500 ease-in-out hover:scale-110 hover:translate-x-4 hover:w-[70%] animate-slideFromLeft opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
              Asset
            </span>
            <span className="flex bg-skyblue border-black border rounded-tr-xl rounded-br-xl text-3xl px-4 py-3 w-11/12 items-center justify-end -translate-x-4 -translate-y-4 transition-all duration-500 ease-in-out hover:scale-110 hover:translate-x-4 hover:w-[95%] animate-slideFromLeft opacity-0 [animation-delay:1600ms] [animation-fill-mode:forwards]">
              Manager
            </span>
          </div>
          <div className="flex flex-col justify-center font-semibold text-right pr-8 self-end">
            <h2 className="text-4xl text-black">Organize</h2>
            <h2 className="text-4xl text-black">Your Assets.</h2>
          </div>
        </div>

        <div className="flex flex-col px-8 gap-2 text-black">
          <p className="text-xl text-right">
            A software solution that centralizes, organizes, and facilitates the
            storage, retrieval, and sharing of digital assets such as images,
            videos, and documents.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-3 self-center items-center justify-center w-full px-4">
          {tools.map((tool, index) => (
            <div key={index}>
              <FlipContainer
                color={tool.color}
                index={index}
                frontContent={
                  <Misc
                    petalColor={tool.miscColors.petalColor}
                    outerCircleColor={tool.miscColors.outerCircleColor}
                  />
                }
                backContent={
                  <>
                    <tool.icon width={30} height={30} />
                    <span className="text-sm font-medium text-black">
                      {tool.label}
                    </span>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Dam;
