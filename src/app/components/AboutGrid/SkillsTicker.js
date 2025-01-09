const SkillsTicker = () => {
  const skillsLine = [
    "Web Development",
    "Frontend Development",
    "ReactJs",
    "NextJs",
    "Javascript",
    "Typescript",
    "TailwindCSS",
    "Material",
    "Headless UI",
    "Redux",
    "React Query",
    "Zustand",
    "NodeJs",
    "NestJs",
    "GraphQL",
    "REST",
    "PostgreSQL",
  ];

  return (
    <div className="group relative flex overflow-x-hidden">
      <div className="flex animate-marquee3 group-hover:pause whitespace-nowrap">
        {[...skillsLine, ...skillsLine].map((service, index) => (
          <span
            key={`first-${index}`}
            className={`inline-block px-6 py-3 rounded-lg text-sm font-medium border border-black mx-1 ${
              index % 4 === 0
                ? "bg-sage text-black"
                : index % 4 === 1
                ? "bg-pink text-black"
                : index % 4 === 2
                ? "bg-skyblue text-black"
                : "bg-yellow text-black"
            }`}
          >
            {service}
          </span>
        ))}
      </div>

      <div className="flex absolute top-0 animate-marquee4 group-hover:pause whitespace-nowrap">
        {[...skillsLine, ...skillsLine].map((service, index) => (
          <span
            key={`second-${index}`}
            className={`inline-block px-6 py-3 rounded-lg text-sm font-medium border border-black mx-1 ${
              index % 4 === 0
                ? "bg-sage text-black"
                : index % 4 === 1
                ? "bg-pink text-black"
                : index % 4 === 2
                ? "bg-skyblue text-black"
                : "bg-yellow text-black"
            }`}
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
