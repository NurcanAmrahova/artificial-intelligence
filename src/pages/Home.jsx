import React from 'react'
import Introduction from '../components/Introduction';
import TrustedCompanies from '../components/TrustedCompanies';
import ApplySection from '../components/ApplySection';
import AwardContainer from '../components/AwardContainer';
import ClientsComments from '../components/ClientsComments';
const Home = () => {
  return (
    <>
    
  < div className='Wrapper'>
      
      <Introduction/>
      <TrustedCompanies/>
      <ApplySection/>
      {/* fragmenti importdan daxil edib de vere bilerik */}
  </div>
  <div>
      <AwardContainer/>
  </div>
  <div className='Wrapper'>
    <ClientsComments/>
    
  </div>
  
    
    
    </>
  )
}

export default Home