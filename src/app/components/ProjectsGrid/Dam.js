import { Fragment } from "react";
import TextIcon from "../Icons/TextIcon";
import IconsIcon from "../Icons/IconsIcon";
import MediaIcon from "../Icons/MediaIcon";
import LogosIcon from "../Icons/LogosIcon";
import LinksIcon from "../Icons/LinksIcon";
import DocumentsIcon from "../Icons/DocumentsIcon";

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
            <h2 className="text-5xl text-black">Organize</h2>
            <h2 className="text-5xl text-black">Your Assets.</h2>
          </div>
        </div>
        <div className="flex border border-black w-4/5 self-center rounded-md bg-white text-black p-4">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col items-center gap-2">
              <TextIcon width={24} height={24} />
              <span className="text-sm font-medium">Text</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MediaIcon width={24} height={24} />
              <span className="text-sm font-medium">Media</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <LogosIcon width={24} height={24} />
              <span className="text-sm font-medium">Logos</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <LinksIcon width={24} height={24} />
              <span className="text-sm font-medium">Links</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DocumentsIcon width={24} height={24} />
              <span className="text-sm font-medium">Documents</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconsIcon width={24} height={24} />
              <span className="text-sm font-medium">Icons</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 gap-2 text-black">
          <p className="text-xl">
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
