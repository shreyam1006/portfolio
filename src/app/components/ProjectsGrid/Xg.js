import EmailWindowIcon from "../Icons/EmailWindowIcon";

const Xg = () => {
  return (
    <div className="w-full h-full flex">
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-yellow border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex items-center justify-center text-black font-medium">
        <div className="flex flex-col sm:flex-row w-full h-full p-6">
          {/* Email Window Animation - Left Side */}
          <div className="w-full sm:w-1/2 flex items-center justify-center relative">
            <div className="w-full max-w-[300px] h-[250px]">
              <EmailWindowIcon />
              {/* Growth Bubbles with Up Icons */}
              <svg
                className="absolute top-0 right-0 w-32 h-32"
                viewBox="0 0 100 100"
                style={{ transform: "translate(10%, -20%)" }}
              >
                {/* Bubble 1 with Up Arrow */}
                <g className="animate-float-slow">
                  <circle
                    cx="20"
                    cy="60"
                    r="16"
                    fill="#F480A3"
                    opacity="0.9"
                    stroke="black"
                    strokeWidth="1"
                  />
                  <path
                    d="M20 52 L16 56 L18.5 56 L18.5 62 L21.5 62 L21.5 56 L24 56 Z"
                    fill="black"
                  />
                </g>
                {/* Bubble 2 with Up Arrow */}
                <g className="animate-float-slow">
                  <circle
                    cx="50"
                    cy="40"
                    r="14"
                    fill="#F7A474"
                    opacity="0.9"
                    stroke="black"
                    strokeWidth="1"
                  />
                  <path
                    d="M50 32 L46 36 L48.5 36 L48.5 42 L51.5 42 L51.5 36 L54 36 Z"
                    fill="black"
                  />
                </g>
                {/* Bubble 3 with Up Arrow */}
                <g className="animate-float-slow">
                  <circle
                    cx="75"
                    cy="65"
                    r="12"
                    fill="#C8D98E"
                    opacity="0.9"
                    stroke="black"
                    strokeWidth="1"
                  />
                  <path
                    d="M75 57 L71 61 L73.5 61 L73.5 67 L76.5 67 L76.5 61 L79 61 Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="w-full sm:w-1/2 flex flex-col justify-center px-4 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl text-black font-semibold">
              Boost Customer
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl text-black font-semibold mb-4">
              Email Conversions.
            </h2>
            <p className="font-normal">
              Triple email success with personalized content and curated product
              recommendations for more engaging customer interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xg;
