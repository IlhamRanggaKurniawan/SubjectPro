import { jwtDecode } from "jwt-decode"
import { getToken } from "./api"

export type token = {
    id: number,
    username: string,
    email: string,
    role: string,
    classId: number,
    exp: number
}

const getSession = async () => {
    try {
        const token = await getToken()

        const decodedToken: token = jwtDecode(token)

        return decodedToken
    } catch (error) {
        console.log(error)
    }
}

export default getSession