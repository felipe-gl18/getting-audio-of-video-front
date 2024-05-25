'use client'
import { useFormStatus } from "react-dom"
export default  function FilesListAudioDeleteButton(){
    const {pending} = useFormStatus()
    return <button type="submit" disabled={pending} className={`py-4 px-4 bg-red-300 w-full rounded-xl font-bold hover:bg-red-400 transition-colors duration-500 ${pending ? "opacity-40" : "opacity-100"}`}>{pending ? "Deletando" : "Deletar"}</button>
}