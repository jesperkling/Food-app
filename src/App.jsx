import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import CreatePlacePage from './pages/CreatePlacePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
        <Route path="/create-place" element={<CreatePlacePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={<LogoutPage />} />
			</Routes>
    </div>
  )
}

export default App
