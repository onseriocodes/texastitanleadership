import React from "react";
import man1 from "../assets/man1.svg";

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive and dynamic websites with modern technologies.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Create feature-rich mobile applications for Android and iOS.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive user interfaces and seamless experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Optimize online presence and boost growth through SEO and marketing.",
    icon: "📈",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurServices = () => {
  return (
    <>
      <section className="myHero py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Our Services at Texas Titan Leadership Development
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              At Texas Titan Leadership Development, we provide tailored
              financial solutions to help individuals and families achieve
              financial security, build wealth, and protect their futures. Our
              services go beyond traditional financial planning—we offer
              innovative life insurance strategies that allow you to maximize
              your benefits while living.
            </p>
          </div>

          {/* Right Side: Placeholder Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-xl overflow-hidden">
              {/* Replace the empty div below with an <img> tag or background image */}
              <img
                src={man1}
                alt="Insurance team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Living Benefits
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Imagine having a life insurance policy that doesn’t just protect
              your loved ones after you’re gone—but one that can{" "}
              <b>help you while you're still alive.</b> With{" "}
              <b>Living Benefits</b> , you can access up to{" "}
              <b>100% of your death benefit</b> if you are diagnosed with a
              <b>critical, chronic, or terminal illness</b>. Instead of
              struggling financially during a health crisis, you can use your
              policy to:
            </p>

            <ul>
              <ul>
                {" "}
                ✔ Cover medical expenses or treatments not covered by insurance{" "}
              </ul>
              <ul>✔ Pay daily living expenses if you're unable to work</ul>
              <ul> ✔Avoid depleting your savings or retirement funds </ul>
            </ul>
            <br />
            <p>
              {" "}
              With modern life insurance with Living Benefits, you don’t have to
              worry about becoming a financial burden to your family. Your life
              insurance is there for you when you need it most.
            </p>

            <p className="text-lg text-gray-600">
              Join thousands who trust us to provide peace of mind through
              flexible options and personalized coverage. Our mission is to help
              you prepare for tomorrow while living confidently today.
            </p>
          </div>
        </section>

        {/* IUL */}
        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              The Power of IUL (Indexed Universal Life)
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              The IUL (Indexed Universal Life) is a{" "}
              <b>2-in-1 life insurance policy</b> that combines financial
              protection with wealth-building. This powerful financial tool
              gives you:
            </p>

            <ul className="space-y-4">
              <li>
                ✔ <b>Flexible contributions</b> – Adjust your savings based on
                your income
              </li>
              <li>
                ✔ <b>Cash value growth</b> – Earn market-linked interest with{" "}
                <b>NO risk of market loss</b>
              </li>
              <li>
                ✔ <b>Tax-free access</b> – Use your policy funds without
                penalties or taxes
              </li>
            </ul>

            <br />

            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💡 What Can You Use an IUL For?
            </h2>

            <ul className="space-y-3">
              <li>💍 A wedding fund</li>
              <li>🏡 A down payment on a home</li>
              <li>🚗 Buying a car</li>
              <li>🚀 Starting a business</li>
              <li>
                🏖 <b>Supplementing your retirement</b> (Enjoy tax-free income in
                retirement!)
              </li>
            </ul>

            <br />

            <p className="text-xl text-gray-700">
              This is one of the most powerful financial tools available
              today—an insurance policy that protects your family while helping
              you build wealth at the same time.
            </p>

            <p className="text-lg text-gray-600 mt-6">
              Join thousands who trust us to provide peace of mind through
              flexible options and personalized coverage. Our mission is to help
              you prepare for tomorrow while living confidently today.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              👶 The Million Dollar Baby Account – Securing Your Child’s Future
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              The Million Dollar Baby Account is an{" "}
              <b>IUL designed specifically for children</b>, allowing parents to
              lock in their child’s health and age early. This policy gives them
              access to all the benefits of an IUL while securing their
              financial future from a young age.
            </p>

            <ul className="space-y-4">
              <li>
                ✔ <b>Grows Cash Value</b> – Your child will have a financial
                foundation for life
              </li>
              <li>
                ✔ <b>Locked-In Rates & Health</b> – Get a policy now while your
                child is young and healthy
              </li>
              <li>
                ✔ <b>Future-Proof Their Life Goals</b> – They can use the funds
                for college, buying a home, or starting a business
              </li>
            </ul>

            <br />

            <p className="text-xl text-gray-700">
              With the Million Dollar Baby strategy, you're{" "}
              <b>
                setting your child up for generational wealth and financial
                independence
              </b>
              .
            </p>
          </div>
        </section>
        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              📞 Don’t Miss Out – See If You Qualify!
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              At <b>Texas Titan Leadership Development</b>, we help individuals
              and families make smart financial decisions that create long-term
              security and wealth. Schedule a <b>free consultation</b> today
              with one of our licensed financial professionals to see if you
              qualify for one of these powerful financial strategies!
            </p>

            <ul className="space-y-4 text-xl text-gray-700">
              <li>
                🔹 <b>Protect your future.</b>
              </li>
              <li>
                🔹 <b>Build your wealth.</b>
              </li>
              <li>
                🔹 <b>Secure your legacy.</b>
              </li>
            </ul>

            <br />

            <p className="text-lg text-gray-600">
              Don’t miss this opportunity to take control of your financial
              future. Get the guidance you need to protect what matters most.
            </p>
          </div>
        </section>

        {/* <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          
        </div>
        </section> */}
      </section>
    </>
  );
};

export default OurServices;
