function IDDashboard() {
    return (
      <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
        {/* Verification card */}
        <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-gradient-to-br from-green-800 to-green-900 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-2xl w-[240px] sm:w-[280px]">
          <div className="flex justify-between items-start mb-3 lg:mb-4">
            <div>
              <p className="text-green-300 text-xs mb-1">Identity Verification</p>
              <p className="text-green-400 text-xs">Level 3 Verified</p>
            </div>
            <div className="text-green-400 text-xs bg-green-700 px-2 py-0.5 lg:px-3 lg:py-1 rounded">Verified ✓</div>
          </div>
          
          {/* User info */}
          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm lg:text-base">ID</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm lg:text-base">Alex Chen</h3>
                <p className="text-green-300 text-xs">Verified: 2 days ago</p>
              </div>
            </div>
            
            {/* Verification steps */}
            <div className="space-y-2 lg:space-y-3">
              {[
                { step: 'Document Check', status: 'Verified', icon: '📄' },
                { step: 'Biometric Scan', status: 'Verified', icon: '👁️' },
                { step: 'Liveness Check', status: 'Verified', icon: '🎥' },
                { step: 'AML Screening', status: 'Verified', icon: '🛡️' }
              ].map((verification, idx) => (
                <div key={idx} className="flex items-center justify-between bg-green-700 rounded-lg p-1.5 lg:p-2">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <span className="text-base lg:text-lg">{verification.icon}</span>
                    <span className="text-white text-xs">{verification.step}</span>
                  </div>
                  <span className="text-green-400 text-xs">✓</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compliance badges */}
          <div className="mt-3 lg:mt-4 bg-green-700 rounded-lg p-2 lg:p-3">
            <h4 className="text-white text-xs lg:text-sm font-bold mb-1 lg:mb-2">Compliance Status</h4>
            <div className="grid grid-cols-2 gap-1 lg:gap-2">
              {[
                { region: 'EU', status: 'GDPR ✓' },
                { region: 'US', status: 'FinCEN ✓' },
                { region: 'Global', status: 'KYC ✓' },
                { region: 'UK', status: 'FCA ✓' }
              ].map((compliance, idx) => (
                <div key={idx} className="text-center bg-green-600 rounded p-1">
                  <p className="text-white text-xs font-bold">{compliance.region}</p>
                  <p className="text-green-200 text-xs">{compliance.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Privacy features */}
        <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl w-[200px] sm:w-[240px]">
          <h3 className="text-white font-bold text-sm lg:text-base mb-2 lg:mb-3">Privacy Features</h3>
          <div className="space-y-1.5 lg:space-y-2">
            {[
              { feature: 'Zero-Knowledge Proofs', status: 'Active', icon: '🔒' },
              { feature: 'Data Encryption', status: 'AES-256', icon: '🗝️' },
              { feature: 'Selective Disclosure', status: 'Enabled', icon: '👁️' },
              { feature: 'Auto-Expiry', status: '30 days', icon: '⏰' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-1 lg:gap-2">
                  <span className="text-base lg:text-lg">{item.icon}</span>
                  <span className="text-gray-300 text-xs">{item.feature}</span>
                </div>
                <span className="text-green-400 text-xs">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Verification stats */}
        <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-green-800 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl w-[200px] sm:w-[240px]">
          <h3 className="text-white font-bold text-sm lg:text-base mb-2 lg:mb-3">Verification Stats</h3>
          <div className="space-y-2 lg:space-y-3">
            {[
              { metric: 'Success Rate', value: '99.7%' },
              { metric: 'Avg. Time', value: '47s' },
              { metric: 'Countries', value: '180+' },
              { metric: 'Fraud Prevented', value: '98.2%' }
            ].map((stat, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-gray-300 text-xs">{stat.metric}</span>
                <span className="text-white text-xs lg:text-sm font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Shield illustration */}
        <div className="absolute bottom-8 left-1/4 lg:bottom-12 lg:left-1/3 transform scale-75 lg:scale-100">
          <div className="relative">
            <div className="w-12 h-16 lg:w-16 lg:h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-xl lg:text-2xl">🛡️</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default IDDashboard