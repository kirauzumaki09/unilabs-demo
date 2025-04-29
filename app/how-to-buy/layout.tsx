import { Nav } from "@/modules/app/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How To Buy",
    description: "How To Buy",
  };
   
  export default async function GiveawayLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
   
    return (
      <>
          <div className=" items-center flex justify-center">
            <Nav />
          </div>
        {children}
   
        {/* <FooterNew /> */}
      </>
    );
  }