import React from "react";


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
        path: './nightChanges.mp3',
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


const Home = ({ setIsPlaying, setCurrentIndex, currentIndex }) => {

    const handleClick = (item) => {
        setCurrentIndex(item);
        setIsPlaying(true)
    }

    return (
        <div className="container px-6 ">
            <div className="grid grid-cols-1 mt-8 gap-1 xl:mt-12 xl:gap-1 sm:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4">
                {dataItems.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full cursor-pointer transition-transform transform hover:shadow-lg p-2 hover:bg-[rgb(66,7,7)] hover:rounded-sm ${currentIndex.id === item.id ? "bg-[rgb(66,7,7)] rounded-sm" : ""
                            }`}
                        onClick={() => handleClick(item)}
                    >
                        <div
                            className="w-full h-auto bg-gray-300 rounded-lg dark:bg-gray-600 transition-colors hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                            <img src={item.image} className="w-full h-auto rounded-md" />
                        </div>
                        <p className="w-auto mt-1 text-xs text-white">{item.title}</p>
                        <p className="w-auto mt-1 text-xs text-white">{item.singer}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home