import { useEffect, useState } from "react"
import { token } from "./getSession"
import { getToken } from "./apiClient"
import { jwtDecode } from "jwt-decode"

const useSession = () => {
    const [decodedToken, setDecodedToken] = useState<token>()

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getToken()
            const decodedToken: token = jwtDecode(token)

            setDecodedToken(decodedToken)
        }

        fetchToken()
    }, [])

    return decodedToken
}

export default useSession