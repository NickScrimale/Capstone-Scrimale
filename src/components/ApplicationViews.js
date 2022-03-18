import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { QuestionForm } from "./questions/QuestionForm"
import { QuestionCard } from "./questions/QuestionCard"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
      return isAuthenticated ? children : <Navigate to="/login" />
    };
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("trivia_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("trivia_user") !== null)
    }
  
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={
            <PrivateRoute>
              <Trivia />
            </PrivateRoute>
          } />
          <Route path="/questions/create" element={<QuestionForm />} />

          <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
          <Route exact path="/register" element={<Register />} />
          
  
          <Route exact path="/postList" element={<PostList />} />
          <Route path="/postFeed" element={<PostCard />} />
          <Route path="/postForm" element={<PostForm />} />
  
          <Route  path="/postList" element={
              <PrivateRoute>
                <PostList />
              </PrivateRoute>
          }/>
        </Routes>
      </>
    )
  }