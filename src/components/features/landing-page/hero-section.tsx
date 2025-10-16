import { useState, useEffect } from 'react';
import { Play, Calendar, ArrowRight } from 'lucide-react';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-lg sm:text-xl">⚡</span>
            </div>
            
            <div className="text-xs sm:text-sm text-gray-600 font-medium">
              Powered by 
              <a href="https://buidlabz.com" className='text-purple-600 hover:text-purple-700'> buidlabz </a>
              Infrastructure
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            Complete Web3 Infrastructure For Your dApps
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Build next-generation decentralized applications with seamless wallet integration, 
            secure identity verification, and real-world asset tokenization. Our platform handles 
            the complexity so you can focus on creating amazing user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
              View Demo
            </button>
          </div>
        </div>

        {/* Right Mockup */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] order-1 lg:order-2">
          {/* Main Dashboard Card - Centered and prominent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl hover:-translate-y-[45%] transition-transform duration-300 z-20">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                  🔗
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Play className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-white" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Crefy Connect</h3>
                <p className="text-xs text-gray-500">Multi-chain wallet ready...</p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 my-3 sm:my-4"></div>
            
            <div className="text-sm font-semibold text-gray-900 mb-2">Active Session</div>
            <div className="text-xs text-gray-600 mb-3">
              Connected to 3 dApps<br />
              Gasless transactions enabled...
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2.5 rounded-full font-medium text-sm hover:shadow-lg transition-all">
              Manage Wallets
            </button>
            
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-600">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>08 Jan 2024</span>
              <span className="ml-auto text-gray-400 text-[10px] sm:text-xs">View analytics →</span>
            </div>
          </div>

          {/* Wallet Connect Card - Top Left */}
          <div className="absolute top-[5%] left-[2%] sm:top-[10%] sm:left-[5%] w-48 sm:w-60 bg-white rounded-2xl p-4 sm:p-5 shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="h-12 sm:h-16 bg-gradient-to-b from-purple-200 to-indigo-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-xl sm:text-2xl">👛</span>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-400">Wallet connected to...</div>
          </div>

          {/* Crefy ID Card - Top Right */}
          <div className="absolute top-[8%] right-[2%] sm:top-[15%] sm:right-0 w-44 sm:w-52 bg-white rounded-2xl p-3 sm:p-4 shadow-xl hover:-translate-y-1 transition-transform duration-300 z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                ID
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">Crefy ID</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400">Identity verified...</div>
              </div>
            </div>
            <div className="bg-gray-900 text-white text-[10px] sm:text-[11px] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg mb-2">
              KYC Completed
            </div>
            <button className="text-[10px] sm:text-[11px] border border-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-gray-50 transition-colors w-full">
              View Details
            </button>
          </div>

          {/* Asset Tokenization Card - Bottom Left */}
          <div className="absolute bottom-[12%] left-[5%] sm:bottom-[15%] sm:left-[10%] w-52 sm:w-64 bg-white rounded-2xl p-3 sm:p-4 shadow-xl hover:-translate-y-1 transition-transform duration-300 z-10">
            <div className="text-[10px] sm:text-xs text-gray-500 mb-2">Crefy Phygitals</div>
            <div className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">
              Physical asset tokenized...
            </div>
            <div className="text-[9px] sm:text-[11px] text-gray-400">NFT #4225 • 2 hours ago</div>
          </div>

          {/* Stats Card - Bottom Right */}
          <div className="absolute bottom-[5%] right-[2%] sm:top-[40%] sm:right-[-3%] w-40 sm:w-48 bg-white rounded-2xl p-3 sm:p-4 shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="text-xs font-semibold text-gray-900 mb-1">Platform Stats</div>
            <div className="text-[9px] sm:text-[10px] text-gray-400 mb-2 sm:mb-3">Last 30 days</div>
            <div className="flex items-end gap-1 sm:gap-2 h-16 sm:h-20">
              {[30, 50, 40, 70, 90, 60].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-purple-200 to-indigo-200 rounded-t"
                  style={{
                    height: isVisible ? `${height}%` : '0%',
                    transition: `height 1s ease-out ${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Success Badge */}
          <div className="absolute bottom-[-5%] sm:bottom-[8%] left-1/2 -translate-x-1/2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg font-semibold text-xs sm:text-sm z-30 whitespace-nowrap">
            Secured 10+ dApps! 🚀
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;