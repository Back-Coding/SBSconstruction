import React from 'react'
import { Link } from 'react-router-dom'
import EnterPointFrom from '../From/EntryPointFrom';


import constractinimglogo from '../img/constrectionimg.jpg'


export default function HomeContainer(props) {
const {interior ,extrafast,repairingwork}= props;

//  The random value asses in array object value 
  const randomIndex1 = Math.floor(Math.random() * interior.length);
const interiorValue = interior[randomIndex1];

  const randomIndex2 = Math.floor(Math.random() * extrafast.length);
const extrafastValue = extrafast[randomIndex2];

  const randomIndex3 = Math.floor(Math.random() * repairingwork.length);
const repairingworkValue = repairingwork[randomIndex3];


  return (
    <>
    <section className={`text-gray-${props.mode==='light'?900:100} body-font`}>
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-${props.mode==='light'?900:100} `}>Welcome to <span className={`text-blue-${props.mode==='light'?900:400}`}> {props.companyname}</span></h1>
      <p className="mb-8 leading-relaxed">Your home,reimagined. welcome to our renovation and repair website, where dreams become reality. Discover endless possibilities for transform you space with our exprt team</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"><Link to="/service">Service</Link></button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-sm"><Link to="/blog">Explore Blog</Link></button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-cover">
      <img className="object-cover object-center rounded " alt="constraction" src={constractinimglogo}/>
    </div>
  </div>
</section>
<section className={`text-gray-${props.mode==='light'?900:100} body-font`}>
  <div className="container px-5 py-20 mx-auto lg:my-2">
  <h2 className={`text-3xl font-medium title-font text-gray-${props.mode==='light'?900:100} my-10 text-center`}> Recommended Servise</h2>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`${interiorValue && interiorValue.image !== undefined ? interiorValue.image : " "}`} alt="image interior" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{interiorValue && interiorValue.type !== undefined ? interiorValue.type : " "}</h2>
            <h1 className={`title-font text-lg font-medium text-gray-${props.mode==='light'?900:100} mb-3`}>{interiorValue && interiorValue.title !== undefined ? interiorValue.title : " "}</h1>
            <p className="leading-relaxed mb-3">{interiorValue && interiorValue.description !== undefined ? interiorValue.description.substring(0,250) : " "}</p>
            <div className="flex items-center flex-wrap ">
              <Link to="/service"className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Explore
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`${extrafastValue && extrafastValue.image !== undefined ? extrafastValue.image : " "}`} alt="image interior" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{extrafastValue && extrafastValue.type !== undefined ? extrafastValue.type : " "}</h2>
            <h1 className={`title-font text-lg font-medium text-gray-${props.mode==='light'?900:100} mb-3`}>{extrafastValue && extrafastValue.title !== undefined ? extrafastValue.title : " "}</h1>
            <p className="leading-relaxed mb-3">{extrafastValue && extrafastValue.description !== undefined ? extrafastValue.description : " "}</p>
            <div className="flex items-center flex-wrap ">
              <Link to="/service"className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Explore
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`${repairingworkValue && repairingworkValue.image !== undefined ? repairingworkValue.image : " "}`} alt="image interior" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{repairingworkValue && repairingworkValue.type !== undefined ? repairingworkValue.type : " "}</h2>
            <h1 className={`title-font text-lg font-medium text-gray-${props.mode==='light'?900:100} mb-3`}>{repairingworkValue && repairingworkValue.title !== undefined ? repairingworkValue.title : " "}</h1>
            <p className="leading-relaxed mb-3">{repairingworkValue && repairingworkValue.description !== undefined ? repairingworkValue.description : " "}</p>
            <div className="flex items-center flex-wrap ">
              <Link to="/service"className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Explore
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>
<section>
  {<EnterPointFrom mode={props.mode} showAlert={props.showAlert} host={props.host}/>}
</section>
{/* down section hidden not working condistion a hide a blog create to link */}
<section className="text-gray-600 body-font hidden">
  <div className="container px-5 py-20 mx-auto">
    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <Link  to="rupesh55"className="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <Link to="rupesh33" className="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
