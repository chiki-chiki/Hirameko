type Idea={
    title:string;
    memo:string;
    createdAt:string;
}

type Props={
    ideas:Idea[];
};

const IdeaList=({ideas}:Props)=>{
    return(
        <ul>
            {ideas.map((idea,index)=>(
                <li key={index}>
                    <strong>{idea.title}</strong><br />
                    {idea.memo}<br />
                    <small>{idea.createdAt}</small>
                </li>
            ))}
        </ul>
);
};

export default IdeaList;