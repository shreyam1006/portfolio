import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ME from "../Images/ME2.png";

const ProfileImage = () => {
  return (
    <div className="relative p-8">
      <div className="relative">
        <div className="w-28 md:w-32 h-16 z-20 -right-6 -md:right-12 rounded-full border-2 border-black top-16 bg-yellow absolute">
          <div
            className="bg-lavender w-20 h-3 rounded-full mt-4 ml-5 border border-black animate-slide-line"
            style={{ animationDuration: "2s" }}
          ></div>
          <div
            className="bg-skyblue w-10 h-3 rounded-full mt-2 ml-5 border border-black animate-slide-line"
            style={{ animationDelay: "2s", animationDuration: "2s" }}
          ></div>
        </div>
        <FontAwesomeIcon
          icon={faStar}
          className="absolute -top-1 left-12 text-yellow text-2xl animate-star-scale z-10"
          style={{
            filter:
              "drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)",
          }}
        />
        <FontAwesomeIcon
          icon={faStar}
          className="absolute top-6 left-5 text-peach text-2xl animate-star-scale z-10"
          style={{
            animationDelay: "0.5s",
            filter:
              "drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)",
          }}
        />
        <FontAwesomeIcon
          icon={faStar}
          className="absolute top-8 left-16 text-lavender text-2xl animate-star-scale z-10"
          style={{
            animationDelay: "1s",
            filter:
              "drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)",
          }}
        />
        <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center relative rounded-full border-2 border-black bg-pink">
          <Image
            src={ME}
            alt="Profile"
            width={1200}
            height={1200}
            className="object-cover absolute rounded-2xl md:scale-125"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
