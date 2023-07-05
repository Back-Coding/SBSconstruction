import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
  const { title, content, tag, imagePath1, imagePath2, footercontent, createdDataAt ,key } = props.post;
  const dateObj = new Date(createdDataAt);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const encodedObject = encodeURIComponent(JSON.stringify({ title, content,tag,imagePath1,imagePath2,footercontent,year,month,day }));
  return (
    <div className="blog-post" >
    <div className="py-8 flex flex-wrap md:flex-nowrap" key={ key}>
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className={`mt-1 text-gray-${props.mode === 'light' ? 900 : 100} text-sm`}> <p className='text-blue-400 text-lg'>{day}-{month}-{year}</p></span>
      </div>
      <div className="md:flex-grow">
      <Link to={`/blog/blogpost?data=${encodedObject}`}><h2 className={`text-2xl font-medium text-gray-${props.mode === 'light' ? 900 : 100} title-font mb-2`}>{title}</h2></Link>
        <p className={`leading-relaxed text-gray-${props.mode === 'light' ? 900 : 100}`}>{content.substring(0,500)}</p>
        <Link to={`/blog/blogpost?data=${encodedObject}`}className="text-indigo-500 inline-flex items-center mt-4">Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default BlogItem;
