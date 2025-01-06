class Api {
    token: () => Promise<string | null>

    constructor(tokenFunctions: () => Promise<string | null>) {
        this.token = tokenFunctions
    }

    get = async (endpoint: string, { cache }: { cache: RequestCache }) => {
        const token = this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
            method: "GET",
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            },
            cache
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const data = await response.json()

        return data
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    post = async (endpoint: string, { body, cache }: { body: object, cache: RequestCache }) => {
        const token = this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(body),
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            },
            cache
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const data = await response.json()

        return data
    }

    patch = async (endpoint: string, { body, cache }: { body: object, cache: RequestCache }) => {
        const token = this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
            method: "PATCH",
            credentials: "include",
            body: JSON.stringify(body),
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            },
            cache
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const data = await response.json()

        return data
    }

    delete = async (endpoint: string) => {
        const token = this.token()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
                Cookie: `AccessToken=${token}`
            }
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const data = await response.json()

        return data
    }
}

export default Api