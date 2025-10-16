'use client'

import { useState } from 'react'
import { Wallet, Shield, User, Package } from 'lucide-react'
import TabNavigation from './products/tab-navigation'
import ProductContent from './products/product-content'

function ProductSection() {
  const [activeTab, setActiveTab] = useState('connect')

  const tabs = [
    { id: 'connect', icon: Wallet, label: 'Crefy Connect' },
    { id: 'id', icon: Shield, label: 'Crefy ID' },
    { id: 'passport', icon: User, label: 'Crefy Passport' },
    { id: 'phygitals', icon: Package, label: 'Crefy Phygitals' }
  ]

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile Tab Navigation - Horizontal Scroll */}
        <div className="lg:hidden mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          {/* Desktop Tab Navigation */}
          <div className="hidden lg:block">
            <TabNavigation 
              tabs={tabs} 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />
          </div>
          
          {/* Product Content */}
          <div className="flex-1 min-w-0">
            <ProductContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection