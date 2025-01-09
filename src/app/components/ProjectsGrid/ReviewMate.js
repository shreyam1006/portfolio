import { Fragment } from "react";
import StarsAnimationIcon from "../Icons/StarsAnimationIcon";

const ReviewMate = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-sage border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex flex-col text-black overflow-hidden">
        <StarsAnimationIcon />

        <div className="flex flex-col px-8 pt-6 pb-4 gap-2">
          <h2 className="text-2xl sm:text-3xl lg:text-lg xl:text-xl text-black font-semibold">
            Simplifying Feedback for E-commerce.
          </h2>
          <p className="text-lg sm:text-xl lg:text-sm xl:text-base">
            Shopify app for collecting reviews via email and automated prompts.
          </p>
        </div>

        {/* Rating Card */}
        <div className="flex-1 flex items-center justify-center px-3 xl:px-8 xl:pb-6">
          <div className="bg-yellow rounded-lg py-3 lg:py-1 xl:py-3 border border-black w-full">
            <div className="flex items-center gap-1 ml-2">
              <div className="flex items-center -space-x-3 scale-75 xl:scale-100">
                <div
                  className="animate-card-spread w-8 h-8 rounded-full bg-pink border border-black"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="animate-card-spread w-8 h-8 rounded-full bg-blue-200 border border-black"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="animate-card-spread w-8 h-8 rounded-full bg-green-200 border border-black"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="animate-card-spread w-8 h-8 rounded-full bg-purple-200 border border-black"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
              <div className="flex flex-col ml-2">
                <span className="text-base xl:text-xl font-medium">100K+</span>
                <p className="text-sm xl:text-base">
                  <span className="lg:hidden xl:inline-block">Customer</span>{" "}
                  <span>Reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewMate;
