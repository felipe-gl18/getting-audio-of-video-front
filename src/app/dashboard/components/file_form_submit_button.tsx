'use client'
import { useFormStatus } from "react-dom"
export default function FileFormSubmitButton(){
    const { pending } = useFormStatus()
    return(
        <button type="submit" disabled={pending} className={`py-2 px-6 bg-blue-300 w-fit rounded-xl font-bold hover:bg-blue-400 transition-colors duration-500 ${pending ? "opacity-40" : "opacity-100"}`}>
            {pending ? "Carregando" : "Upload"}
        </button>
    )
}