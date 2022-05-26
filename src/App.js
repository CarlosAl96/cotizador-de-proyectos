import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/ProtectedRoute'
import CreateProject from './components/CreateProject'
import store from './store'

import { Provider } from 'react-redux'

const App = () => {  

  return (

    <div className='bg-violet-900 h-screen text-black flex'>

      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/project' element={<CreateProject/>} />
            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile/>  
              </ProtectedRoute>
            } />
          </Routes>        
        </AuthProvider>
      </Provider>


    </div>
  )
}

export default App