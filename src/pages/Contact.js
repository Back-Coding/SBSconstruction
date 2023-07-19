import React from "react";
import { Helmet } from "react-helmet";

export default function Contact(props) {
  return (
    <>
        <Helmet >

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact -SBSContraction And Interior </title>
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
      <div className="min-h-screen">
        <div className={`max-w-screen-xl md:mt-24 px-4 md:px-8 lg:px-12 xl:px-26 py-16 mx-auto bg-gray-${props.mode==='light'?100:500} text-gray-900 rounded-lg shadow-lg`}>
              <h2 className={`text-center text-3xl font-bold leading-tight text-gray-${props.mode==='light'?900:100} my-1`}>
                Contact!
              </h2>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                className="w-64 h-64 rounded-full flex-shrink-0  object-center object-fill"
                src={props.companylogo} alt="companylogo"
              />
            </div>
          </div>
          <div className="flex text-4xl justify-center pt-12">
            <a  href="https://www.facebook.com/people/Ankit-Surendra/pfbid0ZLeQdwEZZPufHRpVgZAJ7Z5bZCJxMoZ652PkQs6y91drjoA3FRXKBfRzfeHVDTiJl/?mibextid=ZbWKwL"
              className={`cursor-pointer mx-6 hover:text-purple-${props.mode==='light'?500:50} active:text-purple-700`}
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
            </a>
            <a href=" https://wa.me/message/47WINPBGG5F2L1" target="_blank"  className={` cursor-pointer mx-2  hover:text-purple-${props.mode==='light'?500:50} active:text-purple-700`}  ><i className=" fa fa-whatsapp"></i></a>
            <a
              className={`cursor-pointer mx-6 hover:text-purple-${props.mode==='light'?500:50} active:text-purple-700`}
              href="https://www.instagram.com/sbs_constructions_and_interior"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="https://in.pinterest.com/sbs_construction_and_interior" target="_blank"  className={`cursor-pointer mx-6 hover:text-purple-${props.mode==='light'?500:50} active:text-purple-700`}  > <i className="fa fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}
