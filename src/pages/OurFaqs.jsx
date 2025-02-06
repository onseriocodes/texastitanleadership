import React, { useState } from "react";

const OurFaqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What services does Texas Titan Leadership Development offer?",
      answer:
        "Life insurance is a contract with an insurance company that provides financial protection for your loved ones in case of your passing. It ensures they are financially secure and can cover expenses such as mortgages, education, and daily living costs.",
    },
    {
      question: "Who can benefit from your services?",
      answer:
        "Living benefits allow policyholders to access a portion of their life insurance benefits while they are still alive, typically in the case of serious illness or injury. These benefits help cover medical expenses or lost income.",
    },
    {
      question: " How do I schedule a consultation?",
      answer:
        "A 401k plan is a retirement savings plan offered by employers. Employees can contribute a portion of their salary to the plan, and in many cases, employers match contributions up to a certain percentage. The contributions grow tax-deferred until withdrawal during retirement.",
    },
    {
      question: "How do I know which policy is right for me?",
      answer:
        "Choosing the right policy depends on your individual needs, financial goals, and family situation. We recommend speaking to one of our insurance advisors who can provide personalized guidance tailored to your requirements.",
    },
    {
      question: "Can I change my policy later if my needs change?",
      answer:
        "Yes, most insurance policies offer flexibility to adjust coverage as your life circumstances change. It's important to review your policy regularly and update it when major life events occur.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-gray-500">
                  {openQuestion === index ? "-" : "+"}
                </span>
              </div>
              {openQuestion === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFaqs;
