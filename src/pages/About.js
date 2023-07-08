import React from 'react'
import { Helmet } from 'react-helmet'
// the demo user context api is import down
// import React,{useContext} from 'react'
// import noteContext from '../context/notes/noteContext'


// change and check from is looking the entery point
export default function About(props) {


  return (
    <>
      <Helmet >

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About -SBSContraction And Interior </title>
    {/* <!-- Meta tags for SEO indexing and improved visibility --> */}
    <meta name="description" content="Contact us today for all your needs. We're here to assist you and provide the solutions you're looking for. Reach out to us and let's discuss how we can help." />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="google" content="notranslate" />

    {/* <!-- Additional meta tags --> */}
    <meta name="author" content="Ankit Singh & Rupesh Prasad" />
    <meta name="revisit-after" content="7 days" />
    <meta name="og:title" content="SBSContraction And Interior"/>
    <meta name="og:description" content="Your home,reimagined. welcome to our renovation and repair website, where dreams become reality. Discover endless possibilities for transform you space with our exprt team"/>
    <meta name="og:url" content="https://sbscai.com" />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content="SBSContraction And Interior" />
    <meta name="facebook:title" content="Ankit Surendra"/>
    <meta name="facebook:description" content="Extra Fast: Extra fast refers to a service or work done with an accelerated timeline, aiming to complete the project in a shorter period than usual. It often requires efficient planning, allocation of resources, and streamlined processes to achieve the desired results quickly."/>
    <meta name="facebook:image" content="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/316419374_106090508997411_7012558156685824218_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_UYIR_RXnRAAX-pVKrV&_nc_ht=scontent-bom1-2.xx&oh=00_AfCA5LixV72MG_S7DJ7vkbZFq7PCPBXCem_qVcyPKIGUJg&oe=64ADCB9F"/>
    <meta name="facebook:url" content="https://www.facebook.com/people/Ankit-Surendra/pfbid0ZeSvuSY2ZdmCsJL5zhPRoGABC73Ur4mvRcG5E5tRHU6Rc5LWnMsYTxf5gsQBtx3Ql/?mibextid=ZbWKwL" />

    <meta name="instagram:title" content="SBSContraction And Interior"/>
    <meta name="instagram:description" content="Extra Fast: Extra fast refers to a service or work done with an accelerated timeline, aiming to complete the project in a shorter period than usual. It often requires efficient planning, allocation of resources, and streamlined processes to achieve the desired results quickly."/>
    <meta name="instagram:url" content="https://www.instagram.com/sbs_constructions_and_interior"/>
    <meta name="whatsapp:title" content="SBSContraction And Interior"/>
    <meta name="whatsapp:url" content="https://wa.me/message/47WINPBGG5F2L1"/>
    <meta name="pinterest:title" content="SBSContraction And Interior"/>
    <meta name="pinterest:url" content="https://in.pinterest.com/sbs_construction_and_interior"/>

    {/* <!-- Canonical URL --> */}
    <link rel="canonical" href="https://sbscai.com" />
    </Helmet>
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
   </>
  )
}



