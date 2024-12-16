import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
  // Dados fictícios de restaurantes com IDs adicionados
  const restaurants = [
    {
      id: '1', // Adicionado ID exclusivo
      image: 'https://via.placeholder.com/400',
      foodType: 'Japonesa',
      isHighlight: true,
      name: 'Sushi House',
      description: 'Sushi e sashimi frescos com toque especial.',
      rating: 4.5
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/400',
      foodType: 'Italiana',
      isHighlight: false,
      name: 'Pasta Bella',
      description: 'Massas artesanais com ingredientes frescos.',
      rating: 4.2
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/400',
      foodType: 'Brasileira',
      isHighlight: true,
      name: 'Churrasquinho do Zé',
      description: 'Churrasco no espeto, com a verdadeira carne brasileira.',
      rating: 4.8
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/400',
      foodType: 'Vegana',
      isHighlight: false,
      name: 'Green Taste',
      description: 'Comidas veganas com sabor inconfundível.',
      rating: 4.3
    },
    {
      id: '5',
      image: 'https://via.placeholder.com/400',
      foodType: 'Chinesa',
      isHighlight: true,
      name: 'Wok Express',
      description: 'Pratos tradicionais chineses com ingredientes frescos.',
      rating: 4.7
    },
    {
      id: '6',
      image: 'https://via.placeholder.com/400',
      foodType: 'Mexicana',
      isHighlight: false,
      name: 'El Taco Loco',
      description: 'Tacos e burritos autênticos com molho especial.',
      rating: 4.1
    }
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap', // Para permitir que os cards "quebrem" e formem várias linhas
        gap: '24px', // Espaçamento de 24px entre os cards
        justifyContent: 'center', // Centraliza os cards
        padding: '20px'
      }}
    >
      {restaurants.map((restaurant) => (
        <Link
          to={`/restaurant/${restaurant.id}`}
          key={restaurant.id}
          style={{ textDecoration: 'none' }}
        >
          <Card {...restaurant} />
        </Link>
      ))}
    </div>
  )
}

export default Home
