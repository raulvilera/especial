import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import { Lei, Solucao, AssistenteIA, Pioneiros, Pricing, CTAFinal, Footer } from './Sections'
import Problema from './Problema'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problema />
      <Lei />
      <Solucao />
      <AssistenteIA />
      <Pioneiros />
      <Pricing />
      <CTAFinal />
      <Footer />
    </>
  )
}
