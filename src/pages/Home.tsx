import React from 'react'
import Card from '../components/Card'

const Home = () => {
  // Dados fictícios de restaurantes
  const restaurants = [
    {
      image: 'https://via.placeholder.com/400',
      foodType: 'Japonesa',
      isHighlight: true,
      name: 'Sushi House',
      description: 'Sushi e sashimi frescos com toque especial.',
      rating: 4.5
    },
    {
      image: 'https://via.placeholder.com/400',
      foodType: 'Italiana',
      isHighlight: false,
      name: 'Pasta Bella',
      description: 'Massas artesanais com ingredientes frescos.',
      rating: 4.2
    },
    {
      image: 'https://via.placeholder.com/400',
      foodType: 'Brasileira',
      isHighlight: true,
      name: 'Churrasquinho do Zé',
      description: 'Churrasco no espeto, com a verdadeira carne brasileira.',
      rating: 4.8
    },
    {
      image: 'https://via.placeholder.com/400',
      foodType: 'Vegana',
      isHighlight: false,
      name: 'Green Taste',
      description: 'Comidas veganas com sabor inconfundível.',
      rating: 4.3
    },
    {
      image: 'https://via.placeholder.com/400',
      foodType: 'Chinesa',
      isHighlight: true,
      name: 'Wok Express',
      description: 'Pratos tradicionais chineses com ingredientes frescos.',
      rating: 4.7
    },
    {
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
      {restaurants.map((restaurant, index) => (
        <Card key={index} {...restaurant} />
      ))}
    </div>
  )
}

export default Home
