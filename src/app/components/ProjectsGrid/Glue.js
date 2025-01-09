import { Fragment } from "react";
import GiftIcon from "../Icons/GiftIcon";
import SparkleAnimationIcon from "../Icons/SparkleAnimationIcon";

const Glue = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-pink border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex items-center justify-center text-black p-8">
        <SparkleAnimationIcon />

        <div className="relative xl:max-w-[85%]">
          <div className="bg-white/90 h-full relative flex rounded-2xl border border-black shadow-sm">
            {/* Top cutout */}
            <div className="absolute top-0 left-16 -translate-y-1/2 w-6 h-6 bg-pink rounded-full border-b border-black"></div>

            {/* Bottom cutout */}
            <div className="absolute bottom-0 left-16 translate-y-1/2 w-6 h-6 bg-pink rounded-full border-t border-black"></div>

            <div className="w-[72px] flex items-center justify-center rounded-xl font-medium">
              <div className="text-black tracking-wider text-sm -rotate-90">
                COUPON
              </div>
            </div>

            <div className="flex-1 p-3 border-l border-dashed border-black">
              <div className="text-black mb-1 text-xs font-medium">
                CONNECTING BRANDS & FANS
              </div>

              <div className="text-2xl font-bold mb-2">30% OFF</div>

              <div className="bg-blue-50 text-blue-600 border border-dashed  border-blue-600 px-2 py-0.5 rounded-lg inline-block mb-2 text-sm">
                Unlock with 100 💎
              </div>

              <div className="absolute right-4 xl:right-10 top-1/2 -translate-y-1/2 hidden sm:block">
                <GiftIcon />
              </div>

              <div className="text-xs text-black mt-1 max-w-[70%]">
                Allows brands to create fan pages, enhancing engagement through
                a gamified rewards systems.
              </div>

              <div className="text-[8px] text-black mt-1">T and C</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Glue;
