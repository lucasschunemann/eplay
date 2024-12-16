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

  useEffect(() => {
    // Simulação de chamada para API ou banco de dados
    const fetchRestaurant = async () => {
      const mockData: Restaurant = {
        id: '1',
        name: 'Restaurante Delícia',
        image: 'https://via.placeholder.com/800x300',
        foodType: 'Comida Italiana',
        description:
          'Oferecemos pratos autênticos italianos com ingredientes frescos e selecionados.'
      }

      // Aqui você substituiria por uma chamada real de API
      if (id === mockData.id) {
        setRestaurant(mockData)
      }
    }

    fetchRestaurant()
  }, [id])

  if (!restaurant) {
    return <div>Carregando...</div>
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
