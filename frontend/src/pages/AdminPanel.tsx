import axios from "axios";
import { useState } from "react";
function AdminPanel() {
    const [hide,setHide]=useState(true);
    const [gitUserName,setGitUserName]=useState('');
    const [gitRepoName,setGitRepoName]=useState('');
    const [autherId,setAutherId]=useState('');
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [file,setFile]=useState<File>();
    const fileformSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData();
        if (!file) {
            return;
        }
        formData.append('file',file);
        formData.append('upload_preset','ml_default');
        const responce = await axios.post("https://api.cloudinary.com/v1_1/dmqb9tfdc/image/upload",formData);
        console.log(responce);
    }
    const loginFormSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setHide(false);
    }
  return (
    <div className="bg-black h-screen text-white flex relative justify-center items-center">
        <button onClick={()=>setHide(true)} className={`bg-blue-700 ${hide?'hidden':''} p-5 rounded-lg absolute right-0 top-0`}>log-out</button>
        <form onSubmit={loginFormSubmit} className={`bg-purple-800 absolute ${hide?'flex flex-col':'hidden'} text-black w-[25rem] h-[15rem] p-10 gap-2`}>
            <input type="text" name="" id="" placeholder="username" className="p-4" />
            <input type="text" name="" id="" placeholder="email" className="p-4" />
            <button type="submit" className="bg-blue-800 p-3 text-white">submit</button>
        </form>
        <form onSubmit={fileformSubmit} className={`bg-slate-900 p-3 ${hide?"hidden":"flex flex-col"} gap-2 w-[50%] h-auto`}>
            <input type="file" onChange={(e)=>{setFile(e.target.files?.[0])}} name="imageFile" id="" />
            <input type="text" name="" id="" value={gitUserName} onChange={(e)=>setGitUserName(e.target.value)} placeholder="git user-name" className="p-5 text-black" />
            <input type="text" name="" id="" value={gitRepoName} onChange={(e)=>setGitRepoName(e.target.value)} placeholder="git-hub repo name" className="p-5 text-black"/>
            <input type="text" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title" className="p-5 text-black"/>
            <input type="text" name="" id="" value={content} onChange={(e)=>setContent(e.target.value)} placeholder="content" className="p-5 text-black"/>
            <button type="submit" className="bg-blue-700 p-3 rounded-md w-[10%] hover:bg-blue-600">submit</button>
        </form>
    </div>
  )
}

export default AdminPanel