import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Results from './pages/Results'
import Error from './components/Error'
import Footer from './components/Footer'
import GlobalStyle from "./utils/style/GlobalStyle"
import { ThemeProvider, SurveyProvider } from './utils/context'


const root = document.querySelector("#root");

createRoot(root).render(
    <Router>
      <>
      <ThemeProvider>
      <SurveyProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
      </SurveyProvider>
      </ThemeProvider>
      </>
    </Router>


)