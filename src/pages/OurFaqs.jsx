import React, { useState } from "react";

const OurFaqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What services does Texas Titan Leadership Development offer?",
      answer:
        "We provide financial solutions including retirement planning, life insurance, college savings plans, wealth optimization, and asset protection.",
    },
    {
      question: "Who can benefit from your services?",
      answer:
        "Anyone looking to secure their financial future, whether it’s families, individuals, retirees, or entrepreneurs.",
    },
    {
      question: " How do I schedule a consultation?",
      answer:
        "Click the “Schedule a Free Consultation” button on our website or contact us via phone or email",
    },
    {
      question: "What is the best way to plan for retirement?",
      answer:
        "We offer customized strategies to help you retire comfortably, ensuring your savings last and remain protected from market loss",
    },
    {
      question: "How can I optimize my assets?",
      answer:
        "We help clients create financial strategies that protect their wealth from market downturns and unnecessary taxation.",
    },
    {
      question: "What does ‘protection from market loss’ mean?",
      answer:
        "We use financial vehicles that ensure your investments are shielded from major stock market fluctuations.",
    },
    {
      question: "How does life insurance help build generational wealth?",
      answer:
        "Life insurance provides a tax-free payout to your beneficiaries, ensuring financial security and creating a financial legacy.",
    },
    {
      question: "What’s the best way to save for my child’s education?",
      answer:
        "We offer customized college savings plans that allow your money to grow tax-free while protecting your investment.",
    },
    {
      question:
        "Do I need prior experience in finance to become a Texas Titan agent?",
      answer:
        "No experience is necessary! We provide training, mentorship, and all the resources needed to succeed.",
    },
    {
      question: "What is the income potential as an agent?",
      answer:
        "There’s no cap on earnings. Your income is based on your effort, team growth, and sales performance.",
    },
    {
      question: "How do I get started?",
      answer:
        "Visit our “Agent Opportunities” page and fill out the application form to get connected with a mentor.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-8 pt-25">
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
