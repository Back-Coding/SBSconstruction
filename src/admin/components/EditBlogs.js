import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'

function EditBlogs(props) {

  const navication=useNavigate();
  const adminLoggout = () => {
    console.log("logout click button");
    localStorage.removeItem('token');
    props.showAlert('Loggout succssfully','green');
    navication('/admin');
  }
  return (
    <>
    <div className="bg-gray-100">
  <div className="bg-white shadow">
    <div className="container mx-auto py-4 px-6">
      <h1 className="text-2xl font-semibold text-center">Admin Dashboard</h1>
    </div>
  </div>

  <div className="container mx-auto py-4 px-6">
    <div className="flex">

    <aside className="w-64 scrollbar-hide">
      <nav className="bg-gray-800 text-white h-screen">
        <ul className="p-4">
          <li className="mb-2">
            <Link to="/admin/dashboard" className="block py-2 px-4 rounded-md hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
              <Link to="/admin/editblogs" className="block py-2 px-4 rounded-md hover:bg-gray-700">
              Edit Blog
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/editservice" className="block py-2 px-4 rounded-md hover:bg-gray-700">
              Edit Service
            </Link>
          </li>
          <li className="mb-2">
            <button onClick={adminLoggout} className="block py-2 px-4 rounded-md hover:bg-gray-700"> Loggout</button>
          </li>
        </ul>
      </nav>
    </aside>

      <main className="flex-1 bg-white rounded-md shadow ml-6 p-6 ">
 <form className="my-6">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


<div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Heading 1
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Heading 2
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Heading 3
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 1</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 2</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 3</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 4</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 5</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 6</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 7</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 8</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Data 9</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div> 

      </main>
  </div>
</div>
</div>
    </>
  )
}

export default EditBlogs