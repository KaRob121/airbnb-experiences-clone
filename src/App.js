import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data.js'

function App() {
  const cards = data.map( experience => {
    return (
      <Card 
        img={experience.coverImg}
        rating={experience.stats.rating}
        reviewCount={experience.stats.reviewCount}
        country={experience.location}
        title={experience.title}
        price={experience.price}
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
