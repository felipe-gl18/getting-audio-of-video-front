import FilesListAudio from "./files_list_audio";
export default async function FilesList({handleFilesList}: any){
    const data = await handleFilesList();
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row w-full gap-4">
                <p className="py-4 px-6 rounded-full w-3/12 text-center text-slate-600 font-bold">Arquivo</p>
                <p className="py-4 px-6 rounded-full w-1/3  text-center text-slate-600 font-bold">UUID</p>
                <p className="py-4 px-6 rounded-full w-2/12 text-center text-slate-600 font-bold">Tamanho (Bytes)</p>
                <p className="py-4 px-6 rounded-full w-1/12 text-center text-slate-600 font-bold">Extensão</p>
                <p className="py-4 px-6 rounded-full w-1/12 text-center text-slate-600 font-bold">Deletar</p>
            </div>
            {data.length == 0 ? 
                <div className="w-full text-center py-2 font-bold">
                    <p className="text-neutral-400">Nenhum vídeo encontrado...</p>
                </div> : 
                data.map((video: any) => (
                    <div key={video} className="w-full">
                        <FilesListAudio video_uuid={video.video_uuid} video_extension={video.video_extension} />
                    </div>
                ))
            }
        </div>
    )
}