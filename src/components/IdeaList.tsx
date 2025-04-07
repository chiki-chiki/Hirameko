import { useState } from 'react'


type Idea={
    title:string;
    memo:string;
    createdAt:string;
}

type Props={
    ideas:Idea[];
    onDeleteIdea:(index:number)=>void;
    editingIndex:number|null;
    onEditClick:(index:number)=>void;
    onEditSubmit:(index:number,updated:Idea)=>void;
};

const IdeaList=({ideas,onDeleteIdea,editingIndex,onEditClick,onEditSubmit}:Props)=>{
      const [title,setTitle]=useState("");
      const [memo,setMemo]=useState("");
    return(
        <ul>
            {ideas.map((idea,index)=>(
                <li key={index}>
                    {editingIndex===index?(
                        <>
                        <input value={idea.title} onChange={(e)=>{setTitle(e.target.value)}}/>
                        <textarea value={idea.memo} onChange={(e)=>{setMemo(e.target.value)}}/>
                        <button onClick={()=>onEditSubmit(index,{title,memo,createdAt:idea.createdAt})}>保存</button>
                        </>
                    ):(
                        <>
                        <strong>{idea.title}</strong><br />
                        {idea.memo}<br />
                        <small>{idea.createdAt}</small>
                        <button onClick={()=>onDeleteIdea(index)}>削除</button>
                        <button onClick={()=>onEditClick(index)}>編集</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
);
};

export default IdeaList;