import React from 'react'

const Cardone = (Props) => {
  return (
    <div>
         <div className={`car ${Props.car}`}>
      <img src={Props.img} alt="" className={`card-img ${Props.cardimg}`}/>
      <h1 className={`card-header ${Props.cardheader}`}>{Props.title}</h1>
      <p className={`card-para ${Props.cardpara}`}>{Props.par}</p>
      <p className={`card-sub ${Props.cardsub}`}>{Props.sub}</p>
      <div className={`cart ${Props.cart}`}>
        <p><img src={Props.im} alt="" />{Props.footer}</p>
        <p><img src={Props.image} alt="" width={25} />{Props.foot}</p>
      </div>
     </div>
    </div>
  )
}

export default Cardone
