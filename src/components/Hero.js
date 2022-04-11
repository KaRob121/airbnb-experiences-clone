import hero from '../images/hero.png'

function Hero() {
    return (
        <main className="main">
            <img className="main--hero-image" src={hero}/>
            <h1 className="main--heading">Online Experiences</h1>
            <p className="main--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    )
}

export default Hero