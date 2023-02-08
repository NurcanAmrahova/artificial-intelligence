import React from 'react'
import './Awards.jsx'
import AwardInfos from './AwardInfo.json'
import Awards from './Awards.jsx'
import './Awards.css'
const AwardContainer = () => {
  return (
    <div className="award-container row">
        {
            AwardInfos.map(infos=>(
            <Awards AwardsImage={infos['award-image']}  AwardsName={infos['award-name']} AwardsInfo={infos['award-info']}/>
            ))
        }
    </div>
  )
}

export default AwardContainer