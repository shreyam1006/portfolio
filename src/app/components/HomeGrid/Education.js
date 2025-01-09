import EducationIcon from "../Icons/EducationIcon";
import "./styles/education.css";
import { useState, useEffect } from "react";

export default function Education() {
  const [isActive, setIsActive] = useState(false);
  const [indices, setIndices] = useState({
    degree: 0,
    major: 0,
    university: 0,
    year: 0,
    cgpa: 0,
  });

  const texts = {
    degree: "Bachelors of Technology",
    major: "Computer Science",
    university: "Bennett University",
    year: "2018 - 2022",
    cgpa: "CGPA: 8.1",
  };

  useEffect(() => {
    if (isActive) {
      const id = setInterval(() => {
        setIndices((prev) => ({
          degree:
            prev.degree < texts.degree.length ? prev.degree + 1 : prev.degree,
          major:
            prev.degree === texts.degree.length
              ? prev.major < texts.major.length
                ? prev.major + 1
                : prev.major
              : prev.major,
          university:
            prev.major === texts.major.length
              ? prev.university < texts.university.length
                ? prev.university + 1
                : prev.university
              : prev.university,
          year:
            prev.university === texts.university.length
              ? prev.year < texts.year.length
                ? prev.year + 1
                : prev.year
              : prev.year,
          cgpa:
            prev.year === texts.year.length
              ? prev.cgpa < texts.cgpa.length
                ? prev.cgpa + 1
                : prev.cgpa
              : prev.cgpa,
        }));
      }, 50);

      return () => clearInterval(id);
    } else {
      setIndices({
        degree: 0,
        major: 0,
        university: 0,
        year: 0,
        cgpa: 0,
      });
    }
  }, [
    isActive,
    texts.cgpa.length,
    texts.degree.length,
    texts.major.length,
    texts.university.length,
    texts.year.length,
  ]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center lg:block overflow-hidden">
      {!isActive && <EducationIcon />}
      <div
        onClick={handleClick}
        className={`cursor-pointer transform transition-all duration-300 ease-in-out w-fit px-6 py-4 m-3 border border-black lg:absolute bg-yellow text-pink
          ${isActive ? "scale-110 border-none" : "hover:scale-105"}`}
      >
        <h2
          className={`font-neutral-900 text-3xl font-bold ${
            isActive ? "md:hidden xl:block" : "block"
          }`}
        >
          Education
        </h2>
        <div
          className={`mt-4 space-y-2 transition-all duration-500 ease-in-out overflow-hidden
            ${
              isActive
                ? "opacity-100 max-h-[200px] border border-black p-3 bg-pink"
                : "opacity-0 max-h-0 hidden"
            }`}
        >
          <div className="border border-black p-2 bg-white h-full w-full">
            <div className="flex flex-col sm:flex-row sm:gap-6">
              <div className="flex flex-col">
                <i className="text-xl font-semibold text-gray-800">
                  {texts.degree.slice(0, indices.degree)}
                  {indices.degree < texts.degree.length && (
                    <span className="inline-block mx-1 w-2 h-4 bg-gray-800 animate-pulse"></span>
                  )}
                </i>
                <i className="text-lg font-medium text-gray-700">
                  {texts.major.slice(0, indices.major)}
                  {indices.major < texts.major.length &&
                    indices.degree === texts.degree.length && (
                      <span className="inline-block mx-1 w-2 h-4 bg-gray-700 animate-pulse"></span>
                    )}
                </i>
              </div>
              <i className="text-lg font-medium text-indigo-600 sm:self-end">
                {texts.university.slice(0, indices.university)}
                {indices.university < texts.university.length &&
                  indices.major === texts.major.length && (
                    <span className="inline-block mx-1 w-2 h-4 bg-indigo-600 animate-pulse"></span>
                  )}
              </i>
            </div>
            <div className="flex flex-col items-start space-y-1 mt-1">
              <i
                className={`text-base text-black ${
                  indices.cgpa >= 1
                    ? "border border-dotted rounded-md border-black "
                    : ""
                } px-1`}
              >
                {texts.year.slice(0, indices.year)}
                {indices.year < texts.year.length &&
                  indices.university === texts.university.length && (
                    <span className="inline-block mx-1 w-2 h-3 bg-gray-600 animate-pulse"></span>
                  )}
              </i>
              <i className="text-base font-semibold text-indigo-500 hidden xl:block">
                {texts.cgpa.slice(0, indices.cgpa)}
                {indices.cgpa < texts.cgpa.length &&
                  indices.year === texts.year.length && (
                    <span className="inline-block mx-1 w-2 h-3 bg-indigo-500 animate-pulse"></span>
                  )}
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
