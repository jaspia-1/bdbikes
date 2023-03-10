import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";



const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoadin] = useState(true);
    const { userRoll, setUserRoll } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://bdbikeserver.vercel.app/user/admin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setIsAdmin(data.isAdmin)
                if (data.isAdmin) {
                    setUserRoll('admin')
                }
                setAdminLoadin(false)
            })

    }, [email])
    return [isAdmin, adminLoading]
};

export default useAdmin;