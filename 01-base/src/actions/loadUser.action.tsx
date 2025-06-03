import axios from "axios";
import type { UserListResponse } from "../interface/reqres.response";

export const loadUserActions = async(page: number) => {

    try {
        const { data } = await axios.get<UserListResponse>(`https://reqres.in/api/users?page=${page}`,{
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        });

        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }

};