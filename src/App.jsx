import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Data from './data'

function App() {
  const cards = Data.map(travel => {
    return (
      <Card
        key={travel.id}
        {...travel}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  )
}

export default App
