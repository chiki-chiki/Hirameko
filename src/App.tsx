import { useState } from 'react'
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

  return (
    <>
      <h1>ひらめこ</h1>
      
      <p>この画面開いてるだけでえらすぎる！</p>
      
      <IdeaForm onAddIdea={handleAddIdea}/>
      <IdeaList ideas={ideas}/>

      
    </>
  )
}

export default App
