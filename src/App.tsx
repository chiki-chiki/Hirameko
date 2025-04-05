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
