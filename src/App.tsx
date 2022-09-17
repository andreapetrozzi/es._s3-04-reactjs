import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar'
import Gallery from './components/Gallery'
import Article from './components/Article'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* I want a navbar right here */}
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/article/:articleId" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


// Sul Terminale
  // npx create-react-app ts-project --template typescript
  // npm i bootstrap@4.6.1
  // npm i react-bootstrap@1.6.5
  // npm i react-router-dom


// Esercizio

// Oggi creerai un sito di notizie: Spaceflight, usando TypeScript.
// Soddisfa le richieste e cerca di implementare i tipi e le interfacce al meglio che puoi.

     
// API Docs:
// Puoi trovare l’intera documentazione qui –> https://api.spaceflightnewsapi.net/v3/documentation

// L’endpoint per ottenere la lista di articoli sarà così:
// https://api.spaceflightnewsapi.net/v3/articles

// Usa la proprietà id di ogni rotta per cui vuoi ricevere informazioni
// https://api.spaceflightnewsapi.net/v3/articles/:id

     
// TASKS:
// 1. Implementa una bella pagina principale per visualizzare gli articoli delle API; ogni articolo dovrà essere visualizzato da un componente e dovrà mostrare i dettagli come titolo, data di pubblicazione, immagine di copertina ecc…
// 2. Cliccare su un articolo dovrebbe portare l’utente alla pagina dettaglio, in cui verrà fatto il fetch dei dati di un particolare articolo. Mostra in questa pagina ogni informazione che puoi ottenere al riguardo.

     

// Suggerimenti:
// Come al solito separa l’applicazione in componenti riutilizzabili
// Implementa interfacce per prop e stato per ogni componente, quando necessario
// Implementa un’interfaccia solo per il risultato della chiamata API
// Salta l’approccio Redux e fai il fetch diretto dei dati nel componente e salva il risultato nello stato loca (non abbiamo avuto modo di parlare di Redux con TypeScript, se sei interessato c’è una Coding Pill disponibile che ne parla!)

