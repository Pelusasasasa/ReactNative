import { useUsers } from '../hooks/useUsers';
import { UserRow } from './UserRow'


export const UserPage = () => {

    const { users, nextPage, prevPage } = useUsers();

  return (
    <>
        <h3>Usuario</h3>

        <table className='w-[500px] bg-black rounded-xl text-white'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(elem => (
                    <UserRow key={elem.id} user={elem}/>
                ))}
            </tbody>
        </table>

        <div className='flex justify-between w-[500px] mt-2'>
            <button className='p-2 bg-blue-500 text-white rounded-[5px]' onClick={prevPage}>
                Anteriores
            </button>
            <button className='p-2 bg-blue-500 text-white rounded-[5px]' onClick={nextPage}>
                Siguientes
            </button>
        </div>
    </>
  )
}
