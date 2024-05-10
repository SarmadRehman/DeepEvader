import React from "react";
import { Link as SmoothScroll } from "react-scroll";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <div className={`w-full bg-black-secondary`}>
        <div
          className={`w-full max-w-[1320px] m-auto flex justify-center items-center md:px-6 px-4`}
        >
          <section className="w-full flex justify-center items-start md:flex-row flex-col py-6 md:gap-14 gap-6">
            <div className="md:w-[50%] w-full flex justify-center items-start flex-col">
              <h2 className="font-Outfit font-semibold md:text-[25px] text-xl md:leading-[61px] text-blue-main">
                About Us
              </h2>
              <p className="font-Outfit md:font-[400] font-[300] md:text-[15px] text-sm md:leading-[28px] text-OffWhite">
                Unveiling vulnerabilities in deepfake detection tech. With
                advanced algorithms, it simulates diverse deepfake attacks to
                assess detection system robustness. Gain pre and post-attack
                insights. Ideal for cybersecurity firms and media, it ensures
                readiness against evolving threats. Experience intuitive testing
                with regular methodology updates. Stay ahead with DeepEvader.
              </p>
            </div>
            <div className="md:w-[50%] w-full grid grid-cols-3 grid-rows-1">
              {/* Info */}
              <div className="w-full flex justify-center items-start flex-col">
                <h2 className="font-Outfit font-semibold md:text-[25px] text-lg md:leading-[61px] text-blue-main">
                  Info
                </h2>
                <div className="flex justify-start items-start flex-col md:gap-4 gap-1">
                  <SmoothScroll
                    className={`font-Outfit font-regular md:text-[15px] text-[12px] leading-[20px] text-white cursor-pointer`}
                    activeClass="active"
                    to={"Features"}
                    // spy={true}
                    smooth={true}
                    duration={700}
                  >
                    Features
                  </SmoothScroll>
                  <SmoothScroll
                    className={`font-Outfit font-regular md:text-[15px] text-[12px] leading-[20px] text-white cursor-pointer`}
                    activeClass="active"
                    to={"Plans"}
                    // spy={true}
                    smooth={true}
                    duration={700}
                  >
                    Pricing
                  </SmoothScroll>
                  <SmoothScroll
                    className={`font-Outfit font-regular md:text-[15px] text-[12px] leading-[20px] text-white cursor-pointer`}
                    activeClass="active"
                    to={""}
                    // spy={true}
                    smooth={true}
                    duration={700}
                  >
                    Reviews
                  </SmoothScroll>
                </div>
              </div>
              {/* Support */}
              <div className="w-full flex justify-start items-start flex-col">
                <h2 className="font-Outfit font-semibold md:text-[25px] text-lg md:leading-[61px] text-blue-main">
                  Support
                </h2>
                <div className="flex justify-center items-start flex-col md:gap-4 gap-1">
                  <Link
                    href={""}
                    className={`font-Outfit font-regular md:text-[15px] text-[12px] leading-[20px] text-white cursor-pointer`}
                  >
                    Submit Ticket
                  </Link>
                  <Link
                    href={""}
                    className={`font-Outfit font-regular md:text-[15px] text-[12px] leading-[20px] text-white cursor-pointer`}
                  >
                    Documentation
                  </Link>
                </div>
              </div>
              {/* Follow us */}
              <div className="w-full flex justify-start items-start flex-col">
                <h2 className="font-Outfit font-semibold md:text-[25px] text-lg md:leading-[61px] text-blue-main">
                  Follow Us
                </h2>
                <div className="flex justify-center items-start flex-col md:gap-4 gap-1">
                  <a
                    href={""}
                    className={`font-Outfit font-regular md:text-[15px] text-[12px] leading-[20px] text-white cursor-pointer`}
                  >
                    Twitter
                  </a>
                  <a
                    href={""}
                    className={`font-Outfit font-regular md:text-[15px] text-[12px] leading-[20px] text-white cursor-pointer`}
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`w-full bg-black-tertiary -mt-[1px]`}>
        <div
          className={`w-full max-w-[1320px] m-auto flex justify-center items-center md:flex-row flex-col md:px-6 px-4 py-5 md:gap-14 gap-4`}
        >
          {/* copyright tag */}
          <p className="font-regular font-Outfit text-[15px] leading-[20px] text-white">
            © DeepEvader. 2024
          </p>
          <Link
            href={""}
            className="font-regular font-Outfit text-[15px] leading-[20px] text-white underline"
          >
            Terms of Service
          </Link>
          <Link
            href={""}
            className="font-regular font-Outfit text-[15px] leading-[20px] text-white underline"
          >
            Privacy Policy
          </Link>
          <Link
            href={""}
            className="font-regular font-Outfit text-[15px] leading-[20px] text-white underline"
          >
            Cookie Policy
          </Link>
          <Link
            href={""}
            className="font-regular font-Outfit text-[15px] leading-[20px] text-white underline"
          >
            Acceptable Use Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
