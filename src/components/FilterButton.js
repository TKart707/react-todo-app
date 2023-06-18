import React from 'react'
import styled from 'styled-components'

function FilterButton({name, onClick}) {
  return (
    <>
        <Button
          onClick={() => onClick(name)}
        >
          {name}
        </Button>
    </>
  )
}

export default FilterButton;



const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.194444px;

  color: ${({theme}) => theme.textColorFilter};
  background-color: inherit;
  border: none;
  @media only screen and (min-width: 1440px) {
    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.textColorHover};
    }
  }   
`