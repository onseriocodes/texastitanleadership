import React from "react";
import us2 from "../assets/us2.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="myHero py-16 px-8 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-xl text-gray-700 mb-6">
              At Texas Titan Leadership Development, we empower individuals and
              families to achieve financial security.
            </p>
          </div>

          {/* Right Side: Placeholder Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-xl overflow-hidden">
              {/* Replace the empty div below with an <img> tag or background image */}
              <img
                src={us2}
                alt="Insurance team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
            {/* <p className="text-xl text-gray-700 mb-6"> */}
            <p>
              For over 15 years, I dedicated my life to the healthcare industry
              as a registered nurse with a BSN. I loved my patients and the
              impact I made, but as a mother of three, I realized something
              important—I wanted to be the greatest influence in my children’s
              lives, not a stranger. My husband and I knew we wanted to build
              something that would outlive us, something we could pass down to
              our children.
            </p>
            <br />

            <p>
              Working as a nurse, no matter how hard I worked, I couldn’t pass
              down my job to my kids. But in 2023, Texas Titan Leadership
              Development was born, giving us the opportunity to not only build
              wealth but to create a legacy.{" "}
            </p>
            <br />

            <p>
              Today, Texas Titans serves all 50 states, helping families secure
              their financial future through retirement planning, life
              insurance, and wealth-building strategies. But our mission doesn’t
              stop there. We mentor and develop self-driven, motivated
              individuals, providing group training and one-on-one coachingto
              help them become the best versions of themselves—personally,
              professionally, and financially.
            </p>

            <br />

            <p>
              With over 20 agents and 11 licensed professionals, we are on a
              mission to build 100 licensed and appointed agents, helping them
              multiply their income and turn their yearly earnings into their
              monthly earnings. If you’re looking for financial security or a
              business opportunity with no income cap, join us. Together, we
              build. Together, we grow. Together, we win.Welcome to Texas Titan
              Leadership Development.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
{
  /* <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Quick Overview – What Texas Titans Do
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            At Texas Titan Leadership Development, we empower individuals and
            families to achieve financial security, build generational wealth,
            and create a lasting legacy. We specialize in retirement planning,
            life insurance, college savings, and asset protection, ensuring
            financial peace of mind. Beyond financial services, we provide
            mentorship and leadership development, equipping driven individuals
            with the tools to build uncapped income streams and establish a
            business they can pass down for generations.
          </p>
          <p className="text-lg text-gray-600">
            Join thousands who trust us to provide peace of mind through
            flexible options and personalized coverage. Our mission is to help
            you prepare for tomorrow while living confidently today.
          </p>
        </div>
      </section> */
}
