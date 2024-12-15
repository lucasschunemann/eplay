// src/components/Tag/index.tsx
import React from 'react'
import styled from 'styled-components'

interface TagProps {
  text: string
  highlight?: boolean
}

const TagContainer = styled.span<{ highlight?: boolean }>`
  padding: 6px 12px;
  background-color: ${(props) => (props.highlight ? '#ff5722' : '#00796b')};
  color: white;
  font-weight: bold;
  border-radius: 16px;
  font-size: 14px;
  margin-top: 8px;
`

const Tag: React.FC<TagProps> = ({ text, highlight }) => {
  return <TagContainer highlight={highlight}>{text}</TagContainer>
}

export default Tag
