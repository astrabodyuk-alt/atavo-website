"use client";

import Image from "next/image";
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progressive-carousel";
import AnimatedSection from "@/components/AnimatedSection";

const items = [
  {
    img: "/images/64_1x_shots_so.png",
    title: "AZ Audio Optique",
    subtitle: "Web Design · Plaisir, France",
    desc: "Optical store specialising in prescription glasses and sunglasses — designed to attract local clients and showcase their full eyewear collection.",
    sliderName: "az-audio",
  },
  {
    img: "/images/777_1x_shots_so.png",
    title: "AstraBody Studio",
    subtitle: "Web Design · Southampton",
    desc: "Premium body sculpting studio — a conversion-focused website built to drive bookings and communicate their high-end brand experience.",
    sliderName: "astrabody",
  },
  {
    img: "/images/88_1x_shots_so.png",
    title: "AstraBody Loyalty App",
    subtitle: "Mobile App",
    desc: "Mobile loyalty system designed to reward and retain AstraBody clients — keeping them engaged between sessions with points, perks, and offers.",
    sliderName: "astrabody-app",
  },
];

export function ExpandableGallery() {
  return (
    <section id="work" className="bg-[#111111]">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <AnimatedSection className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
                <span className="text-[#2283FF] text-sm font-medium">Our Work</span>
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Projects that
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  drive results
                </span>
              </h2>
            </div>
            <p className="text-[#a0a0a5] max-w-xs text-sm leading-relaxed">
              Every project is built with measurable outcomes in mind. Here&apos;s a
              selection of what we&apos;ve delivered.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Carousel */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <ProgressSlider vertical={false} activeSlider="az-audio" duration={5000}>
          <SliderContent>
            {items.map((item) => (
              <SliderWrapper key={item.sliderName} value={item.sliderName}>
                <Image
                  className="rounded-xl w-full h-[350px] md:h-[450px] object-cover"
                  src={item.img}
                  width={1900}
                  height={1080}
                  alt={item.desc}
                />
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="absolute bottom-0 h-fit text-white bg-black/40 backdrop-blur-md overflow-hidden grid grid-cols-3 rounded-md w-full">
            {items.map((item) => (
              <SliderBtn
                key={item.sliderName}
                value={item.sliderName}
                className="text-left cursor-pointer p-3 border-r border-white/10"
                progressBarClass="bg-[#2283FF] h-full"
              >
                <h2 className="relative px-3 rounded-full w-fit bg-[#2283FF] text-white text-xs mb-2">
                  {item.title}
                </h2>
                <p className="text-xs font-medium line-clamp-2 text-white/80">{item.desc}</p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>

    </section>
  );
}

export default ExpandableGallery;
