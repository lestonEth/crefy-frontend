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
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex gap-8 items-stretch">
          <TabNavigation 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          <ProductContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  )
}

export default ProductSection