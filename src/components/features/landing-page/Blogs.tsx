import { useState } from 'react';
import { ArrowUpRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';

function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What is Web3 and how does it differ from Web2?",
      answer: "Web3 represents the next evolution of the internet, built on decentralized technologies like blockchain. Unlike Web2 where data is controlled by central corporations, Web3 gives users ownership of their data and digital assets through decentralized networks and protocols."
    },
    {
      question: "How do blockchain networks ensure security?",
      answer: "Blockchain networks use cryptographic principles, consensus mechanisms (like Proof of Work or Proof of Stake), and decentralized validation to ensure security. Each transaction is verified by multiple nodes, making it extremely difficult to alter historical data without network consensus."
    },
    {
      question: "What are smart contracts and how do they work?",
      answer: "Smart contracts are self-executing contracts with terms directly written into code. They automatically execute when predetermined conditions are met, running on blockchain networks without need for intermediaries, enabling trustless transactions and automated processes."
    },
    {
      question: "How can I get started with Web3 development?",
      answer: "Start by learning blockchain fundamentals, then move to smart contract development with Solidity for Ethereum or other blockchain-specific languages. Familiarize yourself with Web3 libraries, development frameworks like Hardhat or Truffle, and test your contracts on testnets before deployment."
    },
    {
      question: "What is decentralized storage and why is it important?",
      answer: "Decentralized storage systems like IPFS, Arweave, and Filecoin distribute data across multiple nodes instead of central servers. This enhances data resilience, prevents censorship, reduces single points of failure, and gives users control over their data."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 py-20 lg:py-32">
        {/* Header */}
        <div className="pb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center rotate-12">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm tracking-[0.4em] uppercase text-purple-600 font-bold">
              Blog
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="text-7xl lg:text-9xl font-black mb-6 leading-[0.9] bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 bg-clip-text text-transparent pb-5">
                Web3<br/>Insights
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-2xl text-gray-700 leading-relaxed">
                Technical deep-dives, product updates, and the future of decentralized infrastructure
              </p>
              <button className="group flex items-center gap-3 text-purple-600 font-bold text-lg hover:text-purple-700 transition-colors">
                Explore all articles
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="py-20 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-300"
                >
                  <button
                    className="w-full px-6 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Still have questions?
              </p>
              <button className="group inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-colors">
                Contact Support
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;