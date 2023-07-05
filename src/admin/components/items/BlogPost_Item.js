import React from 'react'



const BlogPost_Item = (props) => {
    const {deleteBlog ,update_Blogs}=props; 
    const dateObj = new Date(props.item.createdDataAt);
     const year = dateObj.getFullYear();
     const month = dateObj.getMonth() ;
     const day = dateObj.getDate();
     const hours = dateObj.getHours();
     const minutes = dateObj.getMinutes();
     const seconds = dateObj.getSeconds()
  return (
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={props.item._id} >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.item.title}
                </th>
                <td className="px-6 py-4"> 
                    <p>{day}-{month}-{year}</p>
                    <p>{hours}-{minutes}-{seconds}</p>
                </td>
                <td className="px-1 py-2 h-10 w-10">
                <img src={props.item.imagePath1} alt="image is Top" />
                </td>
                <td className="px-6 py-4">
                    {props.item.content} 
                </td>
                <td className="px-6 py-4 h-10 w-10">
                    <img src={props.item.imagePath2} alt="Image is middle" />
                </td>
                <td className="px-6 py-4">
                {props.item.footercontent} 
                </td>
                <td className="px-6 py-4">
                {props.item.tag || "Options"} 
                </td>
                <td className="px-3 py-4 text-right">
                    <button onClick={()=>{ update_Blogs(props.item)}}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</button>
                </td>
                <td className=" pr-5 py-4 text-right" >
                <i className="fa fa-trash cursor-pointer" onClick={()=>{deleteBlog(props.item._id)}} >-</i>
                </td>
            </tr>
          
  )
}

export default BlogPost_Item;