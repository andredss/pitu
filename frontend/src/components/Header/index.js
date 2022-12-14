import React from 'react';
import { HeaderContainer, Logo } from './styles';

import Icone from '../../assets/icone.png'

function Header(props) {
  return (
    <>
      <HeaderContainer>
        <Logo src={Icone} alt='Pitu - Encurtador de URL' />
        <h1>Cut Links</h1>
        <p>{props.children}</p>
      </HeaderContainer>
    </>
    
  )
}

export default Header;