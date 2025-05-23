import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-6 md:pt-10 lg:pt-14"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color"></p>
                <div className="flex items-center">
                  <a
                    href="https://www.tiktok.com/@talmodelun"
                    rel="nofollow noopener"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      image-rendering="optimizeQuality"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      viewBox="0 0 512 512"
                      id="tiktok"
                    >
                      <path d="M353.97 0.43c0.03,7.81 2.31,120.68 120.76,127.72 0,32.55 0.04,56.15 0.04,87.21 -8.97,0.52 -77.98,-4.49 -120.93,-42.8l-0.13 169.78c1.63,117.84 -85.09,189.55 -198.44,164.78 -195.46,-58.47 -130.51,-348.37 65.75,-317.34 0,93.59 0.05,-0.03 0.05,93.59 -81.08,-11.93 -108.2,55.52 -86.65,103.81 19.6,43.97 100.33,53.5 128.49,-8.53 3.19,-12.14 4.78,-25.98 4.78,-41.52l0 -337.13 86.28 0.43z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/talmun24/"
                    rel="nofollow noopener"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      id="instagram"
                    >
                      <linearGradient
                        id="a"
                        x1="1.464"
                        x2="14.536"
                        y1="14.536"
                        y2="1.464"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#FFC107"></stop>
                        <stop offset=".507" stop-color="#F44336"></stop>
                        <stop offset=".99" stop-color="#9C27B0"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                      ></path>
                      <linearGradient
                        id="b"
                        x1="5.172"
                        x2="10.828"
                        y1="10.828"
                        y2="5.172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#FFC107"></stop>
                        <stop offset=".507" stop-color="#F44336"></stop>
                        <stop offset=".99" stop-color="#9C27B0"></stop>
                      </linearGradient>
                      <path
                        fill="url(#b)"
                        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                      ></path>
                      <linearGradient
                        id="c"
                        x1="11.923"
                        x2="12.677"
                        y1="4.077"
                        y2="3.323"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#FFC107"></stop>
                        <stop offset=".507" stop-color="#F44336"></stop>
                        <stop offset=".99" stop-color="#9C27B0"></stop>
                      </linearGradient>
                      <circle
                        cx="12.3"
                        cy="3.7"
                        r=".533"
                        fill="url(#c)"
                      ></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/committees"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Committees{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/faq"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      FAQ{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 py-3">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              Developed By{" "}
              <a
                href="https://github.com/doctormaster1"
                rel="nofollow noopener"
              >
                doctormaster
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
