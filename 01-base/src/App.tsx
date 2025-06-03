// import { BasicTypes } from './typesCript/BasicTypes'
// import { ObjctLiterals } from './typesCript/ObjctLiterals'
// import { BasicFunctions } from './typesCript/BasicFunctions'

import './App.css'
import { FormPage } from './components/FormPage'
import { UserPage } from './components/UserPage'
// import { Counter } from './components/Counter'
// import { LoginPage } from './components/LoginPage'
import { AuthProvider } from './context/AuthContext'


function App() {


  return (
    <AuthProvider>
      <h1 className='text-3xl font-bold underline'>React + TS</h1>

      {/* <BasicTypes/> */}
      {/* <ObjctLiterals/> */}
      {/* <BasicFunctions/> */}
      {/* <Counter/> */}
      {/* <LoginPage/> */}
      {/* <UserPage/> */}
      <FormPage/>
    </AuthProvider>
  )
}

export default App
