import { useState, useEffect } from 'react';
import { Play, Calendar, ArrowRight } from 'lucide-react';

function HeroSection() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-xl">⚡</span>
          </div>
          
          <div className="text-sm text-gray-600 font-medium">
            Powered by 
            <a href="https://buidlabz.com" className='text-purple-600'> buidlabz </a>
            Infrastructure
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            Complete Web3 Infrastructure For Your dApps
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Build next-generation decentralized applications with seamless wallet integration, 
            secure identity verification, and real-world asset tokenization. Our platform handles 
            the complexity so you can focus on creating amazing user experiences. Scale your dApp 
            with enterprise-grade security and multi-chain support.
          </p>
          
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-7 py-3.5 rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300">
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Mockup */}
        <div className="relative h-[600px] lg:h-[700px]">
          {/* Wallet Connect Card */}
          <div className="absolute top-[10%] left-[5%] w-60 bg-white rounded-2xl p-5 shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="h-16 bg-gradient-to-b from-purple-200 to-indigo-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-2xl">👛</span>
            </div>
            <div className="text-xs text-gray-400">Wallet connected to...</div>
          </div>

          {/* Crefy ID Card */}
          <div className="absolute top-[15%] right-0 w-52 bg-white rounded-2xl p-4 shadow-xl hover:-translate-y-1 transition-transform duration-300 z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ID
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">Crefy ID</div>
                <div className="text-[10px] text-gray-400">Identity verified...</div>
              </div>
            </div>
            <div className="bg-gray-900 text-white text-[11px] px-3 py-2 rounded-lg mb-2">
              KYC Completed Successfully
            </div>
            <button className="text-[11px] border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
              View Details
            </button>
          </div>

          {/* Main Dashboard Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white rounded-2xl p-5 shadow-2xl hover:-translate-y-[45%] transition-transform duration-300 z-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center text-3xl">
                  🔗
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Crefy Connect</h3>
                <p className="text-xs text-gray-500">Multi-chain wallet ready...</p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 my-4"></div>
            
            <div className="text-sm font-semibold text-gray-900 mb-2">Active Session</div>
            <div className="text-xs text-gray-600 mb-3">
              Connected to 3 dApps<br />
              Gasless transactions enabled...
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2.5 rounded-full font-medium text-sm hover:shadow-lg transition-all">
              Manage Wallets
            </button>
            
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>08 Jan 2024</span>
              <span className="ml-auto text-gray-400">View analytics →</span>
            </div>
          </div>

          {/* Asset Tokenization Card */}
          <div className="absolute bottom-[15%] left-[10%] w-64 bg-white rounded-2xl p-4 shadow-xl hover:-translate-y-1 transition-transform duration-300 z-10">
            <div className="text-xs text-gray-500 mb-2">Crefy Phygitals</div>
            <div className="text-sm font-medium text-gray-900 mb-3">
              Physical asset tokenized successfully...
            </div>
            <div className="text-[11px] text-gray-400">NFT #4225 • 2 hours ago</div>
          </div>

          {/* Stats Card */}
          <div className="absolute top-[40%] right-[-3%] w-48 bg-white rounded-2xl p-4 shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="text-xs font-semibold text-gray-900 mb-1">Platform Stats</div>
            <div className="text-[10px] text-gray-400 mb-3">Last 30 days</div>
            <div className="flex items-end gap-2 h-20">
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
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm z-30 whitespace-nowrap">
            Secured 10+ dApps! 🚀
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection