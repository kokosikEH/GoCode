import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
            <div className='back'>
      <div className="nav">
      <a href="https://ftim.ru/" target="_blank" draggable="false" display="false">
        <img src="logo.svg"  className='left' draggable="false" width="30%"/>
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" draggable="false" display="false">
        <img src="MISIShunters.svg"className='right' draggable="false" width="30%"/>
        </a>
      </div>

      <div>

        
      </div>
      <br/><br/><br/><br/><br/>
      <h1>Хакатон от фонда ТИМ</h1>

      
      </div>
      <div>
      <img src="Group.png"draggable="false"  width="100%"/>
      </div>
      <div className="card">
        
        <h2>описание</h2>
        <br/>
        тут будет описание продукта
        <br/>
        а пока вот анекдот: не покупайте кольца кальмаров возле синагоги. Это не кальмары!
        <br/>
        <a href="https://t.me/TIMAcceleratorBot" target="_blank" draggable="false" display="false">
        <img src="tg_logo.svg" className="logo react" draggable="false"  width="100px" float= "left"/>
        </a>
      </div>
      <table className="table1">
        <tr>
          <td>
          <a href="https://t.me/NeAlyssa" target="_blank" draggable="false"  display="false">
            <img src="alisa.png"className='left'draggable="false"  width="100%" float= "left"/>
            </a>
          </td>
          <td>
          <a href="https://t.me/BurykinaA" target="_blank" draggable="false" display="false">
            <img src="alina.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
          <td>
          <a href="https://t.me/t0efL" target="_blank" draggable="false" display="false">
            <img src="vadim.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
          <td>
          <a href="https://t.me/said_azizov" target="_blank" draggable="false" display="false">
            <img src="said.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
          <td>
            
          <a href="https://t.me/kokosikEH" target="_blank" draggable="false" display="false">
            <img src="liza.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
        </tr>
      </table>

    </div>
  )
}

export default App
