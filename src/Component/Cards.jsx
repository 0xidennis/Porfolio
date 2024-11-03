

const Cards = (Props) => {
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
     {/* <div className={`car ${Props.down}`}>
      <img src={Props.imge} alt="" className={`card-img ${Props.caimg}`}/>
      <h1 className={`card-header ${Props.cardheader}`}>{Props.titl}</h1>
      <p className={`card-para ${Props.cardpara}`}>{Props.parg}</p>
      <p className={`card-sub ${Props.cardsub}`}>{Props.subs}</p>
      <div className={`cart ${Props.cart}`}>
        <p><img src={Props.ime} alt="" />{Props.foote}</p>
        <p><img src={Props.imag} alt="" width={25} />{Props.footr}</p>
      </div>
     </div> */}
    </div>
  )
}

export default Cards