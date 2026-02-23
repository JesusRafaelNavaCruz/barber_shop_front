import React from "react";
import Hero from "../components/common/Hero";
import Services from "../components/common/Services";
import Staff from "../components/common/Staff";
import Gallery from "../components/common/Gallery";
import Banner from "../components/common/Banner";
import Location from "../components/common/Location";

export default function page() {
  return (
    <div>
      <Hero />
      <Services />
      <Staff />
      <Gallery />
      <Banner />
      <Location />
    </div>
  );
}
