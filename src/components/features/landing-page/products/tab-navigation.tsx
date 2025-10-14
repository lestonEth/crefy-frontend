import type { LucideIcon } from 'lucide-react'

interface Tab {
  id: string
  icon: LucideIcon
  label: string
}

interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex flex-col gap-4">
      {tabs.map((tab) => {
        const Icon = tab.icon
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl scale-110'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105'
            }`}
            title={tab.label}
          >
            <Icon className="w-6 h-6" />
          </button>
        )
      })}
    </div>
  )
}

export default TabNavigation