import { Fragment } from "react";

const Fifo = () => {
  // News ticker items with their corresponding background colors
  const newsItems = [
    { text: "Latest Blog Post", bgColor: "bg-sage" },
    { text: "Featured Article", bgColor: "bg-pink" },
    { text: "Trending Topics", bgColor: "bg-lavender" },
    { text: "New Insights", bgColor: "bg-skyblue" },
    { text: "Community Updates", bgColor: "bg-yellow" },
    { text: "Top Stories", bgColor: "bg-peach" },
  ];
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex flex-col text-black">
        <div className="flex flex-col px-8 py-6 gap-2 text-white font-semibold">
          <h1 className="text-3xl font-semibold text-black">
            Blogging Platform
          </h1>
          <h1 className="text-3xl font-semibold text-black">
            for D2C Insights.
          </h1>
          <p className="text-md">
            A blogging platform that empowers direct-to-consumer (D2C)
            businesses with real-time insights and community engagement.
          </p>
        </div>
        <div className="px-8 h-16 overflow-hidden">
          <div className="news-ticker-wrapper relative whitespace-nowrap">
            <div className="news-ticker flex animate-scroll">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center min-w-[150px] px-6 py-4 text-black font-medium border border-neutral-900 rounded-lg mx-1 ${item.bgColor}`}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <style jsx global>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            .news-ticker-wrapper:hover .animate-scroll {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </Fragment>
  );
};

export default Fifo;
