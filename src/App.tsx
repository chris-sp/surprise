import {useState} from 'react'
import Gif from "./assets/giphy.gif";
import Yas from "./assets/yas.gif";
import { Fireworks } from 'fireworks-js'


import './App.css'

function App() {
    const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [position, setPosition] = useState<[number, number]>([0, 0])



    const accept = () => {
        setIsAnswered(true);
        const container = document.querySelector('.fireworks')
        if(container){
            const fireworks = new Fireworks(container, {   })
            fireworks.start();
        }
    }

    const handleRandomizePosition = () => {
        const ps1 = Math.floor(Math.random() * 301) - 150;
        const ps2 = Math.floor(Math.random() * 301) - 150;

        setPosition([ps1, ps2])
    }

    const getQuestion = () => {

      return (<div className={"contentBox"}>
          <div className={"label"}>
              Do you wanna go out with me?
          </div>
          <div>
              <img src={Gif} alt={'gif'} width={380}/>

          </div>
          <div className={"buttonGroup"}>
              <button className={"button"} onClick={()=> accept()}>yes</button>
              <button onMouseEnter={handleRandomizePosition} className={"button animated"} style={{top: position[0]+"px", left: position[1] + "px"}}>no</button>
          </div>
      </div>)
    }

    const getYes = () => {
      return (<div className={"contentBox"}>
          <div className={"label"} style={{fontSize: 40}}>
              YAASSSS
          </div>
          <div>
              <img src={Yas} alt={'yas'} width={340}/>
          </div>
              <div className={"label"}>
                  See you soon with my surpirse!
              </div>
          </div>
      )
    }

  return (
    <div className={ isAnswered ? "root dimmed" : "root"}>
        <div className={'fireworks'}/>
        {isAnswered ? getYes(): getQuestion()}
    </div>
  )
}

export default App
