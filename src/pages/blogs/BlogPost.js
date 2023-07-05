import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BlogPost = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const encodedObject = searchParams.get('data');
  const decodedObject = encodedObject ? JSON.parse(decodeURIComponent(encodedObject)) : null;

  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (decodedObject) {
      setBlogData(decodedObject);
      // eslint-disable-next-line
    }
    // eslint-disable-next-line
  }, []);

  if (!blogData) {
    return null; // or display a loading state
  }
  const { title, content,tag,imagePath1,imagePath2,footercontent,year,month,day } = blogData;

  return (
    <section className={`text-gray-${props.mode === 'light' ? 900 : 100} body-font`}>
  <div className="container px-5 py-5 mx-auto">
    <div className="text-center mb-10">
      <p className={`text-sm title-font text-gray-${props.mode === 'light' ? 500: 400} tracking-widest`}>{tag}</p>
      <h1 className={`sm:text-3xl text-2xl font-medium text-center title-font text-gray-${props.mode === 'light' ? 900 : 100} mb-4`}>{title}</h1>
      <p className={`text-sm title-font text-gray-${props.mode === 'light' ? 900 : 100} tracking-widest`}>{day}-{month}-{year}</p>
    <div className="flex mt-4 justify-center"><div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div></div>
    </div>
    
    <div className="container mx-auto flex px-5 py-1 items-center justify-center flex-col">
   { imagePath1 && <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={imagePath1} />}
   <div className="lg:w-2/3 w-full">
    <p className="mb-8 leading-relaxed">
        {content}
    </p>
   </div>
   { imagePath2 && <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={imagePath2} />}
    <div className=" lg:w-2/3 w-full">
      <p className="mb-8 leading-relaxed">{footercontent}</p>
    </div>
  </div>

  </div>
</section>
  );
};

export default BlogPost;