import React from 'react'
import { Link } from 'react-router-dom' // Importa o Link para navegação
import Tag from '../Tag'
import styled from 'styled-components'

interface RestaurantCardProps {
  id: string
  image: string
  foodType: string
  isHighlight: boolean
  name: string
  description: string
  rating: number
}

const CardContainer = styled.div`
  width: 350px;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const RestaurantImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
`

const RestaurantName = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 16px 0;
`

const RestaurantDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`

const Rating = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RatingStars = styled.span`
  color: #ffcc00;
  font-size: 20px;
`

const RatingNumber = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: #888;
`

const Button = styled(Link)`
  /* Usa Link para navegação */
  padding: 12px 24px;
  font-size: 14px;
  background-color: #ff5722;
  color: white;
  text-decoration: none; /* Remove sublinhado do link */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id, // Recebe o ID do restaurante
  image,
  foodType,
  isHighlight,
  name,
  description,
  rating
}) => (
  <CardContainer>
    <RestaurantImage src={image} alt={name} />
    <Tag text={foodType} highlight={isHighlight} />
    <RestaurantName>{name}</RestaurantName>
    <RestaurantDescription>{description}</RestaurantDescription>
    <Rating>
      <RatingStars>★</RatingStars>
      <RatingNumber>{rating}/5</RatingNumber>
    </Rating>
  </CardContainer>
)

export default RestaurantCard
