import CustomButton from "../buttons/CustomButton";
import { BsFillPlayFill } from "react-icons/bs";
import hero from "../../assets/banner-3.png";
import flower from "../../assets/flower.svg";

const Hero = () => {
  // const bgstyles = {
  //   backgroundImage: `url(${hero})`,
  //   backgroundSize: "contain",
  //   backgroundPosition: "10%",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  // };

  return (
    <section className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-2xl lg:max-w-screen-xl px-4 py-2 sm:py-12 sm:px-6 lg:py-2 lg:px-8">
        <div className="grid grid-cols-1  pt-8 lg:grid-cols-2 lg:pt-16">
          <div className=" lg:order-last">
            <img
              alt="Party"
              src={hero}
              className="object-contain h-64 lg:h-full md:h-80 md:w-full lg:w-full xl:h-full xl:mt-6 lg:mt-0 md:mt-10"
            />
          </div>
          <div className=" sm:pt-10">
            <div className="py-10">
              <div className="flex gap-2 mb-4 items-center sm:flex-row sm:gap-3">
                <span className="capitalize text-[#D7A74A] font-Inter font-semibold text-sm ">
                  100% satisfaction guarantee
                </span>
              </div>
              <h1 className="text-4xl leading-[50px] font-normal capitalize lg:text-[48px] lg:leading-[60px] xl:text-[62px] xl:leading-[85px] mb-8">
                get quality{" "}
                <span className="relative font-bold">
                  Tutoring
                  <img
                    src={flower}
                    alt="flower"
                    className="h-10 object-cover absolute top-0 -right-6"
                  />
                </span>
                <strong>
                  <br /> through 1-on-1
                </strong>
                <br /> online tutoring
              </h1>

              <p className="mt-3 text-black font-Inter font-medium mb-10">
                private, 1-on-1 lessions with te expert instructor based on
                <br /> your goals and interests.
              </p>

              <div className="mb-6 flex flex-col gap-10 sm:flex-row sm:gap-6">
                <CustomButton
                  bgGradientStart="#FF7714"
                  bgGradientEnd="#FFCF59"
                  borderRadius="full"
                  textColor="white"
                >
                  Join Course
                </CustomButton>
                <div className="flex flex-row gap-3 items-center sm:only:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light p-3 text-sm font-medium text-white transition hover:bg-blue-darkBlue focus:outline-none "
                  >
                    <BsFillPlayFill size={25} />
                  </a>
                  <span className="font-bold text-Inter capitalize">
                    see how it works?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
