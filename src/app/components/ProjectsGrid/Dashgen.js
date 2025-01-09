"use client";

import { Fragment, useEffect, useState } from "react";

const aiServices = [
  {
    name: "OpenAI",
    color: "#C6B1EA", // lavender
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.0451 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829 14.6201 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4047-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    ),
  },
  {
    name: "Google AI",
    color: "#F480A3", // pink
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    color: "#F7A474", // peach
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
      </svg>
    ),
  },
  {
    name: "Mistral AI",
    color: "#C8D98E", // sage
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M12 3L1 9l11 6l11-6l-11-6zM1 15l11 6l11-6" />
      </svg>
    ),
  },
  {
    name: "Groq",
    color: "#FFDF70", // yellow
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 8l-4 4h8l-4-4z" />
      </svg>
    ),
  },
];

const Dashgen = () => {
  const [icons, setIcons] = useState(
    aiServices.map((service, index) => ({
      ...service,
      angle: index * (360 / aiServices.length),
      scale: 1,
    }))
  );

  const [circleAngles, setCircleAngles] = useState([0, 120, 240]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({
          ...icon,
          angle: (icon.angle + 0.3) % 360,
        }))
      );

      setCircleAngles((prev) => [
        (prev[0] + 0.5) % 360,
        (prev[1] + 0.4) % 360,
        (prev[2] + 0.6) % 360,
      ]);
    }, 30);

    return () => clearInterval(interval);
  }, [isMobile]);

  const baseEllipseA = isMobile ? 80 : 120;
  const baseEllipseB = isMobile ? 50 : 75;
  const centerX = "50%";
  const centerY = "50%";
  const rotationAngle = 45 + 100; // Diagonal rotation

  const ellipses = [
    {
      a: baseEllipseA * 0.8,
      b: baseEllipseB * 0.8,
      color: "#F480A3", // pastel pink
    },
    {
      a: baseEllipseA,
      b: baseEllipseB,
      color: "#C8D98E", // pastel green
    },
    {
      a: baseEllipseA * 1.2,
      b: baseEllipseB * 1.2,
      color: "#C6B1EA", // pastel blue
    },
  ];

  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-skyblue border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex text-black">
        <div className="relative w-1/3 h-full scale-90 xl:scale-100">
          {/* AI Service Icons */}
          {icons.map((icon, index) => {
            const orbitRadius = isMobile ? 45 : 70;
            const x =
              Math.cos((icon.angle * Math.PI) / 180) * orbitRadius * icon.scale;
            const y =
              Math.sin((icon.angle * Math.PI) / 180) * orbitRadius * icon.scale;

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: "40%",
                  top: "40%",
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full border border-black flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{
                    backgroundColor: icon.color,
                  }}
                >
                  {icon.icon}
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative flex flex-col px-8 gap-2 my-auto text-black w-2/3">
          {/* Elliptical animations in the right section */}
          {ellipses.map((ellipse, index) => {
            const x =
              Math.cos((circleAngles[index] * Math.PI) / 180) * ellipse.a;
            const y =
              Math.sin((circleAngles[index] * Math.PI) / 180) * ellipse.b;

            return (
              <Fragment key={index}>
                {/* Elliptical path */}
                <svg
                  className="absolute"
                  style={{
                    left: centerX,
                    top: centerY,
                    transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
                    width: `${ellipse.a * 2}px`,
                    height: `${ellipse.b * 2}px`,
                  }}
                >
                  <ellipse
                    cx={ellipse.a}
                    cy={ellipse.b}
                    rx={ellipse.a}
                    ry={ellipse.b}
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    opacity="0.15"
                  />
                </svg>

                {/* Moving circle */}
                <div
                  className="absolute"
                  style={{
                    left: centerX,
                    top: centerY,
                    transform: `translate(-50%, -50%) rotate(${rotationAngle}deg) translate(${x}px, ${y}px)`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full border border-black"
                    style={{
                      backgroundColor: ellipse.color,
                      opacity: 0.8,
                      transform: `rotate(-${rotationAngle}deg)`, // Counter-rotate the circle to keep it upright
                    }}
                  ></div>
                </div>
              </Fragment>
            );
          })}

          {/* Text content */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl lg:text-2xl xl:text-3xl text-black font-semibold pb-2">
              Revolutionizing Multi-Platform AI Integration.
            </h2>
            <p className="text-sm xl:text-base">
              Effortlessly Connect Top AI Models Using Your API Keys to Optimize
              Performance at a Low Cost, Ensuring Secure and Efficient
              Integrations with Minimal Setup and Management Efforts.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashgen;
