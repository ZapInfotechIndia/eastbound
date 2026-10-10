import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import SiteLoader from "@/components/SiteLoader";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eastbound Group",
  description:
    "Eastbound Group is a leading travel company specializing in curated journeys across India, Bhutan, Nepal, and the Sub-Continent. Explore our destinations and discover extraordinary experiences.",
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScrollProvider>
          <SiteLoader>{children}</SiteLoader>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
