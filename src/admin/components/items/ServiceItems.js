import React from 'react'



const ServiceItems = (props) => {
  const {deleteService ,update_Service}=props; 


  return (
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={props.key}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.item.title}
                </th>
                <td className="px-6 py-4">
                {props.item.type} 
                </td>
                <td className="px-6 py-4">
                    {props.item.description} 
                </td>
                <td className="px-6 py-4">
                {props.item.tag} 
                </td>
                <td className="px-3 py-4 text-right">
                    <button onClick={()=>{ update_Service(props.item)}}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</button>
                </td>
                <td className=" pr-5 py-4 text-right" >
                <i className="fa fa-trash cursor-pointer" onClick={()=>{deleteService(props.item._id)}} >-</i>
                </td>
            </tr>
          
  )
}

export default ServiceItems