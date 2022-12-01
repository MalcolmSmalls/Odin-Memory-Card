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
      const newArr = prevDatabase.map ( album => {
        if(album.id === id){
          if(album.clicked === true){
            setScore(0)
            return album
          }else{
            setScore(score+1)
            return {...album, clicked: !album.clicked}
          }
        }else{
          return album
        }
      })
      for(let i = 0; i < newArr.length; i++){
        let randIndex = Math.floor(Math.random() * 10)
        let val = newArr.splice(i, 1)
        newArr.splice(randIndex, 0, val)
      }
      console.log(newArr.flat(Infinity))
      return newArr.flat(Infinity)
    })
  }

  const cardCreator = database.map ( album => {
    return <Card title={album.title} photo = {album.photo} key={album.id} id={album.id} handleClick={handleClick}/>
  })

  return (
    <div className="App">
      <div className ="score">
        Current Score: {score}
      </div>
      <div className="card-section">
       {cardCreator}
      </div>
    </div>
  );
}

export default App;
