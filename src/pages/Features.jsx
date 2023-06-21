import { BiHeadphone, BiFileFind, BiRevision } from "react-icons/bi";
import { BsAlarm } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { RiRefund2Line } from "react-icons/ri";
import SmallCard from "../components/cards/SmallCard";

const Features = () => {
  return (
    <section id="features" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl px-8 sm:px-0 py-14 sm:py-28">
        <div className="">
          <div className="mb-16 flex flex-col gap-7">
            <h3 className="text-center uppercase text-[#D7A74A] text-[19px] font-bold font-Inter">
              Features
            </h3>
            <div className="">
              <h3 className="text-center text-xl mt-3 font-semibold font-Inter sm:text-[44px] capitalize sm:leading-[27px]">
                some <strong>features</strong> that make us{" "}
                <strong>different</strong>
              </h3>
            </div>
            <p className="text-center mt-3 font-semibold font-Inter sm:leading-[27px]">Urdoer is focused on ensuring to meet the needs of the <br className="hidden sm:block"></br> students around the globe for their assignments.</p>
          </div>

          <div className="">
            <div className="flex items-center justify-center gap-4 flex-wrap sm:justify-center sm:gap-6 sm:items-center">
              <SmallCard
                icon={<BiHeadphone size={28} />}
                bgColor="bg-pink-darkPink"
                title="24/7 support"
                iconColor="white"
              />
              <SmallCard
                icon={<BsAlarm size={28} />}
                bgColor="bg-gradient-to-r from-pink-darkPink to-blue-light"
                title="On time delivery"
                iconColor="white"
              />
              <SmallCard
                icon={<CiDiscount1 size={30} />}
                bgColor="bg-green-dark"
                title="Competitive pricing"
                iconColor="white"
              />
              <SmallCard
                icon={<BiFileFind size={28} />}
                bgColor="bg-pink-hotPink"
                title="Plagraism free"
                iconColor="white"
              />
              <SmallCard
                icon={<RiRefund2Line size={28} />}
                title="Refundable"
                iconColor="white"
                bgColor="bg-violet-dark"
              />
              <SmallCard
                icon={<BiRevision size={28} />}
                bgColor="bg-green-dark"
                title="Unilimited revision"
                iconColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
