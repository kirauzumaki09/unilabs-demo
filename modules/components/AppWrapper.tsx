// app/AppWrapper.tsx

import { usePathname } from "next/navigation";
import { Nav } from "@/modules/app/nav";
import { Footer } from "@/modules/app/footer";
import FooterTwo from "@/modules/app/footer-2";
import { SmoothScroll } from "@/modules/app/lenis";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
