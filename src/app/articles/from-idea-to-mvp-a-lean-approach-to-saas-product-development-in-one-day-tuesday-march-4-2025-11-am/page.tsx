// @ts-nocheck
"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tektur, Khand } from "next/font/google";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement
);

const C2CEmploymentVisualizationBar = () => {
  // Data for the bar chart: Percentage of global workers in contract employment by region
  const barData = {
    labels: [
      "North America",
      "Europe",
      "Asia-Pacific",
      "Latin America",
      "Middle East & Africa",
    ],
    datasets: [
      {
        label: "Percentage of Contract Workers (%)",
        data: [30, 25, 35, 20, 15], // Example data; replace with actual statistics
        backgroundColor: "rgba(75, 94, 247, 0.7)",
        borderColor: "rgba(75, 94, 247, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const barOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Region",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage (%)",
        },
        min: 0,
        max: 100,
      },
    },
  };

  // Data for the pie chart: Distribution of reasons for choosing contract work

  return (
    <div className="mb-10">
      <div>
        <Bar data={barData} options={barOptions} />
        <p className="text-[#344156]">
          Source:
          <a
            target="_blank"
            className={"text-[#4B5EF7] font-italic "}
            href="https://americanstaffing.net/research/fact-sheets-analysis-staffing-industry-trends/staffing-industry-statistics/"
          >
            American Staffing Association - Staffing Industry Statistics
          </a>{" "}
        </p>
      </div>
    </div>
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

const Article = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        background: "white",
      }}
    >
      <div className={`${loading && "z-[-1]"} `}>
        <header className="bg-[#E3E8F0] fixed flex justify-between w-full px-10 py-6 z-[100] items-center">
          <div className="flex gap-1 items-center">
            <Image
              src="/logo.png"
              alt="Celerus IO logo"
              width={100}
              height={82}
              priority
              data-aos="fade-up" // Animation trigger
              data-aos-delay="3000" // Delay for 3 seconds
            />
            <div className="flex flex-col gap-1 justify-center">
              <div
                className={`text-2xl leading-none text-[#4B5EF7] ${tektur.className}`}
                data-aos="fade-up"
                data-aos-delay="3000"
              >
                CELERUS GLOBAL
              </div>
              <div
                className={`text-2xl leading-none text-[#344156] ${khand.className}`}
                data-aos="fade-up"
                data-aos-delay="3000"
              >
                INNOVATE BEYOND BOUNDARIES
              </div>
            </div>
          </div>
          <div className="lg:flex gap-6 hidden">
            <a
              href="https://calendly.com/surafel-yimam-celerus/30min"
              className={`cursor-pointer px-4 bg-[#4B5EF7] h-[44px] w-[199px] justify-between text-xl flex items-center ${tektur.className}`}
              data-aos="fade-up"
              data-aos-delay="3000" // Apply 3-second delay
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

            <Link href="/articles/global-software-talent-the-key-to-innovation-and-growth-at-celerus-thursday-february-27-2025-8-pm">
              <div
                className={`cursor-pointer bg-[#65748C] h-[44px] w-[199px] text-xl flex items-center justify-center ${tektur.className}`}
                data-aos="fade-up"
                data-aos-delay="3000" // Apply 3-second delay
              >
                READ ARTICLES
              </div>
            </Link>
          </div>
        </header>
        <main className="bg-[rgba(75, 94, 247, 1)] min-h-[80vh] py-20">
          <div className="flex justify-center items-center px-4">
            <div className="w-full bg-white py-16 px-8 max-w-[800px] mt-12">
              <div className="flex mb-4 justify-between items-center">
                <div className="flex gap-2 items-center cursor-pointer ">
                  <div className="">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="-3 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#4B5EF7"
                      transform="rotate(180)"
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
                        <g id="icomoon-ignore"> </g>{" "}
                        <path
                          d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                          fill="#4B5EF7"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                          fill="#4B5EF7"
                        >
                          {" "}
                        </path>{" "}
                      </g>
                    </svg>
                  </div>
                  <Link href="/">
                    <p
                      className={`text-2xl leading-[130%] text-justify text-[#4B5EF7] fade-in-up ${khand.className}`}
                    >
                      Back to Home
                    </p>
                  </Link>
                </div>
                <div className="flex gap-2 items-center "></div>
              </div>
              <h1
                className={`text-4xl lg:text-5xl leading-[120%] font-[500] text-[#4B5EF7] mb-2 fade-in-up ${tektur.className}`}
              >
                From Idea to MVP: A Lean Approach to SaaS Product Development
                (in 1 Day)
              </h1>
              <h2
                className={`text-3xl lg:text-4xl leading-[100%] font-[500] text-[#344156] mb-2 fade-in-up ${tektur.className}`}
              >
                AI-powered Smart Scholarship Finder & Application Assistant
              </h2>
              <p
                className={`text-2xl leading-[130%] text-justify  text-[#344156] italic mb-6 fade-in-up ${khand.className}`}
              >
                Tuesday, March 4, 4:00 OM
              </p>
              <div className="w-full ">
                <Image
                  className="mb-4"
                  src="/grantgenius.png"
                  alt="From Idea to MVP: A Lean Approach to SaaS Product Development "
                  width={800}
                  height={600}
                  priority
                />{" "}
                <p
                  className={`text-2xl leading-[130%] text-justify  text-[#344156] italic mb-6 fade-in-up ${khand.className}`}
                >
                  Source:
                  <a
                    className="pl-2 text-[#4B5EF7]"
                    target="_blank"
                    href="https://www.gg-vercel.app"
                  >
                    Check out the demo site
                  </a>
                </p>
              </div>

              <div className="flex mb-10 justify-between items-center">
                <div className="flex gap-2 items-center ">
                  <div className="border-[#4B5EF7] border rounded-full">
                    <svg
                      fill="#4B5EF7"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 45.532 45.532"
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
                        <g>
                          {" "}
                          <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>

                  <p
                    className={`text-2xl leading-[130%] text-justify text-[#4B5EF7] fade-in-up ${khand.className}`}
                  >
                    Surafel Yimam
                  </p>
                </div>
                <div className="flex gap-2 items-center "></div>
              </div>
              <p
                className={`text-2xl italic opacity-[80%] leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                Building a SaaS product from scratch can be overwhelming, but
                with a lean approach, you can validate ideas quickly, minimize
                waste, and launch efficiently. This guide outlines a structured
                path from idea to Minimum Viable Product (MVP) while maintaining
                agility.
              </p>
              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                Throughout this guide, we'll integrate the example of an
                AI-powered Smart Scholarship Finder & Application Assistant,
                designed to help African students discover and apply for
                international scholarships with ease.
              </p>
              <ol
                className={`text-2xl flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">1</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      IDENTIFY THE PROBLEM
                    </span>
                    A successful SaaS product solves a clear pain point. Start
                    by:
                    <ol
                      className={`text-2xl mt-10 flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
                    >
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Conducting market research to identify unmet needs.
                          </span>
                          Many African students face difficulties finding
                          relevant scholarships due to scattered information.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Engaging with potential users to understand their
                            challenges.
                          </span>
                          AI can help by aggregating scholarship opportunities,
                          matching students based on their qualifications, and
                          simplifying the application process.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Validating demand through surveys, interviews, and
                            competitor analysis.
                          </span>
                          By using AI-powered web scraping and NLP, the
                          assistant can extract opportunities and provide a
                          ranked list based on relevance.
                        </span>
                      </li>
                    </ol>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">2</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      DEFINE YOUR UNIQUE VALUE PROPOSITION
                    </span>
                    What makes your SaaS different? Clearly define:
                    <ol
                      className={`text-2xl mt-10 flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
                    >
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            The core benefit your product provides.
                          </span>
                          The AI Scholarship Finder's UVP is personalized
                          recommendations and an automated application guide.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            How it improves efficiency, reduces costs, or
                            enhances user experience.
                          </span>
                          The AI Scholarship Finder's UVP reduces research time
                          and improves application success rates.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Why customers should choose your solution over
                            alternatives.
                          </span>
                          Unlike static lists on university websites, this
                          assistant continuously updates opportunities and
                          tailors results to each student’s profile.
                        </span>
                      </li>
                    </ol>
                  </span>
                </li>
                <div className="w-full ">
                  <Image
                    className="mb-4"
                    src="/gg-2.png"
                    alt="From Idea to MVP: A Lean Approach to SaaS Product Development "
                    width={800}
                    height={600}
                    priority
                  />{" "}
                  <p
                    className={`text-2xl leading-[130%] text-justify  text-[#344156] italic mb-6 fade-in-up ${khand.className}`}
                  >
                    Rapid Figma Prototyping
                  </p>
                </div>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">3</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Create a Lean MVP Plan
                    </span>
                    Instead of building a fully-featured product, focus on
                    delivering core functionality that solves the primary
                    problem. Keep in mind:
                    <ol
                      className={`text-2xl mt-10 flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
                    >
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Must-have vs. nice-to-have features – prioritize
                            essentials.
                          </span>
                          AI-driven search, scholarship matching, and
                          application tracking. While nice-to-haves would be
                          Community forums, AI essay review, deadline reminders.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Rapid prototyping – use wireframes or clickable
                            mockups.
                          </span>
                          A simple web app where students input their details,
                          and AI suggests relevant scholarships. Initial AI
                          models can use GPT-based filtering and ranking
                          algorithms.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Technology stack – Choose a scalable but lightweight
                            approach
                          </span>
                          Next.js + React
                        </span>
                      </li>
                    </ol>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">4</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      BUILD WITH SPEED AND EFFICIENCY
                    </span>
                    Use agile development principles:
                    <ol
                      className={`text-2xl mt-10 flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
                    >
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Start small – focus on a core feature that
                            demonstrates value.
                          </span>
                          The Scholarship Finder MVP can use AI-powered web
                          scraping tools to collect scholarship data.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Iterate quickly – build in short sprints and gather
                            user feedback.
                          </span>
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Technology stack – Choose a scalable but lightweight
                            approach
                          </span>
                          NLP models (like GPT) to analyze application
                          requirements and match students efficiently. Firebase
                          for authentication and database management. OpenAI’s
                          API to assist with writing scholarship essays based on
                          prompts.
                        </span>
                      </li>
                    </ol>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">5</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      TEST AND VALIDATE WITH USERS
                    </span>
                    Once your MVP is ready:
                    <ol
                      className={`text-2xl mt-10 flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
                    >
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Launch a beta version to a select group of users.
                          </span>
                          Soft-launch the Scholarship Assistant to your LinkedIn
                          audience.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Gather real-time feedback on usability and
                            performance.
                          </span>
                          Collect feedback on ease of use, scholarship
                          relevance, and AI recommendations.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Track key metrics like engagement, churn rate, and
                            feature adoption.
                          </span>
                          Monitor metrics like scholarship application rates,
                          user engagement, and drop-off points. Use A/B testing
                          to fine-tune AI filtering and improve the ranking
                          algorithm.
                        </span>
                      </li>
                    </ol>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">6</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Iterate, Improve, and Scale
                    </span>
                    <ol
                      className={`text-2xl mt-10 flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
                    >
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Use feedback to refine your product
                          </span>
                          If students request deadline reminders, add a
                          notification system.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Optimize the onboarding process.
                          </span>
                          Collect feedback on ease of use, scholarship
                          relevance, and AI recommendations.
                        </span>
                      </li>
                      <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                        <span>
                          <span className="text-[#4B5EF7] pr-2">
                            Track key metrics like engagement, churn rate, and
                            feature adoption.
                          </span>
                          Monitor metrics like scholarship application rates,
                          user engagement, and drop-off points. Use A/B testing
                          to fine-tune AI filtering and improve the ranking
                          algorithm.
                        </span>
                      </li>
                    </ol>
                  </span>
                </li>
              </ol>
              <div className="w-full ">
                <Image
                  className="mb-4"
                  src="/grantgenius.png"
                  alt="From Idea to MVP: A Lean Approach to SaaS Product Development "
                  width={800}
                  height={600}
                  priority
                />{" "}
                <p
                  className={`text-2xl leading-[130%] text-justify  text-[#344156] italic mb-6 fade-in-up ${khand.className}`}
                >
                  First Iteration
                </p>
              </div>
              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                Conclusion
              </h4>
              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                A lean approach helps reduce risks, save time, and maximize
                product-market fit. Start with a focused MVP, gather insights,
                and iterate until you achieve a solid foundation for growth.
              </p>
              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                🚀 Thinking of building a SaaS product? Let’s talk about how we
                can make it happen efficiently!
              </p>
            </div>
          </div>
        </main>

        <footer className="bg-[#E3E8F0] py-20 px-10 gap-20 lg:px-20 flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col">
            <Link
              passHref
              className="flex gap-1 items-center cursor-pointer"
              href="/"
            >
              <Image
                src="/logo.png"
                alt="Celerus IO logo"
                width={100}
                height={82}
                priority
              />
              <div className="flex flex-col gap-1 justify-center">
                <div
                  className={`text-2xl leading-none text-[#4B5EF7] ${tektur.className}`}
                >
                  CELERUS GLOBAL
                </div>
                <div
                  className={`text-2xl leading-none text-[#344156] ${khand.className}`}
                >
                  INNOVATE BEYOND BOUNDARIES
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div className="flex gap-1 items-center justify-center">
              <div className="flex flex-col gap-1 justify-center">
                <div
                  className={`text-2xl leading-[130%] text-center leading-none text-[#344156] ${tektur.className}`}
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
                    recruiter@celerus.io
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
      <div
        className={`fixed top-0 w-screen flex items-center justify-center bg-white h-screen ${
          loading ? "z-[1000]" : "hidden"
        } `}
      >
        <p className="text-lg text-[#4B5EF7] w-[100px] font-mono">
          LOADING<span className="loading-dots"></span>
        </p>
      </div>
    </div>
  );
};

export default Article;
