
import card1 from '../../assets/card-1.png'
import card2 from '../../assets/card-2.png'
import card3 from '../../assets/card-3.png'

const cards = [
    {
        id: 1,
        image: card1,
        trend: '2024 trend',
        title: 'Woman Shirt' ,

    },
    {
        id: 2,
        image: card2,
        trend: '2024 trend',
        title: 'Woman Dresses' ,

    },
    {
        id: 3,
        image: card3,
        trend: '2024 trend',
        title: 'Woman Casuals' ,

    }
   

]

const Herosection = () => {

    
  return (
    <section className='section__container hero__container'>
        {
            cards.map((card) =>(
                <div key={card.id} className='hero__card'>
                    <img src={card.image} alt='' />
                    <div className='hero__content'>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href='#'>Discover more</a>
                    </div>

                </div>

            ))
        }
    </section>
  )
}

export default Herosection
