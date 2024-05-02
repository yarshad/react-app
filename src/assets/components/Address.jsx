import React from 'react'

const Address = (props) => {
    const {street, city, zip} = props
  return (
    <>
    {{street} - {city} - {zip}}
    </>
  )
}

export default Address