import { Fragment, useState } from "react";
import TextIcon from "../Icons/TextIcon";
import IconsIcon from "../Icons/IconsIcon";
import MediaIcon from "../Icons/MediaIcon";
import LogosIcon from "../Icons/LogosIcon";
import LinksIcon from "../Icons/LinksIcon";
import DocumentsIcon from "../Icons/DocumentsIcon";

const tools = [
  {
    icon: TextIcon,
    label: "Text",
    description: "Edit Text Content",
    color: "pink",
  },
  {
    icon: MediaIcon,
    label: "Media",
    description: "Manage Media Files",
    color: "sage",
  },
  {
    icon: LogosIcon,
    label: "Logo",
    description: "Brand Logo Storage",
    color: "skyblue",
  },
  {
    icon: LinksIcon,
    label: "Link",
    description: "Link Management Hub",
    color: "lavender",
  },
  {
    icon: DocumentsIcon,
    label: "Doc",
    description: "Document Control Center",
    color: "yellow",
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
        <div className="flex hover:scale-105 transition-transform flex-col items-center gap-2 bg-inherit border border-black rounded-md p-4 backface-hidden text-black">
          {frontContent}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-inherit border border-black rounded-md p-4 backface-hidden [transform:rotateY(180deg)]">
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
      <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
      <div className="flex flex-col absolute inset-0 gap-10 overflow-hidden">
        <div className="flex gap-6 items-end">
          <div className="flex flex-col gap-1 w-1/2 text-black font-medium">
            <span className="flex bg-pink border-black border mt-4 rounded-tr-xl rounded-br-xl text-3xl px-4 py-3 w-3/7 items-center justify-end -translate-x-4 transition-all duration-700 hover:-translate-x-2 hover:scale-105 animate-slideFromLeft [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              Digital
            </span>
            <span className="flex bg-sage border-black border rounded-tr-xl rounded-br-xl text-3xl px-4 py-3 w-4/6 items-center justify-end -translate-x-4 -translate-y-2 transition-all duration-700 hover:-translate-x-2 hover:scale-105 animate-slideFromLeft opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
              Asset
            </span>
            <span className="flex bg-skyblue border-black border rounded-tr-xl rounded-br-xl text-3xl px-4 py-3 w-5/6 items-center justify-end -translate-x-4 -translate-y-4 transition-all duration-700 hover:-translate-x-2 hover:scale-105 animate-slideFromLeft opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]">
              Manager
            </span>
          </div>
          <div className="flex flex-col justify-center font-semibold text-right px-8">
            <h2 className="text-4xl text-black">Organize</h2>
            <h2 className="text-4xl text-black">Your Assets.</h2>
          </div>
        </div>

        <div className="flex flex-col px-8 gap-2 text-black">
          <p className="text-xl">
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
                  <>
                    <tool.icon width={24} height={24} />
                    <span className="text-sm font-medium text-black">
                      {tool.label}
                    </span>
                  </>
                }
                backContent={
                  <p className="text-sm font-medium text-black text-center">
                    {tool.description}
                  </p>
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
