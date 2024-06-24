import { useState } from 'react';
import './App.css';
import DND from './DreagAndDrop';
import Header from './Header/Header';
import MusicPlayer from './musicPlayer';

const dataItems = [
  {
    id: 1,
    path: './audio1.mp3',
    title: "Orange Daisy",
    image:
      "https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 2,
    path: './audio2.mp3',
    title: "Sunflower",
    image:
      "https://images.pexels.com/photos/1021947/pexels-photo-1021947.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 3,
    path: './audio3.mp3',
    title: "Purple - YellowFlower",
    image:
      "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 4,
    path: './audio4.mp3',
    title: "White Petaled Flowers",
    image:
      "https://images.pexels.com/photos/54388/white-flowers-delicate-flowers-three-flowers-54388.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 5,
    path: './audio5.mp3',
    title: "A Purple Flower",
    image:
      "https://images.pexels.com/photos/13087944/pexels-photo-13087944.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 6,
    path: './audio1.mp3',
    title: "Purple Flower",
    image:
      "https://images.pexels.com/photos/14987632/pexels-photo-14987632.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  }
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(dataItems[0]);

  return (
    <div className="App">
      <div className="container">
        <div className="column column-1">
          <img src='./logo.png'
            className='imageStyle' />
          <img src='./Menu.png'
            className='menuStyle'
          />

          <img src='./General.png'
            className='bottom_left_content' />
        </div>
        <div className="column column-60">
          <Header className='headerStyle' />
          <img src='./Pic.png'
            className='imageStyle2' />


          <DND
            dataItems={dataItems}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            
          />

        </div>
        <div className="column column-3">
          <MusicPlayer
            dataItems={dataItems}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </div>


  )
}

export default App;
