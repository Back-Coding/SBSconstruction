import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const host = "http://localhost:5000"

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  // Fetch all blogs from the backend API
  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get(`${host}/admin/api/fetchblogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  // Update a blog with customized image content
  const updateBlog = async (blogId, updatedBlogData) => {
    console.log(blogId,updatedBlogData)
    try {
      // const response = await axios.put(`${host}/admin/api/update-blogs/${blogId}`, {headers:{'auth-token':localStorage.getItem('token')},updatedBlogData});
      // const updatedBlog = response.data;
      const response = await fetch(`${host}/admin/api/update-blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify(updatedBlogData)
      });
      const json = await response.json(); 
  
       let  newNotes= JSON.parse(JSON.stringify(updatedBlogData))
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === json._id ? json : blog))
      );
    } catch (error) {
      console.error('Failed to update blog:', error);
    }
  };

  // Delete a blog
  const deleteBlog = async (blogId) => {
    try {

      await axios.delete(`${host}/admin/api/delete-blog/${blogId}`,{headers:{'auth-token':localStorage.getItem('token')}});
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  // Create a new blog with customized image content
  const createBlog = async (title,content,imagePath1,imagePath2,tag,footercontent) => {
    try {
      // const response = await axios.post(`${host}/admin/api/addblog`,{headers:{'auth-token':localStorage.getItem('token')}}, {body:{newBlogData}});
      // const newBlog = response.data;
      // setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      const response = await fetch(`${host}/admin/api/addblog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title,content,imagePath1,imagePath2,tag,footercontent})
      });
  
      const note = await response.json();
      setBlogs(blogs.concat(note))
    
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        fetchAllBlogs,
        updateBlog,
        deleteBlog,
        createBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
