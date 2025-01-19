'use client'
import LandingScreen from "@/components/LandingScreen";
import AboutMe from "@/components/AboutMe";
import MyServices from "@/components/MyServices";
import MyWork from "@/components/MyWork";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div className="md:px-16">
      <LandingScreen />
      <div className="px-7 md:px-0">
        <AboutMe />
        <MyServices />
        <MyWork />
        <ContactMe />
      </div>
    </div>
  );
}
