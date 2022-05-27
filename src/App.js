import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/ProtectedRoute'
import CreateProject from './components/CreateProject'
import store from './store'
import ViewProjects from './components/ViewProjects'

import { Provider } from 'react-redux'

const App = () => {  

  return (

    <div className='bg-violet-900 h-screen text-black flex'>

      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/viewprojects' element={
              <ProtectedRoute>
                <ViewProjects/>
              </ProtectedRoute>
            } />
            <Route path='/register' element={<Register/>} />
            <Route path='/project' element={
              <ProtectedRoute>
                <CreateProject/>  
              </ProtectedRoute>
            } />
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