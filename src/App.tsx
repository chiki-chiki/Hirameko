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
  
  useEffect(()=>{
    const savedIdeas=localStorage.getItem("ideas");
    if(savedIdeas){
      setIdeas(JSON.parse(savedIdeas));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("ideas",JSON.stringify(ideas));
  },[ideas]);

  return (
    <>
      <h1>ひらめこ</h1>
      
      <p>この画面開いてるだけでえらすぎる！</p>
      
      <IdeaForm onAddIdea={handleAddIdea}/>
      <IdeaList ideas={ideas} onDeleteIdea={handleDeleteIdea}/>

      
    </>
  )
}

export default App
