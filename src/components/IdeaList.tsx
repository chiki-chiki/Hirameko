type Idea={
    title:string;
    memo:string;
    createdAt:string;
}

type Props={
    ideas:Idea[];
    onDeleteIdea:(index:number)=>void;
};

const IdeaList=({ideas,onDeleteIdea}:Props)=>{
    return(
        <ul>
            {ideas.map((idea,index)=>(
                <li key={index}>
                    <strong>{idea.title}</strong><br />
                    {idea.memo}<br />
                    <small>{idea.createdAt}</small>
                    <button onClick={()=>onDeleteIdea(index)}>削除</button>
                </li>
            ))}
        </ul>
);
};

export default IdeaList;