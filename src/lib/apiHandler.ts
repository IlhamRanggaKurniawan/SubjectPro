class Api {
    token: () => Promise<string | null>

    constructor(tokenFunctions: () => Promise<string | null>) {
        this.token = tokenFunctions
    }

    get = async (endpoint: string, { cache }: { cache: RequestCache }) => {
        const token = await this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
            method: "GET",
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            },
            cache
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error)
        }

        return data
    }

    post = async (endpoint: string, { body, cache }: { body: object, cache: RequestCache }) => {
        const token = await this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(body),
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            },
            cache
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error)
        }

        return data
    }

    patch = async (endpoint: string, { body, cache }: { body: object, cache: RequestCache }) => {
        const token = await this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
            method: "PATCH",
            credentials: "include",
            body: JSON.stringify(body),
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            },
            cache
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error)
        }

        return data
    }

    delete = async (endpoint: string) => {
        const token = await this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            }
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error)
        }

        return data
    }
}

export default Api