import React from 'react'
import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';


export const metadata = {
    title: "Promptlogix",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      </head>
        <body>
        <Provider>
             <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
            <Navbar />
                {children}
            </main>

        </Provider>
        
        </body>
    </html>
  )
}

export default RootLayout
