import React from 'react'
// the demo user context api is import down
// import React,{useContext} from 'react'
// import noteContext from '../context/notes/noteContext'


// change and check from is looking the entery point
export default function About(props) {


  return (
    <div>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-left">
      <p className={`leading-relaxed text-lg text-gray-${props.mode==='light'?900:100}`}>Our vision
    To create a proper and luxurious lifestyle for every person on earth. Reasonable price.
    
     Our Mission 
   We Provide reasonable prices and service skills to customers to whom quality, efficiency and reliability are more important.
   
   S.B.S Construction And Interiors is a proposed venture that will offer comprehensive interior design services for homes and offices in the India . S.B.S Construction And Interiors also will provide access to products to complement the design consulting services including furniture, both new and antique, decorator fabric, and home and office accessories.  This venture offers the personalized services the target market desires and can afford in a way that is unique from concept to implementation.
   
   Recent market research indicates a specific and growing need in the area for the interior design consulting services and products S.B.S Construction And Interiors offers the market it will serve.  The market strategy will be based on a cost effective approach to reach this clearly defined target market.  Although the population of India is around 138 crores (2020) the market has a significant quantity of relatively wealthy households that are conscious of the appearance and feel of their home and offices.
   
   The approach to promote  S.B.S Construction And Interiors with be through establishing relationships with key people in the community and then through referral activities once a significant client base is established.   S.B.S Construction And Interiors will focus on developing solid and loyal client relationships offering design solutions based on the client's taste, budget, use, and goals for the space.  The additional selection, accessibility of product, design services, and value-based pricing will differentiate  S.B.S Construction And Interiors from the other options in the area. </p>
    </div>
    <div className="text-center">
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-1 "></span>
      <h2 className={`text-gray-${props.mode==='light'?900:100} font-medium title-font tracking-wider text-sm`}>SBS Constraction</h2>
      <p className="text-gray-500"></p>
    </div>
  </div>
</section>

   </div>    
  )
}


/*

// the demo user context api is import down
import React,{useContext ,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'


// change and check from is looking the entery point
export default function About(props) {

  // the demo use context api 
  const a=useContext(noteContext);
  useEffect(() => {
    a.update();
  // eslint-disable-next-line
  }, [])
    
  return (

    <>
     This About is simple name {a.state.name}
     and class {a.state.class}

    </>
  )

}
*/