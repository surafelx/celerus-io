// @ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tektur, Khand } from "next/font/google";
import * as THREE from "three";
import dynamic from "next/dynamic";

const Globe = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const suggestions = [
  "What type of talent are you looking for?",
  "Full stack developer",
  "AI engineer",
  "Senior frontend engineer",
  "Backend developer",
];

const TypingInput = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = suggestions[index];
    if (!deleting) {
      // Typing effect
      if (charIndex < currentText.length) {
        setTimeout(() => {
          setPlaceholder(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        setTimeout(() => setDeleting(true), 1000);
      }
    } else {
      // Deleting effect
      if (charIndex > 0) {
        setTimeout(() => {
          setPlaceholder(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        setDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
      }
    }
  }, [charIndex, deleting, index]);

  return (
    <input
      className={`bg-transparent border-[#4B5EF7] text-[#4B5EF7]  border-2 w-full p-4 text-2xl mb-6 ${khand.className} focus:outline-none`}
      type="text"
      placeholder={placeholder}
    />
  );
};

const tektur = Tektur({
  subsets: ["latin"],
  display: "swap",
});

const khand = Khand({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  const globeEl = useRef();
  const [globeMaterial, setGlobeMaterial] = useState(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setGlobeMaterial(new THREE.MeshBasicMaterial({ color: "#4B5EF7" }));
    }
  }, []);

  useEffect(() => {
    // load data
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/refs/heads/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);

      
      });
  }, []);

  useEffect(() => {
    if (!globeEl.current) {
      return;
    }
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1.4;

    globeEl.current.controls().enableZoom = false; // Allow manual zooming
    globeEl.current.controls().zoomSpeed = 2; // Adjust zoom speed
    globeEl.current.pointOfView({ altitude: 2 }, 1000); // Set initial zoom
  }, [globeReady]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        background: "white",
      }}
    >
      <header className="bg-[#E3E8F0] fixed  flex justify-between w-full px-10 py-6 z-[100] items-center">
        <div className="flex gap-1 items-center">
          <Image
            src="/logo.png"
            alt="Celerus IO logo"
            width={100}
            height={82}
            priority
          />
          <div className="flex flex-col gap-1 justify-center">
            <div
              className={`text-3xl leading-none text-[#4B5EF7] ${tektur.className}`}
            >
              CELERUS GLOBAL
            </div>
            <div
              className={`text-2xl leading-none text-[#344156] ${khand.className}`}
            >
              INNOVATE BEYOND BOUNDARIES
            </div>
          </div>
        </div>
        <div className="lg:flex gap-6 hidden">
          <a
            href="https://calendly.com/surafel-yimam-celerus/30min"
            className={` cursor-pointer px-4 bg-[#4B5EF7] h-[44px] w-[199px] justify-between text-xl flex items-center ${tektur.className}`}
          >
            FIND TALENT
            <svg
              className="ml-auto"
              fill="#ffffff"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <div
            className={` cursor-pointer bg-[#65748C] h-[44px] w-[199px] text-xl flex items-center justify-center ${tektur.className}`}
          >
            APPLY AS TALENT
          </div>
          <div
            className={`cursor-pointer bg-[#65748C] h-[44px] w-[199px] text-xl flex items-center justify-center ${tektur.className}`}
          >
            READ ARTICLES
          </div>
        </div>
      </header>
      <main className="bg-[#E3E8F0] min-h-[80vh] py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center  px-10">
          <div className="w-full lg:w-[50%] mt-32">
            <h1
              className={`text-4xl lg:text-6xl leading-[120%] font-[500] text-[#4B5EF7] mb-6 ${tektur.className}`}
            >
              Need Pre-Vetted Talent to Help You Scale?
            </h1>
            <p className={`text-3xl text-[#344156] mb-4 ${khand.className}`}>
              Build faster, more efficient MVPs with top-tier global talent,{" "}
              pre-vetted and ready to help you scale your startup.
            </p>
            <div className="relative w-full lg:w-[75%]">
              <TypingInput
                className={`bg-transparent border-[#4B5EF7] border-2 w-full p-4 text-2xl mb-6 ${khand.className} focus:outline-none`}
                type="text"
                placeholder=" "
              />
              <div className="absolute top-0 left-0 p-4 pointer-events-none"></div>
              <svg
                className="absolute right-5 top-5"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_27)">
                  <path
                    d="M0 12.0684C0 18.7247 5.41523 24.134 12.0655 24.134C15.1294 24.134 17.932 22.982 20.0637 21.0938L27.7531 28.7832C27.8956 28.9257 28.0796 28.997 28.2697 28.997C28.4597 28.997 28.6437 28.9257 28.7862 28.7832C29.0713 28.4982 29.0713 28.041 28.7862 27.756L21.0909 20.0666C22.9791 17.935 24.131 15.1383 24.131 12.0684C24.131 5.41223 18.7158 0.00292969 12.0655 0.00292969C5.41523 0.00292969 0 5.41223 0 12.0684ZM22.6763 12.0684C22.6763 17.9171 17.9142 22.6792 12.0655 22.6792C6.21683 22.6792 1.45475 17.9171 1.45475 12.0684C1.45475 6.21976 6.21683 1.45768 12.0655 1.45768C17.9142 1.45768 22.6763 6.21382 22.6763 12.0684Z"
                    fill="#4B5EF7"
                  />
                </g>
              </svg>
            </div>

            <div
              onClick={() => {
                Calendly.initPopupWidget({
                  url: "https://calendly.com/surafel-yimam-celerus/30min",
                });
                return false;
              }}
              className={` cursor-pointer bg-[#4B5EF7] h-[52px] w-[250px] text-2xl flex items-center justify-between px-6 ${tektur.className}`}
            >
              FIND TALENT
              <svg
                className="ml-auto"
                fill="#ffffff"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="lg:w-[40%] hidden lg:flex justify-center z[-1]">
            <Globe
              globeImageUrl={null} // Removes the default texture
              globeMaterial={globeMaterial} // Sets globe color to red
              className=" flex justify-center"
              ref={globeEl}
              onGlobeReady={() => setGlobeReady(true)}
              backgroundColor="rgba(0,0,0,0)"
              hexPolygonsData={countries.features}
              hexPolygonResolution={3}
              hexPolygonMargin={0.3}
              hexPolygonUseDots={true}
              hexPolygonColor={() => {
                const hue = 0 + Math.random() * 30; // Between 190°-220° (Cyan/Blue)
                const saturation = 0 + Math.random() * 20; // Keep it vibrant (80%-100%)
                const brightness = 100 + Math.random() * 30; // Not too dark (70%-100%)

                return `hsl(${hue}, ${saturation}%, ${brightness}%)`;
              }}
              hexPolygonLabel={({ properties: d }) => (
                <div>
                  <div>
                    <b>
                      {d.ADMIN} ({d.ISO_A2})
                    </b>
                  </div>
                  <div>
                    Population: <i>{d.POP_EST}</i>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
        {/* <div className="bg-white mt-20 w-full h-[20vh] flex items-center px-20">
          <div>
            {" "}
            <Image
              src="https://www.longevityintime.com/img/Logo512x256.db89f915.svg"
              alt="LongevityInTime Biotech"
              width={200}
              height={82}
              priority
            />
          </div>
        </div> */}
      </main>
      <section className="min-h-screen bg-white w-full flex flex-col items-center justify-center px-12 py-20 ">
        <h2
          className={`text-4xl lg:text-6xl text-center leading-[120%] font-[500] text-[#4B5EF7] mb-2 ${tektur.className}`}
        >
          Why Choose Us
        </h2>
        <p
          className={` py-2 px-40 text-3xl min-w-[800px] text-center leading-[120%] font-[500] text-[#344156] mb-8 ${khand.className}`}
        >
          Build faster, more efficient MVPs with top-tier global talent,
          pre-vetted and ready to help you scale your startup.
        </p>
        <div className=" w-full gap-20 flex flex-col lg:flex-row justify-center items-center text-black mt-10">
          <div className="py-18 flex flex-col gap-0 justify-center items-center">
            <lord-icon
              src="https://cdn.lordicon.com/olaidovj.json"
              trigger="hover"
              colors="primary:#4b5ef7,secondary:#ffffff,tertiary:#4b5ef7,quaternary:#27c7fd"
              style={{ width: "200px", height: "200px" }}
            ></lord-icon>
            <h3
              className={`mt-4 text-3xl text-center leading-[100%] font-[500] text-[#4B5EF7] ${khand.className}`}
            >
              TOP TIER TALENT{" "}
              <span className="block text-2xl">AT COMPETITIVE RATES</span>
            </h3>
            <p
              className={`mt-2 text-wrap text-2xl text-center leading-[120%] font-[500] text-[#344156] ${khand.className}`}
            >
              Access world-class expertise without the high costs of local
              hiring. Scale your team efficiently while maintaining quality and
              innovation.
            </p>
          </div>
          <div className="flex flex-col gap-0 justify-center items-center">
            <lord-icon
              src="https://cdn.lordicon.com/gvbrsyrj.json"
              trigger="hover"
              colors="primary:#4b5ef7,secondary:#4bb3fd"
              style={{ width: "200px", height: "200px" }}
            ></lord-icon>
            <h3
              className={`mt-4 text-3xl text-center leading-[100%] font-[500] text-[#4B5EF7] ${khand.className}`}
            >
              UNMATCHED ACCESS
              <span className="block text-2xl"> TO SPECIALIZED SKILLS</span>
            </h3>
            <p
              className={`mt-2 text-wrap text-2xl text-center leading-[120%] font-[500] text-[#344156] ${khand.className}`}
            >
              Tap into a diverse, global talent pool with experts in software
              development, AI and emerging technologies - filling roles faster
              and smarter.
            </p>
          </div>{" "}
          <div className="flex flex-col gap-0 justify-center items-center">
            <lord-icon
              src="https://cdn.lordicon.com/sgtmgpft.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#4b5ef7,tertiary:#4bb3fd,quaternary:#27c7fd"
              style={{ width: "200px", height: "200px" }}
            ></lord-icon>
            <h3
              className={`mt-4 text-3xl text-center leading-[100%] font-[500] text-[#4B5EF7] ${khand.className}`}
            >
              ROUND THE CLOCK
              <span className="block text-2xl">PRODUCTIVITY & SCALING</span>
            </h3>
            <p
              className={`mt-2 text-wrap text-2xl text-center leading-[120%] font-[500] text-[#344156] ${khand.className}`}
            >
              Keep your business running 24/7 with teams across time zones,
              accelerating development cycles and adaprtng quickly to market
              trends.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="min-h-screen bg-white w-full flex flex-col items-center justify-center px-12  py-20">
        <h2
          className={`text-4xl lg:text-6xl text-center leading-[120%] font-[500] text-[#4B5EF7] mb-2 ${tektur.className}`}
        >
          Our Talent In Action
        </h2>
        <p
          className={` py-2 max-w-[800px] text-3xl text-center leading-[120%] font-[500] text-[#344156] mb-8 ${khand.className}`}
        >
          Build faster, more efficient MVPs with top-tier global talent,
          pre-vetted and ready to help you scale your startup.
        </p>
        <div className="mt-10 relative flex max-h-[400px] max-w-[800px] justify-center items-center text-black mt-10 ">
          <video
            src="https://ai.google.dev/static/images/showcase/opusclip/video.mp4"
            controls
            loop
            muted
            className=""
          />
          <div
            className={`absolute bottom-[-10%] w-[200px] right-[-1%] flex flex-col gap-2 `}
          >
            <div
              className={`bg-[#4B5EF7] px-4 py-2 text-white ${khand.className}`}
            >
              Surafel Yimam
            </div>
            <div
              className={`bg-[#000] px-4 py-2 text-white ${khand.className}`}
            >
              Short description of talent project should be put here
            </div>
          </div>
        </div>
      </section> */}
      <section className="min-h-screen bg-white w-full flex flex-col items-center justify-center px-12 ">
        <h2
          className={`text-4xl lg:text-6xl text-center leading-[120%] font-[500] text-[#4B5EF7] mb-2 ${tektur.className}`}
        >
          Seamless Hiring, Global Expertise
        </h2>
        <p
          className={` py-2 max-w-[800px] text-3xl text-center leading-[120%] font-[500] text-[#344156] mb-8 ${khand.className}`}
        >
          Unlock top-tier talent effortlessly with our simple three step
          process. From consultation to execution, we connect you with the best
          global professionals to scale your business with ease.
        </p>
        <div className=" w-full gap-40 flex flex-col lg:flex-row justify-center items-center text-black mt-10 py-12 ">
          <div className="py-18 flex flex-col gap-0 justify-center px-12  relative">
            <Image
              className="absolute z-[1] right-0"
              src="/triangle.png"
              alt="Celerus IO logo"
              width={200}
              height={82}
              priority
            />
            <h3
              className={`mt-4 text-9xl leading-[100%] font-[500] text-stroke z-[10] ${khand.className}`}
            >
              1
            </h3>
            <h3
              className={`text-4xl lg:text-6xl leading-[100%] font-[500] text-[#4B53F7]  z-[10] ${khand.className}`}
            >
              CONNECT
            </h3>
            <p
              className={`mt-2 text-wrap text-2xl  leading-[120%] font-[500] z-[10] text-[#344156] ${khand.className}`}
            >
              Tell us what you need. We start with a consultation call to
              understand your project, challenges and goals. No hassle, just
              solutions.
            </p>
          </div>
          <div className="py-18 flex flex-col gap-0 justify-center px-12  relative">
            <Image
              className="absolute z-[1] right-0"
              src="/triangle.png"
              alt="Celerus IO logo"
              width={200}
              height={82}
              priority
            />
            <h3
              className={`mt-4 text-9xl leading-[100%] font-[500] text-stroke z-[10] ${khand.className}`}
            >
              2
            </h3>
            <h3
              className={`text-4xl lg:text-6xl leading-[100%] font-[500] text-[#4B53F7]  z-[10] ${khand.className}`}
            >
              MATCH
            </h3>
            <p
              className={`mt-2 text-wrap text-2xl  leading-[120%] font-[500] z-[10] text-[#344156] ${khand.className}`}
            >
              We bring the best to you. Our global talent network delivers
              top-tier experts tailored to your needs, ready to integrate with
              your team.
            </p>
          </div>
          <div className="py-18 flex flex-col gap-0 justify-center px-12  relative">
            <Image
              className="absolute z-[1] right-0"
              src="/triangle.png"
              alt="Celerus IO logo"
              width={200}
              height={82}
              priority
            />
            <h3
              className={`mt-4 text-9xl leading-[100%] font-[500] text-stroke z-[10] ${khand.className}`}
            >
              3
            </h3>
            <h3
              className={`text-4xl lg:text-6xl leading-[100%] font-[500] text-[#4B53F7]  z-[10] ${khand.className}`}
            >
              SCALE
            </h3>
            <p
              className={`mt-2 text-wrap text-2xl  leading-[120%] font-[500] z-[10] text-[#344156] ${khand.className}`}
            >
              Grow without limits. Whether its a single project or a long-term
              collab, we provide the expertise and flexibility to help you
              succeed.
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#4B5EF7] w-full flex flex-col  items-center justify-center px-12">
        <h2
          className={`mt-16text-4xl lg:text-6xl text-center leading-[120%] font-[500] text-white mb-2 ${tektur.className}`}
        >
          What&apos;s Your Challenge?
        </h2>
        <h3
          className={` text-4xl text-center leading-[120%] font-[500] text-white mb-2 ${tektur.className}`}
        >
          Let&apos;s Solve it Together!
        </h3>
        <p
          className={` py-2 max-w-[800px] text-3xl text-center leading-[120%] font-[500] text-white mb-8 ${khand.className}`}
        >
          Build faster, more efficient MVPs with top-tier global talent,
          pre-vetted and ready to help you scale your startup.
        </p>
        <div className="flex flex-col max-w-[800px] w-full">
          <div className="flex gap-10">
            <input
              className={`bg-transparent border-white border-2 w-full p-4 text-2xl mb-6 ${khand.className} focus:outline-none`}
              type="text"
              placeholder="Your Name"
            />
            <input
              className={`bg-transparent border-white border-2 w-full p-4 text-2xl mb-6 ${khand.className} focus:outline-none`}
              type="text"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className={`bg-transparent border-white border-2 w-full p-4 text-2xl mb-6 ${khand.className} focus:outline-none`}
            type="text"
            rows={6}
            placeholder="Message"
          />
          <div
            className={`cursor-pointer ml-auto bg-white h-[52px] w-[150px] text-[#4B5EF7] text-2xl flex items-center justify-between px-6 ${tektur.className}`}
          >
            SEND
            <svg
              className="ml-auto"
              fill="#4B5EF7"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              stroke="#4B5EF7"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className=" max-w-[800px] flex ml-auto"></div>
      </section>
      <section className="min-h-screen bg-white w-full flex flex-col  items-center justify-center px-12">
        <h2
          className={`mt-16 text-4xl lg:text-6xl text-center leading-[120%] font-[500] text-[#4B5EF7] mb-2 ${tektur.className}`}
        >
          Or Book A Call
        </h2>

        <p
          className={` py-2 max-w-[800px] text-3xl text-center leading-[120%] font-[500] text-[#344156]  mb-8 ${khand.className}`}
        >
          Build faster, more efficient MVPs with top-tier global talent,
          pre-vetted and ready to help you scale your startup.
        </p>
        <div className="relative flex  w-full max-w-[800px] justify-center items-center text-black mt-4 ">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/surafel-yimam-celerus/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4b5ef7"
            style={{ minWidth: "800px", height: "700px" }}
          ></div>
        </div>
      </section>
      <footer className="bg-[#E3E8F0] py-20 px-10 gap-20 lg:px-20 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <Image
              src="/logo.png"
              alt="Celerus IO logo"
              width={100}
              height={82}
              priority
            />
            <div className="flex flex-col gap-1 justify-center">
              <div
                className={`text-3xl leading-none text-[#4B5EF7] ${tektur.className}`}
              >
                CELERUS GLOBAL
              </div>
              <div
                className={`text-2xl leading-none text-[#344156] ${khand.className}`}
              >
                INNOVATE BEYOND BOUNDARIES
              </div>
            </div>
          </div>
          <div className="flex gap-6 text-black justify-center items-center flex-wrap">
            <div className="bg-[#4B5EF7] p-2 cursor-pointer">
              <svg
                fill="#FFF"
                height="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="XMLID_801_">
                    {" "}
                    <path
                      id="XMLID_802_"
                      d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                    ></path>{" "}
                    <path
                      id="XMLID_803_"
                      d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                    ></path>{" "}
                    <path
                      id="XMLID_804_"
                      d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="bg-[#4B5EF7] p-2 cursor-pointer">
              <svg
                height="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461.001 461.001"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      style={{ fill: "#fff" }}
                      d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="bg-[#4B5EF7] p-2 cursor-pointer">
              <svg
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 560 400"
              >
                <path
                  d="m178.57 127.15 111.7-127.15h-26.46l-97.03 110.38-77.44-110.38h-89.34l117.13 166.93-117.13 133.32h26.46l102.4-116.59 81.8 116.59h89.34m-263.99-280.71h40.65l187.13 262.13h-40.66"
                  fillRule="nonzero"
                  fill="#FFF"
                  transform="matrix(.9 0 0 .9 145 64.8875)"
                />
                <a href="https://logotyp.us/logo/twitter-x">Twitter X logo</a>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center justify-center">
            <div className="flex flex-col gap-1 justify-center">
              <div
                className={`text-2xl text-center leading-none text-[#344156] ${tektur.className}`}
              >
                CONTACT US
              </div>
              <div className={`mt-4 flex gap-2 items-center`}>
                <div className="bg-[#4B5EF7] p-2 cursor-pointer">
                  <svg
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div
                  className={`text-2xl leading-none text-[#344156] ${khand.className}`}
                >
                  hello@celerus.io
                </div>
              </div>
              <div className={`mt-2 flex gap-2 items-center`}>
                <div className="bg-[#4B5EF7] p-2 cursor-pointer">
                  <svg
                    height="20px"
                    version="1.1"
                    id="Capa_1"
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 53.942 53.942"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M53.364,40.908c-2.008-3.796-8.981-7.912-9.288-8.092c-0.896-0.51-1.831-0.78-2.706-0.78c-1.301,0-2.366,0.596-3.011,1.68 c-1.02,1.22-2.285,2.646-2.592,2.867c-2.376,1.612-4.236,1.429-6.294-0.629L17.987,24.467c-2.045-2.045-2.233-3.928-0.632-6.291 c0.224-0.309,1.65-1.575,2.87-2.596c0.778-0.463,1.312-1.151,1.546-1.995c0.311-1.123,0.082-2.444-0.652-3.731 c-0.173-0.296-4.291-7.27-8.085-9.277c-0.708-0.375-1.506-0.573-2.306-0.573c-1.318,0-2.558,0.514-3.49,1.445L4.7,3.986 c-4.014,4.013-5.467,8.562-4.321,13.52c0.956,4.132,3.742,8.529,8.282,13.068l14.705,14.705c5.746,5.746,11.224,8.66,16.282,8.66 c0,0,0,0,0.001,0c3.72,0,7.188-1.581,10.305-4.698l2.537-2.537C54.033,45.163,54.383,42.833,53.364,40.908z"></path>{" "}
                    </g>
                  </svg>
                </div>
                <div
                  className={`text-2xl leading-none text-[#344156] ${khand.className}`}
                >
                  +1 571 281 1346
                </div>
              </div>
              <div className={`mt-2 flex gap-2 items-center`}>
                <div className="bg-[#4B5EF7] p-2 cursor-pointer">
                  <svg
                    height="20px"
                    fill="#ffffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 395.71 395.71"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div
                  className={`text-2xl leading-none text-[#344156] ${khand.className}`}
                >
                  Virginia, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
