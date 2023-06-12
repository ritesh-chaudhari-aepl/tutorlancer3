const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-pink-darkPink to-blue-light text-white">
      {/* <footer className="bg-gradient-to-r from-[blue] to-[black] text-white"> */}

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 sm:py-16">
        <div>
          <div className="flex flex-col gap-8">
            <span className="tracking-[6px] font-Nunito font-bold text-2xl sm:text-4xl">
              LOGO
            </span>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-8">
              <div>
                <p className="text-[18px] font-Nunito font-[500] leading-[30px]">
                  Tutorlancer is an online platform that connects online tutors
                  with
                  <br /> students across the globe who seeks academic help.
                </p>
                <p className="flex flex-col gap-1 font-Nunito">
                  <span>
                    <strong>Email</strong>: support@thetutorlancer.com
                  </span>
                  <span>
                    <strong>Phone</strong>: +91 6289409441
                  </span>
                </p>
              </div>
              <div>
                <span className="capitalize flex flex-col">
                  <span className="leading-7">
                    <strong>address</strong>: c/o -s.k.mishra, c.m.r.i
                  </span>
                  <span>gate, bartand, dhanbad,</span>
                  <span> jharkhand, india (826001)</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="mb-10 sm:mb-0">
                © 2022 thetutorlancer.com. All rights reserved Abhay Education
                Pvt. Ltd.
              </p>
              <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                <li className="cursor-pointer">
                  <a to="#" className="font-Inter text-sm sm:text-base">
                    Terms of Services
                  </a>
                </li>{" "}
                <span className="h-[1px] w-10 lg:h-10 lg:w-[2px] bg-white mx-5 lg:mx-0" />
                <li className="cursor-pointer">
                  <a to="#" className="font-Inter text-lg lg:text-base">
                    Privacy Policy
                  </a>
                </li>{" "}
                <span className="h-[1px] w-10 lg:h-10 lg:w-[2px] bg-white mx-5 lg:mx-0" />
                <li className="cursor-pointer">
                  <a to="#" className="font-Inter text-lg lg:text-base">
                    Support Center
                  </a>
                </li>{" "}
                <span className="h-[1px] w-10 lg:h-10 lg:w-[2px] bg-white mx-5 lg:mx-0" />
                <li className="cursor-pointer">
                  <a to="#" className="font-Inter text-lg lg:text-base">
                    Refunds
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
