import { DM_Sans } from "next/font/google";
import "./globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(faInstagram);

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
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
      <body className={`${dmSans.variable} antialiased not-italic`}>
        {children}
      </body>
    </html>
  );
}
