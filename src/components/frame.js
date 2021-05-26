import React from 'react'
import styled from 'styled-components'

const Title = styled.button`
  /* Adapt based on primary prop */
  background: ${props => (props.primary ? 'black' : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Frame = ({ children }) => {
  return (
    <div>
      <Title primary>This is the page title</Title>
      { children }
    </div>
  )
}

export default Frame
