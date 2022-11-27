import React from 'react';
import "./App.css";
import {PostLists} from './components/PostLists';
import { Routes,Route } from 'react-router-dom'
import { Post } from "./components/Post";
import { PostProvider } from "./context/PostContext";



const App = () => {
	return (
		<div className='container'>
			<Routes>
				<Route path="/" element={<PostLists />} />
				<Route
				path="/posts/:id"
				element={
					<PostProvider>
						<Post />
					</PostProvider>
				}
				/>
			</Routes> 
		</div>
	)
}

export default App;



