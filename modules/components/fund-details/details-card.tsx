import React from 'react'


const DetailsCard = ({children} :{children:React.ReactNode}) => {
  return (
    <>
        <div className='details-card'>
            {
                children
            }
        </div>
    </>
  )
}

export default DetailsCard 