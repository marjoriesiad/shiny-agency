import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = document.querySelector("#root");

createRoot(root).render(
    <Router>
      <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="/freelances" element={<Freelances />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      </>
    </Router>


)