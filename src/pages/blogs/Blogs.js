import React, { useContext, useEffect } from 'react'
import BlogItem from './BlogItem ';
import { Helmet } from 'react-helmet';
export default function Blogs(props) {


  return (
  <>

  <Helmet >

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Blogs</title>
{/* <!-- Meta tags for SEO indexing and improved visibility --> */}
<meta name="description" content="Discover insightful blogs on a variety of topics. Our engaging content covers everything from lifestyle. Stay informed, entertained, and inspired with our thought-provoking blog posts. Explore our blog today for valuable information entertaining reads." />
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

{/* <!-- Canonical URL --> */}
<link rel="canonical" href="https://sbscai.com" />
</Helmet>

  <section className="text-gray-600 mb-72 body-font overflow-hidden">
  <h2 className={`text-3xl font-medium title-font text-gray-${props.mode === 'light' ? 900 : 100}  my-10 text-center`}>{props.blog}</h2>
  <div className="container px-5 py-15 mx-auto">
    <div className={`my-8 divide-y-2 divide-gray-${props.mode === 'light' ? 300 : 400}`}>
      {props.blogData && props.blogData.map((post) => (
        <BlogItem key={post._id} post={post} mode={props.mode} />
        ))}
    </div>
  </div>
</section>
</>
  )
}
