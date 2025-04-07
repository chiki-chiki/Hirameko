import { useEffect,useState } from 'react'
import './App.css'
import IdeaForm from './components/IdeaForm'
import IdeaList from './components/IdeaList'


type Idea={
  title:string;
  memo:string;
  createdAt:string;
}

function App() {
  
  
  const[ideas,setIdeas]=useState<Idea[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [editingIndex,setEditingIndex]=useState<number|null>(null);



  useEffect(()=>{
    const savedIdeas=localStorage.getItem("ideas");
    console.log("初回読み込み localStorage:", savedIdeas);
    if(savedIdeas){
      setIdeas(JSON.parse(savedIdeas));
    }
    setIsInitialized(true);
  },[]);

  useEffect(()=>{
    //console.log("保存する ideas：",ideas);
    if(isInitialized){
      localStorage.setItem("ideas",JSON.stringify(ideas));
    }
  },[ideas, isInitialized]);

  const handleAddIdea=(idea:Omit<Idea,"createdAt">)=>{
    const newIdea:Idea={
      ...idea,
      createdAt: new Date().toLocaleDateString(),
    };
    setIdeas([...ideas,newIdea]);
  };

  const handleDeleteIdea=(indexToDelete:number)=>{
    setIdeas(ideas.filter((_,index)=>index!==indexToDelete));
  }
  //console.log("現在の ideas", ideas);

  const handleEditClick=(index:number)=>{
    setEditingIndex(index);
  };

  const handleEditSubmit=(index:number,updatedIdea:Idea)=>{
    const newIdeas=[...ideas];
    newIdeas[index]=updatedIdea;
    setIdeas(newIdeas);
    setEditingIndex(null);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-rose-400 tracking-wide mb-4 text-center drop-shadow-md">hirameco</h1>
      
      <IdeaForm onAddIdea={handleAddIdea}/>
      <IdeaList ideas={ideas} onDeleteIdea={handleDeleteIdea} editingIndex={editingIndex} onEditClick={handleEditClick} onEditSubmit={handleEditSubmit}/>

      
    </>
  )
}

export default App
