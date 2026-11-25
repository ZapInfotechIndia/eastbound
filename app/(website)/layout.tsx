import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

// app/(website)/layout.tsx
export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
