import React from 'react'


const Button = ({ButtonValue, IconSekli,ClassAdi}) => {
  return (
    <button className= {ClassAdi}>{IconSekli && <img src ={IconSekli}/>}{ButtonValue}</button>
  )
}
// bu yeni usuldur. kohne usulda (props) sonra ise props.ButtonValue yazilir
export default Button