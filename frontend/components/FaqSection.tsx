import { useState } from 'react';

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  }

  const faqs = [
    {
      question: "How does the platform work in restricted countries?",
      answer: "Our platform partners with local and international ecommerce sites and manufacturers to bypass regional restrictions."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, our platform is decentralized, and we prioritize the security of your transactions. Payments are made using Aptos coins through supported wallets like Petra."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We only accept payments using Aptos coins through wallets such as Petra. Credit/debit cards and other traditional payment methods are not supported."
    }
  ];

  return (
    <section className='p-16 md:flex md:space-x-6 bg-gray-50'>
      <div className='hidden md:flex md:w-1/3 items-center justify-center'>
        <img
          src='/images/faq.png'
          alt='FAQ Image'
          width={500}
          height={500}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <div className='md:w-2/3'>
        <h2 className='text-2xl font-bold mb-6'>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className='mb-4 px-6 py-4 bg-white'>
            <button
              onClick={() => toggleFaq(index)}
              className='flex justify-between items-center w-full py-2 text-left text-lg font-medium focus:outline-none'
            >
              <span>{faq.question}</span>
              <span>{openIndex == index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className='mt-2 text-gray-600'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
