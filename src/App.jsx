import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import ModalLogin from "./components/Modal/ModalLogin";
import ModalRegister from "./components/Modal/ModalRegister";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllTopics from "./pages/AllTopics";

function App() {
  const [scroll, setScroll] = useState(false)

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <Header scroll={scroll} onOpenLogin={() => setIsLoginOpen(true)} />

        {/* Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="chu-de" element={<AllTopics />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Modal */}
        <ModalLogin
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitch={() => {
            setIsLoginOpen(false)
            setIsRegisterOpen(true)
          }}
        />

        <ModalRegister
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSwitch={() => {
            setIsRegisterOpen(false)
            setIsLoginOpen(true)
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
