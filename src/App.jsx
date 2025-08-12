import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import Animals from './pages/Animals'
import Fruits from './pages/Fruits'
import Vegetables from './pages/Vegetables'
import Birds from './pages/Birds'
import Greetings from './pages/Greetings'
import { Routes, Route } from 'react-router-dom'
import NounsList from './pages/Nouns'
import AdjectivesList from './pages/Adjectives'
import VerbsList from './pages/Verbs'
import PronounsList from './pages/Pronouns'
import PrepositionsList from './pages/Prepositions'
import Quiz from './pages/Quiz'
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/animals" element={<Animals />} />
        <Route path="/menu/fruits" element={<Fruits />} />
        <Route path="/menu/vegetables" element={<Vegetables />} />
        <Route path="/menu/birds" element={<Birds />} />
        <Route path="/menu/greetings" element={<Greetings />} />
        <Route path="/menu/nouns" element={<NounsList />} />
        <Route path="/menu/adjectives" element={<AdjectivesList />} />
        <Route path="/menu/verbs" element={<VerbsList />} />
        <Route path="/menu/pronouns" element={<PronounsList />} />
        <Route path="/menu/prepositions" element={<PrepositionsList />} />
      </Routes>
    </>
  )
}

