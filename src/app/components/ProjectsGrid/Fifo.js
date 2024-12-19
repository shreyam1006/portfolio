import { Fragment } from "react";

const Fifo = () => {
  const newsItems = [
    { text: "Latest Blog Post", bgColor: "bg-sage" },
    { text: "Featured Article", bgColor: "bg-pink" },
    { text: "Trending Topics", bgColor: "bg-lavender" },
    { text: "New Insights", bgColor: "bg-skyblue" },
    { text: "Community", bgColor: "bg-yellow" },
  ];

  const NewsItem = ({ text, bgColor }) => (
    <div
      className={`flex items-center h-16 justify-center min-w-[150px] px-6 py-4 text-black font-medium border border-neutral-900 rounded-lg mx-1 ${bgColor}`}
    >
      {text}
    </div>
  );

  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex flex-col text-black">
        <div className="flex flex-col px-8 py-6 gap-2 text-black">
          <h2 className="text-3xl font-semibold text-black">
            Blogging Platform
          </h2>
          <h1 className="text-3xl font-semibold text-black">
            for D2C Insights.
          </h1>
          <p className="text-md">
            A blogging platform that empowers direct-to-consumer (D2C)
            businesses with real-time insights and community engagement.
          </p>
        </div>
        <div>
          <div className="group relative flex overflow-x-hidden overflow-y-hidden">
            <div className="flex animate-marquee group-hover:pause">
              {newsItems.map((item, index) => (
                <NewsItem
                  key={`first-${index}`}
                  text={item.text}
                  bgColor={item.bgColor}
                />
              ))}
            </div>

            <div className="flex absolute top-0 animate-marquee2 group-hover:pause">
              {newsItems.map((item, index) => (
                <NewsItem
                  key={`second-${index}`}
                  text={item.text}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Fifo;
