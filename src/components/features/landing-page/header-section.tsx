import { Button } from '../../ui/button'
import { useState } from 'react'
import logo from '../../../assets/crefy-icon.png'  // Crefy icon image

function HeaderSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigationItems = [
    { label: 'Whitepaper', href: '/whitepaper' },
    { label: 'ChangeLogs', href: '/changelogs' },
    { label: 'Docs', href: '/docs' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-1 items-center">
            <a 
              href="/" 
              className="flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            >
              <div className="relative rounded-full overflow-hidden">
                <img src={logo} alt="Crefy Logo" className="w-10 h-10" />
              </div>
              <span className="text-2xl font-black text-gray-900 hidden sm:block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Crefy_
              </span>
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 bg-gray-50/80 rounded-2xl p-1.5 backdrop-blur-sm">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  asChild
                  className="text-gray-600 hover:text-purple-600 hover:bg-white px-4 py-2 rounded-xl transition-all duration-200 font-medium text-sm hover:shadow-sm"
                >
                  <a href={item.href}>
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </nav>

          {/* CTA Section */}
          <div className="flex flex-1 justify-end items-center gap-2 sm:gap-3">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-purple-600 hover:bg-transparent px-3 py-2 sm:px-4 transition-all duration-200 font-medium text-sm hidden sm:flex"
              size="default"
            >
              Book a Demo
            </Button>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 px-4 py-2.5 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-medium text-sm rounded-xl"
              size="default"
            >
              <span className="hidden xs:inline">Get Started</span>
              <span className="xs:hidden">Start</span>
            </Button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-gray-600 rounded transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-gray-600 rounded transition-opacity duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-gray-600 rounded transition-transform duration-200 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 border-t border-gray-100 mt-2 pt-4 pb-2' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-purple-600 hover:bg-gray-50 px-4 py-3 transition-all duration-200 font-medium text-sm justify-start"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection