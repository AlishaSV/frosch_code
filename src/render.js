import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const reRenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}
