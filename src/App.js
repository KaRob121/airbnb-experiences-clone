import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {data.map( experience =>
        <Card 
          img={experience.coverImg}
          rating={experience.stats.rating}
          reviewCount={experience.stats.reviewCount}
          country={experience.location}
          title={experience.title}
          price={experience.price}

        />
      )}
      {/* <Card 
        img="katie-zaferes.png"
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      /> */}
    </div>
  );
}

export default App;
