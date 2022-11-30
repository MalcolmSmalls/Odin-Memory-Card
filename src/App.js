  import './App.css';
  import Card from "./Components/Card"
  import {nanoid} from "nanoid"
  import data from "./data"
  import React from "react"

function App() {

  const [ database, setDatabase ] = React.useState(data)


  function handleClick(event, id){
    console.log(id)
    console.log(event)
    setDatabase(prevDatabase => {
      return prevDatabase.map ( album => {
        if(album.id === id){
          return {...album, clicked: !album.clicked}
        }
        return album
      })
    })
    console.log(database)
  }

  const cardCreator = database.map ( album => {
    return <Card title={album.title} photo = {album.photo} key={album.id} id={album.id} handleClick={handleClick}/>
  })

  return (
    <div className="App">
      {cardCreator}
    </div>
  );
}

export default App;
