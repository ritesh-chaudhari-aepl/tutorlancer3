import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import bg from "../assets/banner3.svg";
import { BsPlayFill } from "react-icons/bs";
import CustomButton from "../components/buttons/CustomButton";

const About = () => {
  // const bgstyles = {
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "10%",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  // };
  const scrollToContact=(pos)=>{
    let value=document.getElementById(pos)
    value.scrollIntoView({behavior:'smooth',block:'center'})
  }
  const bg1 = {
    backgroundImage: `url(${p1})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'250px'
  };

  const bg2 = {
    backgroundImage: `url(${p2})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'250px'
  };

  const aboutbg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'auto'
  };

  return (
    <section id="about" className="bg-primaryWhite" style={aboutbg}>
      <div
        className="mx-auto max-w-screen-2xl px-4 py-10 sm:py-20 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center gap-2 sm:relative lg:mr-16">
            <div className="relative h-full w-72" style={bg1}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-16 sm:w-16 bg-gradient-to-r from-pink-darkPink to-blue-light flex justify-center items-center rounded-full">
                <BsPlayFill color="white" size={26} />
              </div>
            </div>

            {/* second image */}
            <div className="relative lg:absolute lg:left-52 lg:top-40 xl:top-40 xl:left-80 2xl:left-96 h-full w-72" style={bg2}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-16 sm:w-16 bg-gradient-to-r from-pink-darkPink to-blue-light flex justify-center items-center rounded-full">
                <BsPlayFill color="white" size={26} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-base font-bold font-Inter uppercase text-[#D7A74A] sm:text-[19px]">
              About Us
            </p>

            <h3 className="font-medium capitalize font-Nunito leading-[30px] xl:leading-[66px] xl:text-[44px] text-2xl">
              <strong>
                {" "}
                talented and highly <br /> qualified{" "}
              </strong>
              tutors to serve
              <br /> you for online help.
            </h3>

            <div className="py-6 lg:py-8">
              <article className="text-black">
                <p>
                Your premier destination for top-notch assignment assistance. Our company is dedicated to providing exceptional academic support to students like you, ensuring your success and helping you achieve top grades in your coursework.
                 Payments are secured through RazorPay. Powered by Razorpay.

                </p>
              </article>
            </div>
            <CustomButton
              bgGradientStart="#FF7714"
              bgGradientEnd="#FFCF59"
              borderRadius="full"
              textColor="white"
              onClick={()=>scrollToContact('contact')}
            >
              Learn More
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
