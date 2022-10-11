import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import CreatePlacePage from './pages/CreatePlacePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import CreateTipsPage from './pages/CreateTipsPage'
import TipsPage from './pages/TipsPage'
import UpdatePlacePage from './pages/UpdatePlacePage'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
        <Route path="/create-place" element={<CreatePlacePage />} />
        <Route path="/update-place" element={<UpdatePlacePage />} />
        <Route path="/create-tips" element={<CreateTipsPage />} />
        <Route path='/tips' element={<TipsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={<LogoutPage />} />
			</Routes>
    </div>
  )
}

export default App
