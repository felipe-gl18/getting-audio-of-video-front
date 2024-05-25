import FileForm from "./components/file_form";
import FilesList from "./components/files_list";
export default async function Dashboard() {
  async function handleFilesList(){
    'use server'
    const response = await fetch("http://localhost:3002", {method: "GET", next: {
      tags: ["get_files_ids"]
    }})
    const data = await response.json();
    return data;
}
  return (
    <main className="flex flex-col w-full p-14 items-start gap-20">
         <FileForm handleFilesList={handleFilesList} />
         <FilesList handleFilesList={handleFilesList}/>
    </main>
  );
}