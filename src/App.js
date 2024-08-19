import { useState } from 'react';
import './App.css';
import DND from './Component/DreagAndDrop/index';
import Header from './Component/Header/Header';
import MusicPlayer from './Component/musicPlayer/index';
import useFetch from './hooks/useFetch';
import Layout from './Layout/layout';
import { Provider } from 'react-redux'
import store from './states/store'


const dataItems = [
  {
    id: 1,
    path: './audio1.mp3',
    title: "Orange Daisy",
    singer: 'A.R Rahaman ',
    image:
      "https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 2,
    path: './audio2.mp3',
    singer: 'A.R Rahaman ',
    title: "Sunflower",
    image:
      "https://images.pexels.com/photos/1021947/pexels-photo-1021947.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 3,
    path: './audio3.mp3',
    title: "Purple - YellowFlower",
    singer: 'A.R Rahaman ',
    image:
      "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 4,
    path: './audio4.mp3',
    title: "White Petaled Flowers",
    singer: 'A.R Rahaman ',
    image:
      "https://images.pexels.com/photos/54388/white-flowers-delicate-flowers-three-flowers-54388.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 5,
    path: './audio5.mp3',
    singer: 'A.R Rahaman ',
    title: "A Purple Flower",
    image:
      "https://images.pexels.com/photos/13087944/pexels-photo-13087944.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 6,
    path: './audio1.mp3',
    title: "Purple Flower",
        singer: 'A.R Rahaman ',

    image:
      "https://images.pexels.com/photos/14987632/pexels-photo-14987632.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
    {
    id: 7,
    path: './audio1.mp3',
    title: "Orange Daisy",
    singer: 'A.R Rahaman ',
    image:
      "https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 8,
    path: './audio2.mp3',
    singer: 'A.R Rahaman ',
    title: "Sunflower",
    image:
      "https://images.pexels.com/photos/1021947/pexels-photo-1021947.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 9,
    path: './audio3.mp3',
    singer: 'A.R Rahaman ',
    title: "Purple - YellowFlower",
    image:
      "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
    {
    id: 10,
    path: './audio1.mp3',
    title: "Orange Daisy",
    singer: 'A.R Rahaman ',
    image:
      "https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 11,
    path: './audio2.mp3',
    singer: 'A.R Rahaman ',
    title: "Sunflower",
    image:
      "https://images.pexels.com/photos/1021947/pexels-photo-1021947.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
  {
    id: 12,
    path: './audio3.mp3',
    title: "Purple - YellowFlower",
    singer: 'A.R Rahaman ',
    image:
      "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
    duration: '00:00'
  },
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(dataItems[0]);
  // const [resultOffset,setResultOffset] = useState('')


  //   const fetchMusicData = async () => {
  //   setTracks([]);
  //   window.scrollTo(0, 0);
  //   setIsLoading(true);
  //   try {
  //     const response =  useFetch(
  //       `https://api.spotify.com/v1/search?q=${keyword}&type=track&offset=${resultOffset}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch music data");
  //     }

  //     const jsonData = await response.json();

  //     setTracks(jsonData.tracks.items);
  //   } catch (error) {
  //     setMessage(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     setResultOffset(0);
  //     fetchMusicData();
  //   }
  // };

  return (

    <Provider store={store}>

    <div className="App">
        <Layout dataItems={dataItems} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
    </Provider>


  )
}

export default App;
