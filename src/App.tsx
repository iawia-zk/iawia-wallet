import './App.css'
import {  Routes, Route, HashRouter } from 'react-router-dom'
import { FC } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './screens/home/Home'
import Data from './screens/data/Data'
import Settings from './screens/settings/Settings'
import ThemeProvider from 'context/ThemeProvider'

const App: FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App 