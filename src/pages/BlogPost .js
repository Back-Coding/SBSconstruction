import React from 'react';

const BlogPost = (props) => {
  return (
    <div className="blog-post">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className={`mt-1 text-gray-${props.mode==='light'?900:100}  text-sm`}>12 Jun 2019</span>
          </div>
          <div className="md:flex-grow">
            <h2 className={`text-2xl font-medium text-gray-${props.mode==='light'?900:100}  title-font mb-2`}>Bitters hashtag waistcoat fashion axe chia unicorn</h2>
            <p className={`leading-relaxed text-gray-${props.mode==='light'?900:100}`}>Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
            <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
    </div>
    
  );
};

export default BlogPost;
