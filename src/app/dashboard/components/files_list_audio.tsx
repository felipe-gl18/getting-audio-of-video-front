import { revalidateTag } from "next/cache";
import FilesListAudioDeleteButton from "./files_list_audio_delete_button";

export default async function FilesListAudio({video_uuid, video_extension}: any){    
    const response = await fetch(`http://localhost:3002/video/${video_uuid}/${video_extension}`, {cache: "no-cache"});
    const video = await response.json();    
    async function handleDeleteFile(form: FormData){
        'use server'
        await fetch(`http://localhost:3002/video/${video_uuid}/${video_extension}`, {method: "DELETE"})
        revalidateTag("get_files_ids")
    }
    return (
        <div className="flex flex-row w-full gap-4">
            <audio controls key={video_uuid} className="w-3/12">
                <source src={`data:audio/mpeg;base64,${video.file_content}`} type="audio/mpeg" />
            </audio>
            <p className="py-4 px-6 bg-blue-300 rounded-xl w-1/3 text-center font-bold">{video.file_name}</p>
            <p className="py-4 px-6 bg-blue-300 rounded-xl w-2/12 text-center font-bold">{video.file_size}</p>
            <p className="py-4 px-6 bg-blue-300 rounded-xl w-1/12 text-center font-bold">{video.file_extension}</p>
            <form action={handleDeleteFile} method="POST" className="w-1/12">
                <FilesListAudioDeleteButton />
            </form>
        </div>
    )
}