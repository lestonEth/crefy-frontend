import { useState } from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

        {/* Featured Post - Bold & Dynamic */}
        {/* <div 
          className="mb-32 group cursor-pointer"
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 p-12 lg:p-16 text-white">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span className="text-sm font-bold">FEATURED</span>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                  Building the Next Generation of Web3
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Comprehensive tools empowering developers to create secure, scalable decentralized applications.
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-black text-lg">
                      CT
                    </div>
                    <div>
                      <div className="font-bold">Crefy Team</div>
                      <div className="text-sm text-white/70">Dec 18, 2024</div>
                    </div>
                  </div>
                </div>
                
                <button className={`inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all ${hoveredCard === 0 ? 'gap-5 scale-105' : ''}`}>
                  Read Article
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-3xl"></div>
                <div className={`relative text-[200px] transition-transform duration-700 ${hoveredCard === 0 ? 'scale-110 rotate-12' : ''}`}>
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default BlogSection;