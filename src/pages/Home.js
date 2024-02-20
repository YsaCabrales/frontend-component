import React from "react";
import { useState, useEffect } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
import BlogDetails from "./BlogDetails";
import "./styles/Home.css";
import BlogList from "./BlogList";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Home = () => {
	const { blogs, dispatch } = useBlogsContext();

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/posts");
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_BLOGS", payload: json });
			} 
		};

		fetchPosts();
	}, [dispatch]);

	return (
		<div className="home">
			<div className="bloglist">{blogs && blogs.map((blog) => <BlogList blog={blog} key={blog._id} />)}</div>
		</div>
  )
 
};

export default Home;
