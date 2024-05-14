import React, { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { query, where, getDocs } from "firebase/firestore";
import { userRef } from "../utils/FirebaseConfig";
import { UserType } from "../utils/Types";

export default function useFetchUsers() {
    const [users, setUsers] = React.useState<Array<UserType>>([]);
    const uid = useAppSelector((state) => state.auth.userInfo?.uid);

    useEffect(() => {
        if(uid){
            const getUsers = async () => {
                const firestoreQuery = query(userRef, where("uid","!=",uid));
                const data = await getDocs(firestoreQuery);
                const firebaseUsers:Array<UserType> = []
                data.forEach((doc)=>{
                    const userData = doc.data() as UserType;
                    firebaseUsers.push({
                        ...userData,
                        label:userData.name,
                    })
                })
                setUsers(firebaseUsers)
            }
        getUsers();
        }
    }, [uid]);
    return [users]
}