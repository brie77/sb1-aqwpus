import React, { useState } from 'react'
import { Layout, Github, Linkedin, Twitter, PanelLeftClose, PanelRightClose } from 'lucide-react'

function App() {
  const [isLeftColumnVisible, setIsLeftColumnVisible] = useState(true)
  const [isRightColumnVisible, setIsRightColumnVisible] = useState(true)

  const toggleLeftColumn = () => {
    setIsLeftColumnVisible(!isLeftColumnVisible)
  }

  const toggleRightColumn = () => {
    setIsRightColumnVisible(!isRightColumnVisible)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 border-b-2 border-gray-300 flex items-center justify-between">
        <button 
          onClick={toggleLeftColumn}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          aria-label="Toggle left column"
        >
          <PanelLeftClose size={24} className={`transform transition-transform duration-300 ${isLeftColumnVisible ? '' : 'rotate-180'}`} />
        </button>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <Layout className="mr-2" />
          3-Spalten Layout
        </h1>
        <button 
          onClick={toggleRightColumn}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          aria-label="Toggle right column"
        >
          <PanelRightClose size={24} className={`transform transition-transform duration-300 ${isRightColumnVisible ? '' : 'rotate-180'}`} />
        </button>
      </header>
      <div className="flex-grow flex overflow-hidden p-2">
        <aside className={`w-[300px] flex-shrink-0 transition-all duration-300 ease-in-out ${isLeftColumnVisible ? 'mr-2' : '-ml-[300px]'}`}>
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <h2 className="text-xl font-semibold mb-4">Linke Spalte</h2>
            <p className="text-gray-600">
              Dies ist der Inhalt der linken Spalte. Sie ist 300px breit und kann ein- und ausgeblendet werden.
            </p>
          </div>
        </aside>
        <main className={`flex-grow transition-all duration-300 ease-in-out overflow-auto ${isLeftColumnVisible ? 'ml-2' : ''} ${isRightColumnVisible ? 'mr-2' : ''}`}>
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <h2 className="text-xl font-semibold mb-4">Mittlere Spalte</h2>
            <p className="text-gray-600">
              Dies ist der Inhalt der mittleren Spalte. Sie nimmt den verfügbaren Platz ein und passt sich an.
            </p>
          </div>
        </main>
        <aside className={`w-[300px] flex-shrink-0 transition-all duration-300 ease-in-out ${isRightColumnVisible ? 'ml-2' : '-mr-[300px]'}`}>
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <h2 className="text-xl font-semibold mb-4">Rechte Spalte</h2>
            <p className="text-gray-600">
              Dies ist der Inhalt der rechten Spalte. Sie ist ebenfalls 300px breit und kann ein- und ausgeblendet werden.
            </p>
          </div>
        </aside>
      </div>
      <footer className="bg-gray-800 text-white p-4 mt-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 3-Spalten Layout. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-300"><Github size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App