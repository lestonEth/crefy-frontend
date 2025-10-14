import React from 'react'

function IDDashboard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Verification card */}
      <div className="absolute top-8 left-8 bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-6 shadow-2xl w-[280px]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-green-300 text-xs mb-1">Identity Verification</p>
            <p className="text-green-400 text-xs">Level 3 Verified</p>
          </div>
          <div className="text-green-400 text-xs bg-green-700 px-3 py-1 rounded">Verified ✓</div>
        </div>
        
        {/* User info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">ID</span>
            </div>
            <div>
              <h3 className="text-white font-bold">Alex Chen</h3>
              <p className="text-green-300 text-xs">Verified: 2 days ago</p>
            </div>
          </div>
          
          {/* Verification steps */}
          <div className="space-y-3">
            {[
              { step: 'Document Check', status: 'Verified', icon: '📄' },
              { step: 'Biometric Scan', status: 'Verified', icon: '👁️' },
              { step: 'Liveness Check', status: 'Verified', icon: '🎥' },
              { step: 'AML Screening', status: 'Verified', icon: '🛡️' }
            ].map((verification, idx) => (
              <div key={idx} className="flex items-center justify-between bg-green-700 rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{verification.icon}</span>
                  <span className="text-white text-xs">{verification.step}</span>
                </div>
                <span className="text-green-400 text-xs">✓</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Compliance badges */}
        <div className="mt-4 bg-green-700 rounded-lg p-3">
          <h4 className="text-white text-sm font-bold mb-2">Compliance Status</h4>
          <div className="grid grid-cols-2 gap-2">
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
      <div className="absolute top-8 right-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 shadow-xl w-[240px]">
        <h3 className="text-white font-bold mb-3">Privacy Features</h3>
        <div className="space-y-2">
          {[
            { feature: 'Zero-Knowledge Proofs', status: 'Active', icon: '🔒' },
            { feature: 'Data Encryption', status: 'AES-256', icon: '🗝️' },
            { feature: 'Selective Disclosure', status: 'Enabled', icon: '👁️' },
            { feature: 'Auto-Expiry', status: '30 days', icon: '⏰' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-gray-300 text-xs">{item.feature}</span>
              </div>
              <span className="text-green-400 text-xs">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verification stats */}
      <div className="absolute bottom-8 right-8 bg-green-800 rounded-2xl p-4 shadow-xl w-[240px]">
        <h3 className="text-white font-bold mb-3">Verification Stats</h3>
        <div className="space-y-3">
          {[
            { metric: 'Success Rate', value: '99.7%' },
            { metric: 'Avg. Time', value: '47s' },
            { metric: 'Countries', value: '180+' },
            { metric: 'Fraud Prevented', value: '98.2%' }
          ].map((stat, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-gray-300 text-xs">{stat.metric}</span>
              <span className="text-white text-sm font-bold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shield illustration */}
      <div className="absolute bottom-12 left-1/3 transform">
        <div className="relative">
          <div className="w-16 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-2xl">🛡️</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IDDashboard