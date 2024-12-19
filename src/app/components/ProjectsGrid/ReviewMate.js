import { Fragment } from "react";

const ReviewMate = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-orange border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex text-black font-medium">
        <div>Review</div>
        <div className="flex flex-col px-8 gap-2 my-auto text-black">
          <h1 className="text-2xl font-semibold">
            Simplifying E-commerce Customer Feedback
          </h1>
          <p>
            A comprehensive review management system that streamlines customer
            feedback collection and analysis for e-commerce platforms, providing
            valuable insights and improving customer satisfaction through
            data-driven decisions.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewMate;
