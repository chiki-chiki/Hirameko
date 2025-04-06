import { useState } from 'react'

type Props={
  onAddIdea:(idea:{title:string;memo:string;})=>void;
};

const IdeaForm = ({onAddIdea}:Props) => {
  const [title,setTitle]=useState("");
  const [memo,setMemo]=useState("");

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();

    if(!title.trim()){
      alert("タイトルは必須です！");
      return;
    }

    onAddIdea({title,memo});

    setTitle("");
    setMemo("");

  }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="アイデアのタイトル" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <br/>
        <textarea  placeholder="ひらめきメモ" value={memo} onChange={(e)=>setMemo(e.target.value)}></textarea>
        <br/>

        <button type="submit">登録する</button>
      </form>
    );
  };
  
  export default IdeaForm;