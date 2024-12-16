import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Tag from '../components/Tag'

interface Restaurant {
  id: string
  name: string
  image: string
  foodType: string
  description: string
}

const Banner = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 300px;
`

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  height: 100%;
`

const Content = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;
`

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  // Dados fixos de restaurantes com IDs
  const restaurants = [
    {
      id: '1',
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

  useEffect(() => {
    const selectedRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    )
    setRestaurant(selectedRestaurant || null)
  }, [id])

  if (!restaurant) {
    return <div>Restaurante não encontrado.</div>
  }

  return (
    <>
      <Banner image={restaurant.image}>
        <BannerText>
          <h1>{restaurant.name}</h1>
          <Tag text={restaurant.foodType} highlight />
        </BannerText>
      </Banner>
      <Content>
        <h2>Sobre o Restaurante</h2>
        <p>{restaurant.description}</p>
      </Content>
    </>
  )
}

export default RestaurantDetails
