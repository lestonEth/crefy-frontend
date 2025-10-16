import { useState, useEffect } from 'react'

function PassportDashboard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [isPageTurning, setIsPageTurning] = useState(false)

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      setIsFlipped(true)
    }, 1000)

    return () => {
      clearTimeout(flipTimer)
    }
  }, [])

  const handlePageTurn = () => {
    if (isPageTurning) return
    
    setIsPageTurning(true)
    
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % 3)
      setIsPageTurning(false)
    }, 600)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center scale-75 sm:scale-90 lg:scale-100">
      {/* Left side - Stats Card */}
      <div className="absolute left-2 lg:left-8 top-1/2 transform -translate-y-1/2">
        <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 shadow-2xl w-[260px] sm:w-[320px] border border-gray-200">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
            <span className="text-white text-xl lg:text-2xl">🛂</span>
          </div>
          <h3 className="text-gray-900 font-bold text-lg lg:text-xl mb-1 lg:mb-2 text-center">Digital Passport</h3>
          <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 text-center">Soulbound Identity Token</p>
          
          <div className="space-y-2 lg:space-y-3">
            {[
              { attribute: 'Reputation Score', value: '847', icon: '⭐' },
              { attribute: 'dApps Connected', value: '12', icon: '🔗' },
              { attribute: 'Identity Age', value: '2.1y', icon: '📅' },
              { attribute: 'Trust Level', value: 'Verified', icon: '✅' }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-gray-50 rounded-lg p-2 lg:p-3 border border-gray-200">
                <div className="flex items-center gap-1 lg:gap-2">
                  <span className="text-base lg:text-lg">{item.icon}</span>
                  <span className="text-gray-900 text-xs lg:text-sm font-medium">{item.attribute}</span>
                </div>
                <span className="text-green-600 text-xs lg:text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Animated Passport Book */}
      <div className="absolute right-2 lg:right-8 top-1/2 transform -translate-y-1/2">
        <div className="relative" style={{ perspective: '1200px' }}>
          {/* Book Container */}
          <div className={`relative w-48 h-64 lg:w-64 lg:h-80 transition-transform duration-1000 ${isFlipped ? 'rotate-y-0' : 'rotate-y-25'}`}>
            
            {/* Book Cover - Front */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-700 rounded-lg lg:rounded-lg shadow-2xl border-2 border-yellow-400 transform-style-3d transform-origin-left transition-transform duration-1000 z-30"
                 style={{ transform: isFlipped ? 'rotateY(-160deg)' : 'rotateY(0deg)' }}>
              
              <div className="absolute inset-1 border border-yellow-300 rounded-md"></div>
              
              <div className="absolute top-6 lg:top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm lg:text-lg font-bold">CR</span>
                </div>
              </div>

              <div className="absolute top-20 lg:top-28 left-1/2 transform -translate-x-1/2 text-center">
                <h2 className="text-white text-sm lg:text-lg font-bold mb-1">DIGITAL PASSPORT</h2>
                <p className="text-yellow-200 text-xs">Crefy Identity Protocol</p>
              </div>

              <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-yellow-300 text-xs mb-1 lg:mb-2">Soulbound • Immutable</div>
                <div className="flex justify-center gap-1">
                  {['🔒', '🌐', '⚡'].map((icon, idx) => (
                    <span key={idx} className="text-white text-xs">{icon}</span>
                  ))}
                </div>
              </div>

              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-900 to-purple-800"></div>
            </div>

            {/* Pages Container */}
            <div className="absolute inset-0 z-20 transform-style-3d">
              
              {/* Current Page - Right Side */}
              <div className={`absolute inset-0 bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden transform-style-3d transition-transform duration-600 ease-in-out ${
                isPageTurning ? 'rotate-y-[-160deg]' : 'rotate-y-0'
              }`} style={{ transformOrigin: 'left center', zIndex: isPageTurning ? 15 : 20 }}>
                <div className="h-full p-4 lg:p-6 bg-white">
                  {currentPage === 0 && <Page1Content />}
                  {currentPage === 1 && <Page2Content />}
                  {currentPage === 2 && <Page3Content />}
                  
                  <div 
                    className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors z-10"
                    onClick={handlePageTurn}
                  >
                    <span className="text-gray-600 text-xs lg:text-sm">→</span>
                  </div>

                  <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {[0, 1, 2].map((page) => (
                      <div
                        key={page}
                        className={`w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full ${
                          page === currentPage ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-r from-gray-300 to-gray-100"></div>
              </div>

              {/* Next Page - Left Side (becomes visible during turn) */}
              <div className={`absolute inset-0 bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden transform-style-3d transition-all duration-600 ease-in-out ${
                isPageTurning ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}>
                <div className="h-full p-4 lg:p-6 bg-white">
                  {currentPage === 0 && <Page2Content />}
                  {currentPage === 1 && <Page3Content />}
                  {currentPage === 2 && <Page1Content />}
                </div>
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-r from-gray-300 to-gray-100"></div>
              </div>

            </div>

            {/* Book Cover - Back */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-800 rounded-lg lg:rounded-lg shadow-2xl border-2 border-yellow-400 transform-style-3d transform-origin-left rotate-y-180 z-0">
              <div className="absolute inset-1 border border-yellow-300 rounded-md"></div>
              <div className="absolute top-6 lg:top-8 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-yellow-200 text-xs mb-1 lg:mb-2">CREDENTIALS VERIFIED</div>
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-sm lg:text-lg">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Page Content Components
const Page1Content = () => (
  <div className="text-center h-full flex flex-col justify-center">
    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
      <span className="text-white text-lg lg:text-xl">👤</span>
    </div>
    <h3 className="text-gray-900 font-bold text-sm lg:text-md mb-2 lg:mb-3">Identity Profile</h3>
    <div className="space-y-1 lg:space-y-2 text-left text-xs lg:text-sm">
      <div className="flex justify-between py-1 border-b border-gray-200">
        <span className="text-gray-600">Name:</span>
        <span className="text-gray-900 font-medium">Alex Chen</span>
      </div>
      <div className="flex justify-between py-1 border-b border-gray-200">
        <span className="text-gray-600">ENS:</span>
        <span className="text-gray-900 font-medium">alex.crefy.eth</span>
      </div>
      <div className="flex justify-between py-1 border-b border-gray-200">
        <span className="text-gray-600">Member Since:</span>
        <span className="text-gray-900 font-medium">Jan 2023</span>
      </div>
    </div>
  </div>
)

const Page2Content = () => (
  <div className="text-center h-full flex flex-col justify-center">
    <h3 className="text-gray-900 font-bold text-sm lg:text-md mb-3 lg:mb-4">Verification Status</h3>
    <div className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
      {[
        { status: 'KYC Verified', verified: true },
        { status: 'Biometric Scan', verified: true },
        { status: 'Social Recovery', verified: true },
        { status: 'dApp Reputation', verified: false }
      ].map((item, idx) => (
        <div key={idx} className="flex justify-between items-center py-1">
          <span className="text-gray-700">{item.status}</span>
          <span className={`text-xs px-1.5 py-0.5 lg:px-2 lg:py-1 rounded ${
            item.verified 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {item.verified ? '✓' : '⋯'}
          </span>
        </div>
      ))}
    </div>
  </div>
)

const Page3Content = () => (
  <div className="text-center h-full flex flex-col justify-center">
    <h3 className="text-gray-900 font-bold text-sm lg:text-md mb-3 lg:mb-4">Web3 Footprint</h3>
    <div className="grid grid-cols-2 gap-1 lg:gap-2 text-xs">
      <div className="bg-blue-50 p-1.5 lg:p-2 rounded border border-blue-100">
        <div className="text-blue-600 font-bold text-base lg:text-lg">12</div>
        <div className="text-gray-600">dApps</div>
      </div>
      <div className="bg-green-50 p-1.5 lg:p-2 rounded border border-green-100">
        <div className="text-green-600 font-bold text-base lg:text-lg">47</div>
        <div className="text-gray-600">Transactions</div>
      </div>
      <div className="bg-purple-50 p-1.5 lg:p-2 rounded border border-purple-100">
        <div className="text-purple-600 font-bold text-base lg:text-lg">3</div>
        <div className="text-gray-600">NFTs</div>
      </div>
      <div className="bg-orange-50 p-1.5 lg:p-2 rounded border border-orange-100">
        <div className="text-orange-600 font-bold text-base lg:text-lg">847</div>
        <div className="text-gray-600">Reputation</div>
      </div>
    </div>
  </div>
)

export default PassportDashboard