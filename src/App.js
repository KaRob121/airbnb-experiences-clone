import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data.js'

function App() {
  const cards = data.map( experience => {
    return (
      <Card 
        key={experience.id}
        item={experience}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>

    </div>
  );
}

export default App;
