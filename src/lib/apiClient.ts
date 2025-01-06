import { jwtDecode } from "jwt-decode";
import Api from "./apiHandler";

export const getToken = async () => {
    let accessToken = localStorage.getItem("AccessToken");

    if (accessToken) {
        const decodedToken = jwtDecode<{ exp?: number }>(accessToken);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp && (decodedToken.exp - currentTime) <= 10) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/token`, {
                method: "GET",
                credentials: "include",
            });

            const { accessToken: newAccessToken } = await response.json();
            if (!newAccessToken) {
                throw new Error("Failed to refresh access token.");
            }

            localStorage.setItem("AccessToken", newAccessToken);
            accessToken = newAccessToken;
        }
    } else {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/token`, {
            method: "GET",
            credentials: "include",
        });

        const { accessToken: newAccessToken } = await response.json();
        if (!newAccessToken) {
            throw new Error("Failed to fetch access token.");
        }

        localStorage.setItem("AccessToken", newAccessToken);
        accessToken = newAccessToken;
    }

    return accessToken;
};

const apiClient = new Api(getToken);

export default apiClient;
