  import './App.css';
  import Card from "./Components/Card"
  import {nanoid} from "nanoid"
  import data from "./data"
  import React from "react"

function App() {

  const [ database, setDatabase ] = React.useState(data)
  const [ score, setScore ] = React.useState(0)


  function handleClick(event, id){
    setDatabase(prevDatabase => {
      return prevDatabase.map ( album => {
        if(album.id === id){
          if(album.clicked === true){
            setScore(1)
            return {...album, clicked: true}
          }else{
            setScore(score+1)
            return {...album, clicked: !album.clicked}
          }
        }
        return album
      })
    })

  }

  const cardCreator = database.map ( album => {
    return <Card title={album.title} photo = {album.photo} key={album.id} id={album.id} handleClick={handleClick}/>
  })

  return (
    <div className="App">
      {score}
      {cardCreator}
    </div>
  );
}

export default App;
