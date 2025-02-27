// @ts-nocheck
"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tektur, Khand } from "next/font/google";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Link from "next/link";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

const GlobalTalentShortageChart = () => {
  const data = {
    labels: ["2024", "2026", "2028", "2030"],
    datasets: [
      {
        label: "Tech Talent Shortage (in millions)",
        data: [20, 40, 65, 85],
        backgroundColor: "rgba(75, 94, 247, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Tech Workers (millions)",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Projected Global Tech Talent Shortage by 2030",
      },
    },
  };

  return (
    <div className="mb-10">
      <Bar data={data} options={options} />
      <p className="text-[#344156]">
        Source:
        <a
          target="_blank"
          className={"text-[#4B5EF7] font-italic "}
          href="https://www.theclintoncourier.net/2024/11/18/the-global-it-talent-market-in-2024-2025/?utm_source=chatgpt.com"
        >
          The Global IT Talent Market in 2024/2025
        </a>{" "}
      </p>
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
  const [loading, setLoading] = useState(false);

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
          <div className="flex justify-center items-center px-10">
            <div className="w-full bg-white p-16 max-w-[800px] mt-12">
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
                className={`text-4xl lg:text-6xl leading-[120%] font-[500] text-[#4B5EF7] mb-2 fade-in-up ${tektur.className}`}
              >
                Global Software Talent
              </h1>
              <h2
                className={`text-3xl lg:text-5xl leading-[100%] font-[500] text-[#344156] mb-2 fade-in-up ${tektur.className}`}
              >
                The Key to Innovation and Growth at Celerus
              </h2>
              <p
                className={`text-2xl leading-[130%] text-justify  text-[#344156] italic mb-6 fade-in-up ${khand.className}`}
              >
                Thursday, February 27, 8:00 AM
              </p>

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
                This article explores the growing demand for global software
                talent, its benefits, and the strategies Celerus employs to
                harness it effectively. It covers recent industry trends,
                challenges in managing a global workforce, and future
                opportunities in the evolving tech landscape.
              </p>

              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                In today&#39;s rapidly evolving digital landscape, the demand
                for skilled software professionals has reached unprecedented
                levels. Companies worldwide are striving to harness global
                software talent to drive innovation, maintain competitiveness,
                and achieve sustainable growth. At Celerus, we recognize the
                immense potential of tapping into this global talent pool and
                have strategically positioned ourselves to leverage it
                effectively.
              </p>

              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                The Escalating Demand for Global Software Talent
              </h4>

              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                The global technology sector is experiencing a significant
                talent shortage.{" "}
                <a
                  className="text-[#4B5EF7]"
                  target="_blank"
                  href="https://www.blackstone.studio/blog/global-talent-shortage-2024/?utm_source=chatgpt.com"
                >
                  Projections indicate a deficit of over 85 million tech workers
                  by 2030, potentially resulting in $5.5 trillion in unrealized
                  annual revenues.
                </a>{" "}
                This shortfall is driven by rapid technological advancements,
                the proliferation of digital transformation initiatives, and an
                increasing reliance on artificial intelligence and machine
                learning across industries.
              </p>

              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                To visualize this trend, consider the following graph
                illustrating the projected global tech talent shortage:
              </p>
              <GlobalTalentShortageChart />

              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                Benefits of a Global Software Workforce
              </h4>

              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                Embracing a global software workforce offers numerous
                advantages:
              </p>

              <ol
                className={`text-2xl flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">1</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Access to Diverse Skill Sets{" "}
                    </span>
                    Engaging with talent from various regions brings a wealth of
                    perspectives and expertise, fostering innovation and
                    creative problem-solving.
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">2</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Cost Efficiency{" "}
                    </span>
                    Hiring professionals from regions with lower living costs
                    can lead to significant financial savings without
                    compromising quality.
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">3</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Continuous Productivity
                    </span>
                    A distributed team across multiple time zones enables
                    round-the-clock development cycles, accelerating project
                    timelines.
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">4</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">Scalability</span>
                    Global talent pools allow for rapid scaling of operations to
                    meet evolving business needs.
                  </span>
                </li>
              </ol>

              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                Celerus&#39; Strategic Approach to Global Software Talent
              </h4>

              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                At Celerus, our approach to harnessing global software talent
                encompasses several key strategies:
              </p>

              <ol
                className={` text-2xl flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">1</span>
                  <span>
                    <span className="text-[#4B5EF7] block">
                      Comprehensive Talent Acquisition
                    </span>
                    We employ a multifaceted recruitment strategy that includes:
                    <ul className="flex flex-col gap-4 mt-10">
                      <li>
                        <strong>
                          Collaborations with Educational Institutions:
                        </strong>{" "}
                        Partnering with universities and coding bootcamps to
                        identify and nurture emerging talent.
                      </li>
                      <li>
                        <strong>
                          Participation in Global Tech Communities:
                        </strong>{" "}
                        Engaging with international tech forums and hackathons
                        to connect with top developers.
                      </li>
                      <li>
                        <strong>Leveraging Remote Work Platforms:</strong>{" "}
                        Utilizing platforms that facilitate remote work to
                        access a broader talent pool.
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">2</span>
                  <span>
                    <span className="text-[#4B5EF7] block">
                      Fostering a Collaborative Remote Work Environment
                    </span>
                    We have cultivated a remote-friendly culture by:
                    <ul className="flex flex-col gap-4 mt-10">
                      <li>
                        <strong>
                          Implementing Advanced Communication Tools:
                        </strong>{" "}
                        Utilizing platforms like Slack, Microsoft Teams, and
                        Zoom to ensure seamless interaction.
                      </li>
                      <li>
                        <strong>
                          Establishing Clear Communication Protocols:
                        </strong>{" "}
                        Setting guidelines to maintain transparency and
                        efficiency in remote collaborations.
                      </li>
                      <li>
                        <strong>Promoting Asynchronous Work Practices:</strong>{" "}
                        Allowing flexibility in work hours to accommodate
                        different time zones and personal schedules.
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">3</span>
                  <span>
                    <span className="text-[#4B5EF7] block">
                      Commitment to Continuous Learning
                    </span>
                    Recognizing the fast-paced nature of technology, we invest
                    in:
                    <ul className="flex flex-col gap-4 mt-10">
                      <li>
                        <strong>Professional Development Programs:</strong>{" "}
                        Offering access to online courses, certifications, and
                        workshops to keep our team at the forefront of industry
                        advancements.
                      </li>
                      <li>
                        <strong>Internal Knowledge Sharing:</strong> Encouraging
                        team members to share insights and learnings through
                        regular seminars and collaborative projects.
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">4</span>
                  <span>
                    <span className="text-[#4B5EF7] block">
                      Cultivating an Inclusive Company Culture
                    </span>
                    To ensure a cohesive global team, we focus on:
                    <ul className="flex flex-col gap-4 mt-10">
                      <li>
                        <strong>Diversity and Inclusion Initiatives:</strong>{" "}
                        Implementing policies that promote a diverse workforce
                        and an inclusive environment.
                      </li>
                      <li>
                        <strong>Regular Team Engagement Activities:</strong>{" "}
                        Organizing virtual team-building exercises and social
                        events to strengthen interpersonal connections.
                      </li>
                      <li>
                        <strong>Recognition and Reward Systems:</strong>{" "}
                        cknowledging and rewarding contributions to motivate and
                        retain top talent.
                      </li>
                    </ul>
                  </span>
                </li>
              </ol>
              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                Navigating Challenges in Managing Global Software Talent
              </h4>

              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                While the benefits are substantial, managing a global workforce
                presents challenges:
              </p>
              <ol
                className={`text-2xl flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">1</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Time Zone Variations:
                    </span>
                    Coordinating across different time zones requires careful
                    scheduling and flexibility.
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">2</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Cultural and Language Differences
                    </span>
                    Diverse backgrounds necessitate cultural sensitivity and
                    clear communication to prevent misunderstandings.
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span className="text-7xl text-stroke-1">3</span>
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Data Security and Compliance
                    </span>
                    Ensuring robust cybersecurity measures and adherence to
                    international data protection regulations is paramount.
                  </span>
                </li>
              </ol>
              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                Recent Developments in Global Software Talent
              </h4>
              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                The global software talent landscape is continually evolving.
                Notable recent developments include:
              </p>
              <ol
                className={`text-2xl flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Africa&#39;s Emerging Tech Hubs:
                    </span>
                    Countries like Nigeria and Egypt have seen significant
                    growth in their developer communities, with
                    <a
                      className="pl-2 italic text-[#4B5EF7]"
                      target="_blank"
                      href="https://news.ng/nigeria-egypt-propel-to-top-10-in-global-software-developer-growth-rankings-for-2023/?utm_source=chatgpt.com"
                    >
                      Nigeria experiencing a 45.6% increase in developer talent
                      between Q3 2022 and Q3 2023.
                    </a>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      AI Talent Wars Intensify:
                    </span>
                    The competition for AI professionals has escalated, with
                    companies like
                    <a
                      className="pl-2 italic text-[#4B5EF7]"
                      target="_blank"
                      href="https://www.theverge.com/2024/12/20/24326135/ai-talent-wars-databricks-interview?utm_source=chatgpt.com"
                    >
                      Databricks raising substantial funds to attract and retain
                      top AI talent.
                    </a>
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      India&#39;s Expanding Role:
                    </span>
                    India is positioning itself as a key player in the global AI
                    race, with
                    <a
                      className="pl-2 italic text-[#4B5EF7]"
                      target="_blank"
                      href="https://time.com/7018294/india-ai-artificial-intelligence-ambani/?utm_source=chatgpt.com"
                    >
                      significant investments in AI infrastructure and a
                      projected AI market growth to $17 billion by 2027.
                    </a>
                  </span>
                </li>
              </ol>
              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                The Future of Global Software Talent at Celerus
              </h4>
              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                Looking ahead, Celerus is committed to:
              </p>
              <ol
                className={`text-2xl flex gap-8 flex-col text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Expanding Our Talent Network:
                    </span>
                    Exploring emerging tech hubs and underrepresented regions to
                    diversify our talent pool.
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Integrating Advanced Technologies:
                    </span>
                    Utilizing AI-driven tools to enhance recruitment processes
                    and project management.
                  </span>
                </li>
                <li className="border-l pl-4 border-[#4B5EF7] flex gap-4">
                  <span>
                    <span className="text-[#4B5EF7] pr-2">
                      Enhancing Virtual Collaboration:
                    </span>
                    Adopting immersive technologies like virtual reality to
                    create more engaging remote work environments.
                  </span>
                </li>
              </ol>
              <h4
                className={`text-3xl leading-[130%] text-justify text-[#344156] mb-8 fade-in-up ${khand.className}`}
              >
                Conclusion
              </h4>
              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                The demand for global software talent continues to rise,
                presenting both challenges and opportunities for companies
                worldwide. At Celerus, we remain steadfast in our mission to
                attract, develop, and retain top-tier talent through strategic
                recruitment, continuous learning, and a strong company culture.
              </p>
              <p
                className={`text-2xl leading-[130%] text-justify text-[#344156] mb-10 fade-in-up ${khand.className}`}
              >
                By leveraging emerging technologies and fostering an inclusive,
                remote-friendly work environment, we are well-positioned to
                drive innovation and maintain a competitive edge in the evolving
                tech landscape. Our commitment to global talent acquisition and
                retention will ensure that Celerus continues to thrive and
                deliver cutting-edge solutions to meet the demands of an
                ever-changing digital world.
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

            {/* <div className="flex gap-6 text-black justify-center items-center flex-wrap">
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
            </div> */}
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
