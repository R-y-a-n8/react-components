import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.jsx"
import "./index.css"
import Article from "./components/Article.jsx"
import Comment from "./components/Comment.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Article/>
    <Comment/>
    
  </React.StrictMode>,
)
