import ProfileCard from "./components/ProfileCard";
import Feed from "./components/Feed"
import Card from "./components/Card"

import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <ProfileCard />
      
      <div className="posts-list">
        <Feed />
      </div>
    
      <div className="asides">
        <Card 
          title="Aniversariantes"
          iconUrl="https://img.icons8.com/office/16/000000/birthday.png"
          content="Nenhum dos seus amigos faz aniversário hoje"
          />
        <Card 
          title="Pendências"
          iconUrl="https://img.icons8.com/office/16/000000/hourglass--v1.png"
          additionalText={new Date().toDateString()}
          content="Você não possui nenhuma pendência para hoje"
        />
      </div>
    </div>
  );
}

export default App;
