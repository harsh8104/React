import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../routes/App'
import './index.css'
import Home from '../routes/Home'
import Bag from '../routes/Bag'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import myntraStore from '../store'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:"/",element:<Home/>
        },
        {
          path:'/Bag',
          element:<Bag/>
        }
      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
