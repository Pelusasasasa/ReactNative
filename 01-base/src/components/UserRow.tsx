import type { User } from "../interface/reqres.response"

interface Props {
    user: User
}

export const UserRow = ({user}: Props) => {

    console.log(user)
  return (
    <tr className='p-2'>
                    <td>
                        <img src={user.avatar} className="rounded-full w-14 p-2" alt="user Avatar" />
                    </td>
                    <td>
                        {user.first_name} {user.last_name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                </tr>
  )
}
