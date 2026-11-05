import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);
  
  return (
    <>
      <Header messageSetter={setMessages} />
      <Main messages={messages} setMessages={setMessages} />
      <Footer />
    </>
  )
}

export default App
