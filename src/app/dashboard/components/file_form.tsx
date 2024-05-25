import { revalidateTag } from "next/cache"
import FileFormSubmitButton from "./file_form_submit_button"
export default async function FileForm({handleFilesList}: any){
    const amountOfFiles = await handleFilesList()
    async function handleFileUpload(form: FormData){
        'use server'
        await fetch("http://localhost:3002", {method: 'POST', body: form}, )
        revalidateTag("get_files_ids")
    }
    return (
        <>
            {amountOfFiles.length >= 4 ? (
                <div>
                    <p className="font-bold">
                        You've reached the files limit!
                    </p>
                </div>
            ) : (
                <form action={handleFileUpload} method="POST" className="flex flex-row items-center gap-4">
                    <input className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-bl-50 file:text-slate-600
                        file:transition-colors file:duration-500
                        hover:file:bg-neutral-900 hover:file:text-white " type="file" name="video" id="" accept=".mp4"
                    />
                    <select className="w-42 text-black px-4 py-2 rounded-xl appearance-none" name="extension">
                        <option value="mp3">mp3</option>
                        <option value="aac">aac</option>
                    </select>
                    <FileFormSubmitButton />
                </form>
            )}
        </>
    )
}