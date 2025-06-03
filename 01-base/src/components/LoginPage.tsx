import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const {isCheking, isAuthenticated, loginWithPasswordAndemail, user, logOut} = useAuthContext()

    if(isCheking) return <h3>Verificando usuario</h3>


  return (
    <>
      {
        isAuthenticated ? (

          <>
            <h3>Bienvenido</h3>

            <pre>
              {
                JSON.stringify(user, null, 2)
              }
            </pre>

            <button
              onClick={() => logOut()}
              className="bg-blue-500 p-2 text-white rounded-xl mt-2">
              Salir
            </button>
          </>

        ) : (
          <>
            <h3>Ingresar en la aplicacion</h3>

            <button 
              onClick={() => loginWithPasswordAndemail('Agustinlorenzatto@gmail.com', '123456')}
              className="bg-blue-500 p-2 text-white rounded-xl mt-2">
              Ingresar
            </button>
          </>
        ) 
      }
    </>
  )
}
