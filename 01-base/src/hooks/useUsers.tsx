import { useEffect, useRef, useState } from "react"
import { User } from "../interface/reqres.response"
import { loadUserActions } from "../actions/loadUser.action";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef  = useRef(1);


    useEffect(() => {
        loadUserActions(1)
        .then(setUsers);
    }, [])

    const nextPage = async() => {
      currentPageRef.current++;
      const users = await loadUserActions(currentPageRef.current);

      if(users.length > 0){
        setUsers(users);
      }else{
        currentPageRef.current--;
      }
    }
    const prevPage = async() => {

      if(currentPageRef.current < 1) return;

      currentPageRef.current--;
      const users = await loadUserActions(currentPageRef.current);
      setUsers(users);
      
    }

  return {
    users,

    prevPage,
    nextPage
  }
}
