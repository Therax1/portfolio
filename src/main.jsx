
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
    <>
        <Navbar />
        <Home/>
        <Footer />
    </>
)
