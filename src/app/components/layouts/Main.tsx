import React from 'react'

interface MainContent {
  children: React.ReactNode
}

const Main = function ({ children }: MainContent) {
  return (
    <main className="container mx-auto p-4 min-h-[841px] shadow-2xl">
      {children}
    </main>
  )
}

export default Main
