'use client' 

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { Heading } from '@/components/ui/Heding'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function Auth() {

    const {register, handleSubmit, reset} = useForm<IAuthForm>({
        mode: 'onChange'
    })

    const [isLoginForm, setIsLoginForm] = useState(false)

    const { push } = useRouter()

    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
        onSuccess() {
            toast.success('Succsessfully login!')
            reset()
            push(DASHBOARD_PAGES.HOME)
        }
    })

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        mutate(data)
    } 

    return (
        <div className='flex min-h-screen '>
            <form
                className='w-1/4 m-auto bg-sidebar shadow rounded-xl p-layout '
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading title='Auth'/>
                <Field
                    id='email'
                    label='Email:'
                    extra='mb-6'
                    placeholder='Enter email'
                    {...register('email', {
                        required: 'required email'
                    })}
                />

                <Field
                    id='password'
                    label='Password:'
                    extra='mb-6'
                    placeholder='Enter password'
                    {...register('password', {
                        required: 'required password'
                    })}
                />

                <div
                    className='flex items-center gap-5 justify-center'
                >
                    <Button onClick={() => setIsLoginForm(true)}>Login</Button>
                    <Button onClick={() => setIsLoginForm(false)}>Register</Button>
                </div>
            </form>
        </div>
    )
}
