import { axiosClassic } from "@/api/interceptors";
import { IAuthForm } from "@/types/auth.types";
import { saveTokenStorage } from "./auth-token.service";


export const authService = {
    async main(type: 'login' | 'register', data: IAuthForm) {
        const response = await axiosClassic.post<IAuthForm>(
            `auth/${type}`,
            data
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
        
        return response
    },

    async getNewTokens() {
        const response = await axiosClassic.post<IAuthForm>(
            '/auth/login/access-token'
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
        
        return response
    },

    async logout() {
        const response = await axiosClassic.post<boolean>('auth/logout')
    }
}
