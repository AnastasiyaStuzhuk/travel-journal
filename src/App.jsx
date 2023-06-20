import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {
  const cards = data.map(card => {
    return (
      <Card 
        key={card.id}
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='cards'>
        {cards}  
      </div>
    </div>
  ) 
}

export default App
