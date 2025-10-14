import React from 'react'
import tokenizedCoffee from '@/assets/tokenized-coffee.png'

function PhygitalsDashboard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img src={tokenizedCoffee} alt="Tokenized Coffee" className="max-w-full h-auto" />
    </div>
  )
}

export default PhygitalsDashboard