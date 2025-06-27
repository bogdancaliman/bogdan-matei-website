import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from "@/pages/About"
import Works from "@/pages/Works"
import Press from "@/pages/Press"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} /> 
          <Route path="works" element={<Works />} />
          <Route path="press" element={<Press />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
