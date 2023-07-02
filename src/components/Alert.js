import React from 'react'

function Alert(props) {
   
//   return (
//     props.alert && <div className={`flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-${props.alert.color}-50 mt-1 dark:bg-${props.alert.color}-800 dark:text-green-400" role="alert`}>
//         <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
//         <span className="sr-only">Info</span>
//         <div>
//     <span className="font-medium">{props.alert.msg}</span>  
//   </div>
// </div>
//   )


return( props.alert && <div className={`fixed z-50 top-4 right-4 max-w-sm w-full p-4 rounded-md ${props.alert.color === 'green' ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'} shadow-lg`}>
      <div className="flex items-center">
        {props.alert.color === 'green' }
       <span className="font-medium text-sm">{props.alert.msg}</span>
      </div>
</div>

)}

export default Alert