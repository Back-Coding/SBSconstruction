import React, { useContext, useEffect } from 'react'
import BlogItem from './BlogItem ';
import { BlogContext } from '../../admin/context/blog/BlogContext';
export default function Blogs(props) {
  // const { blogs, fetchAllBlogs,}=useContext(BlogContext);

  // useEffect(() => {
  //   fetchAllBlogs()
  //   // eslint-disable-next-line
  // }, [])



  return (
  //   <section className="text-gray-600 mb-72 body-font overflow-hidden">
  // <h2 className={`text-3xl font-medium title-font text-gray-${props.mode==='light'?900:100}  my-10 text-center`}>{props.blog}</h2>
  //   <div className="container px-5 py-15 mx-auto">
  //     <div className={`my-8 divide-y-2 divide-gray-${props.mode==='light'?300:400} `}>

  //     {/* { props.blogData&&props.blogData.map((post) => (
  //       <BlogItem  key={post.id} post={post} mode={props.mode}  />
  //     ))}  */}

  //     {/* {   props.blogData&&props.blogData.map((post) => (  <div className="blog-post">
  //       <div className="py-8 flex flex-wrap md:flex-nowrap">
  //           <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
  //             <span className={`mt-1 text-gray-${props.mode==='light'?900:100}  text-sm`}>12 Jun 2019</span>
  //           </div>
  //           <div className="md:flex-grow">
  //             <h2 className={`text-2xl font-medium text-gray-${props.mode==='light'?900:100}  title-font mb-2`}>Bitters hashtag waistcoat fashion axe chia unicorn</h2>
  //             <p className={`leading-relaxed text-gray-${props.mode==='light'?900:100}`}>Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
  //             <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
  //               <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
  //                 <path d="M5 12h14"></path>
  //                 <path d="M12 5l7 7-7 7"></path>
  //               </svg>
  //             </a>
  //           </div>
  //         </div>
  //     </div> */}
  //        {/* ))} */}
        
  //     </div>
  //   </div>
  // </section>
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
  )
}
