'use client'

import { TypeUserForm } from "@/types/auth.types"
import { SubmitHandler, useForm } from "react-hook-form"
import { useInitialData } from "./useInitialData"
import { useUpdateSettings } from "./useUpdateSettings"
import { Field } from "@/components/ui/fields/Field"
import { Button } from "@/components/ui/buttons/Button"

export function Settings() {
    const { register, handleSubmit, reset } = useForm<TypeUserForm>({
        mode: 'onChange'
    })

    useInitialData(reset)

    const { mutate, isPending } = useUpdateSettings()
    
    const onSubmit: SubmitHandler<TypeUserForm> = data => {
        const { password, ...rest } = data
        
        mutate({
            ...rest,
            password: password || undefined
        })
    }

    return <div>
        <form
            className="w-2/4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <Field
                        id="email"
                        label="Email"
                        placeholder="Enter email:"
                        {...register('email')}
                        extra="mb-4"
                    />

                    <Field
                        id="name"
                        label="Name"
                        placeholder="Enter name:"
                        {...register('name')}
                        extra="mb-4"
                    />

                    <Field
                        id="password"
                        label="Password:"
                        placeholder="Enter password:"
                        {...register('password')}
                        extra="mb-10"
                    />
                </div>

                <div>
                    <Field
                        id="workInterval"
                        label="Worl Interval (min.):"
                        placeholder="Enter work Interval (min.):"
                        isNumber
                        {...register('workInterval', {
                            valueAsNumber: true
                        })}
                        extra="mb-4"
                    />
                </div>
            </div>

            <Button
                type='submit'
                disabled={isPending}
            >
                Save
            </Button>
        </form>
    </div>
}