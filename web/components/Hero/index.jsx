"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] "
                data-wow-delay=".2s"
              >
                <br />
                <h1 className="mb-5 text-3xl font-bold leading-tight text-center text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Distinguished Participants;
                </h1>
                <br />
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  It is with great enthusiasm and a sense of pride that we
                  extend our warmest welcome to each one of you to the inaugural
                  TALMUN'24 Conference. As the Secretary-Generals, we are
                  honored to witness the beginning of a new tradition, where the
                  seeds of diplomacy, collaboration, and global understanding
                  will be sown. <br />
                  <br />
                  Throughout the conference, we invite you to immerse yourselves
                  in the experience, learn from one another, and celebrate the
                  diversity of perspectives that make Model United Nations such
                  a powerful educational tool. Our experienced chairs and staff
                  are here to guide you, ensuring a constructive and enriching
                  environment for all.
                  <br />
                  <br />
                  As we embark on this exciting journey together, let us make
                  our first conference a resounding success. May it be a
                  foundation for future conferences, fostering a tradition of
                  diplomacy, dialogue, and positive change.
                  <br />
                  <br />
                  Thank you for being a part of this historic event. We are
                  looking forward to witnessing the incredible contributions and
                  achievements that will undoubtedly emerge from our collective
                  efforts.
                  <br />
                  <br />
                  Sincerely,
                </p>
                <p className="mb-12 text-base font-normal !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Necdet Kerem MERAL <br />
                  Sümeyra KÖSE <br />
                  Secretary Generals of TALMUN'24
                </p>
                <div
                  id="apply"
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <Link
                    href="https://forms.gle/nue5VETdAjaFc5J76"
                    className="rounded-md bg-primary py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/800"
                  >
                    Apply As A Delegate
                  </Link>
                  <Link
                    href="https://forms.gle/qyZpcHtGkAuijK8g7"
                    className="rounded-md bg-primary py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/800"
                  >
                    Apply As A Delegation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
