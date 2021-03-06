import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   Navigate,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="react-redux-example/"
            element={<><AddPostForm /><PostsList /></>}
          />
          <Route
            path="react-redux-example/posts/:postId"
            element={<SinglePostPage />}
          />
          <Route
            path="react-redux-example/editPosts/:postId"
            element={<EditPostForm />}
          />
          {/* <Navigate to="/" /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App