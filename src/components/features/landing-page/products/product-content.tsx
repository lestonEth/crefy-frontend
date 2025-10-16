import ConnectDashboard from './ConnectDashboard'
import IDDashboard from './IDDashboard'
import PassportDashboard from './PassportDashboard'
import PhygitalsDashboard from './PhygitalsDashboard'

interface ProductContentProps {
  activeTab: string
}

function ProductContent({ activeTab }: ProductContentProps) {
  const content = {
    connect: {
      title: 'CREFY CONNECT',
      description: 'Seamless multi-chain wallet integration with Account Abstraction, ENS support, and gasless transactions. Provide your users with the smoothest Web3 onboarding experience.',
      dashboard: <ConnectDashboard />
    },
    id: {
      title: 'CREFY ID',
      description: 'Enterprise-grade KYC/AML verification with privacy-first design. Global compliance, instant verification, and zero-knowledge proofs to protect user privacy.',
      dashboard: <IDDashboard />
    },
    passport: {
      title: 'CREFY PASSPORT',
      description: 'Portable digital identity that works across all dApps. Soulbound tokens, user-controlled data, and seamless cross-platform identity management.',
      dashboard: <PassportDashboard />
    },
    phygitals: {
      title: 'CREFY PHYGITALS',
      description: 'Bridge the physical and digital worlds. Tokenize real-world assets with NFC technology, dynamic NFTs, and seamless redemption experiences.',
      dashboard: <PhygitalsDashboard />
    }
  }

  const activeContent = content[activeTab as keyof typeof content]

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 min-h-[800px] lg:min-h-[600px]">
        <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 lg:mb-6">
            {activeContent.title}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 lg:mb-8">
            {activeContent.description}
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 lg:px-8 lg:py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg w-full lg:w-fit mx-auto lg:mx-0">
            View Documentation
          </button>
        </div>

        <div className="relative order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-auto">
          {activeContent.dashboard}
        </div>
      </div>
    </div>
  )
}

export default ProductContent