import { useForm } from "react-hook-form";

type FormInputs = {
    email: string;
    password: string;
}

export const FormPage = () => {

    const { 
        register,
        handleSubmit
    } = useForm<FormInputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm })
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-[500px] space-y-2">
            <input 
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-xl"
                {...register('email', {required: true})}
            />
            <input 
                type="password"
                placeholder="password"
                className="border border-gray-300 p-2 rounded-xl"
                {...register('password', {required: true})}
            />

             <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl">Ingresar</button>
        </div>
    </form>
  )
}
