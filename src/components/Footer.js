import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <footer className="text-gray-600  body-font rounded-2xl">
  <div className=" rounded-2xl">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <Link className={`flex title-font font-medium items-center md:justify-start justify-center text-gray-${props.mode==='light'?900:100}`}  to="/">
      <img alt="companylogo" src={props.companylogo} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center " />
        <span className="ml-3 text-xl">{props.companyname}</span>
      </Link>
      <p className={`text-sm text-gray-${props.mode==='light'?900:100} sm:ml-6 sm:mt-0 mt-4`}>© 2022 SBSGroup 
        {/* <Link to="https://twitter.com/sbsgroup" rel="noopener noreferrer" className="text-gray-600 ml-1">@SBSGroup</Link> */}
      </p>
      
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a target='_blank' href='https://www.facebook.com/people/Ankit-Surendra/pfbid0ZLeQdwEZZPufHRpVgZAJ7Z5bZCJxMoZ652PkQs6y91drjoA3FRXKBfRzfeHVDTiJl/?mibextid=ZbWKwL' className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href=" https://wa.me/message/47WINPBGG5F2L1" target="_blank"  className={` cursor-pointer mx-2  hover:text-purple-${props.mode==='light'?500:50} active:text-purple-700`}  ><i className=" fa fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/sbs_constructions_and_interior" target='_blank' className="ml-3 text-gray-500"  >
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="https://in.pinterest.com/sbs_construction_and_interior" target="_blank"  className={`cursor-pointer mx-6 hover:text-purple-${props.mode==='light'?500:50} active:text-purple-700`}  ><i className="fa fa-pinterest-p"></i></a>
      </span>
    </div>
  </div>
</footer>
  )
}
