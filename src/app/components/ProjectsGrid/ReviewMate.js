import { Fragment } from "react";

const ReviewMate = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-sage border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex flex-col text-black overflow-hidden">
        <div className="flex flex-col px-8 py-6 gap-2">
          <h2 className="text-xl text-black font-semibold">
            Simplifying Customer Feedback for E-commerce.
          </h2>
          <p className="">
            Shopify app for collecting reviews via email and automated
            post-purchase prompts.
          </p>
        </div>

        {/* Animated Card */}
        <div className="relative h-full card mb-5">
          <div className="absolute inset-x-20 bottom-0 rounded-xl bg-pink h-full border border-black transform left text-center">
            ⭐️
          </div>
          <div className="absolute inset-x-20 bottom-0 rounded-xl bg-lavender h-full border border-black text-center">
            ⭐️
          </div>
          <div className="absolute inset-x-20 bottom-0 rounded-xl bg-yellow h-full border border-black transform right text-center">
            ⭐️
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewMate;
