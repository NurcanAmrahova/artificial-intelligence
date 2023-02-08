import React from 'react'
const Awards = ({AwardsImage, AwardsName, AwardsInfo}) => {
  return (
    <div className=' my-custom-card col-12 col-md-6 col-lg-2'>
        <img src={AwardsImage} alt="" />
        <h1>{AwardsName}</h1>
        <p>{AwardsInfo}</p>
    </div>
  )
}

export default Awards