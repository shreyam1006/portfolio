import localFont from "next/font/local";
import "./globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(faInstagram);

const afacadFlux = localFont({
  src: "./fonts/AfacadFlux.ttf",
  variable: "--font-afacad-flux",
  weight: "100 900",
});

export const metadata = {
  title: "Shreya Maheshwari",
  description:
    "Shreya Maheshwari is a Software Development Engineer with over 3 years experience in creating digital experiences that feels like touching grass.",
  keywords:
    "Software Developer, Software Development Engineer, Frontend Developer, Reactjs, Nextjs, Javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacadFlux.variable} antialiased`}>{children}</body>
    </html>
  );
}
