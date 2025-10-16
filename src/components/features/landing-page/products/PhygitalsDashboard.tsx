function PhygitalsDashboard() {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">📱</span>
          </div>
          <h3 className="text-gray-900 font-bold text-xl mb-2">Crefy Phygitals</h3>
          <p className="text-gray-600 text-sm mb-4">
            Bridge the physical and digital worlds with NFC-enabled asset tokenization
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
              <div className="text-purple-600 font-bold text-lg">NFT</div>
              <div className="text-gray-600 text-xs">Digital Twin</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <div className="text-blue-600 font-bold text-lg">NFC</div>
              <div className="text-gray-600 text-xs">Physical Link</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
              <div className="text-green-600 font-bold text-lg">Dynamic</div>
              <div className="text-gray-600 text-xs">Live Data</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
              <div className="text-orange-600 font-bold text-lg">Redeem</div>
              <div className="text-gray-600 text-xs">Seamless Use</div>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all">
            Learn More
          </button>
        </div>
      </div>
    )
  }
  
  export default PhygitalsDashboard