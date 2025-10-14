import { useState } from 'react'

function ConnectDashboard() {
  const [activeCard, setActiveCard] = useState('dashboard')

  const handleCardClick = (cardId: string) => {
    setActiveCard(cardId)
  }

  const getCardStyle = (cardId: string) => {
    const baseStyle = "bg-white rounded-2xl p-6 shadow-xl border border-gray-200 transition-all duration-300 cursor-pointer"
    const activeStyle = "z-50 scale-105 shadow-2xl"
    const inactiveStyle = "opacity-90 hover:opacity-100"
    
    return `${baseStyle} ${activeCard === cardId ? activeStyle : inactiveStyle}`
  }

  const getPositionStyle = (cardId: string) => {
    switch (cardId) {
      case 'dashboard':
        return activeCard === 'dashboard' 
          ? "absolute top-8 left-8 w-[320px]" 
          : "absolute top-3 left-10 w-[320px]"
      case 'ens':
        return activeCard === 'ens'
          ? "absolute top-8 right-8 w-[280px]"
          : "absolute top-8 right-8 w-[280px]"
      case 'gasless':
        return activeCard === 'gasless'
          ? "absolute bottom-8 right-8 w-[280px]"
          : "absolute bottom-[-14%] right-0 w-[280px]"
      default:
        return ""
    }
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Click to view hand indicator */}
      {activeCard === 'dashboard' && (
        <div className="absolute top-20 left-24 z-50 flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-full animate-bounce">
          <span className="text-lg">👆</span>
          <span className="text-sm font-medium">Click to view</span>
        </div>
      )}

      {/* Main Dashboard Modal */}
      <div 
        className={`${getCardStyle('dashboard')} ${getPositionStyle('dashboard')}`}
        onClick={() => handleCardClick('dashboard')}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-gray-900 font-bold text-lg">user.crefy.eth</h3>
            <div className="flex items-center gap-2">
              <p className="text-gray-600 text-sm">0x1a2b3c4d5e6f7g8h9i0j</p>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-purple-200 text-sm">Total Balance</p>
              <h2 className="text-white text-2xl font-bold">$ 1,847.32</h2>
            </div>
            <div className="bg-white/20 rounded-lg px-2 py-1">
              <p className="text-white text-xs font-medium">Ethereum</p>
            </div>
          </div>
          <p className="text-purple-200 text-xs">≈ 0.854 ETH</p>
        </div>

        {/* Network Switch */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          <button className="flex-1 py-2 px-3 rounded-md bg-white shadow-sm text-gray-900 text-sm font-medium">
            Mainnet
          </button>
          <button className="flex-1 py-2 px-3 rounded-md text-gray-600 text-sm font-medium hover:text-gray-900">
            Sepolia
          </button>
        </div>

        {/* Tokens List */}
        <div className="space-y-3">
          <h4 className="text-gray-900 font-bold text-sm">Tokens</h4>
          {[
            { name: 'Ethereum', symbol: 'ETH', balance: '0.854', value: '$1,847.32', icon: '⧫' },
            { name: 'USD Coin', symbol: 'USDC', balance: '250.00', value: '$250.00', icon: '💵' },
            { name: 'Crefy Token', symbol: 'CRF', balance: '1,500', value: '$450.00', icon: '🪙' }
          ].map((token, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                  <span className="text-sm">{token.icon}</span>
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">{token.name}</p>
                  <p className="text-gray-500 text-xs">{token.balance} {token.symbol}</p>
                </div>
              </div>
              <p className="text-gray-900 text-sm font-medium">{token.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Claim ENS Name Card */}
      <div 
        className={`${getCardStyle('ens')} ${getPositionStyle('ens')}`}
        onClick={() => handleCardClick('ens')}
      >
        <div className="text-center mb-4">
          <h3 className="text-gray-900 font-bold text-lg mb-2">Claim ENS Name</h3>
          <p className="text-gray-600 text-sm">Get your custom .crefy.eth domain for free</p>
        </div>
        
        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-gray-900 text-sm font-medium mb-2">Available Names</p>
            <div className="flex flex-wrap gap-2">
              {['alex.crefy.eth', 'user.crefy.eth', 'wallet.crefy.eth'].map((name, idx) => (
                <span key={idx} className="text-blue-600 text-xs bg-blue-50 px-2 py-1 rounded border border-blue-100">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Claim Free ENS
          </button>
        </div>
      </div>

      {/* Gasless Transaction Card */}
      <div 
        className={`${getCardStyle('gasless')} ${getPositionStyle('gasless')}`}
        onClick={() => handleCardClick('gasless')}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold">Gasless Transaction</h3>
            <p className="text-gray-600 text-xs">Sign without paying gas fees</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Transaction</span>
              <span className="text-gray-900 font-medium">Swap ETH → USDC</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Amount</span>
              <span className="text-gray-900 font-medium">0.1 ETH</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Reject
            </button>
            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition-colors">
              Sign
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-gray-500 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Sponsored by Crefy • No gas fees</span>
        </div>
      </div>
    </div>
  )
}

export default ConnectDashboard