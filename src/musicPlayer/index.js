import React, { useState, useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';
import './index.css'
import Slider from '@mui/material/Slider';

function MusicPlayer({ dataItems, currentIndex, setCurrentIndex, currentSong }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    console.log(currentIndex)
    useEffect(() => {
        const sound = new Howl({
            src: [currentIndex.path],
            onplay: () => {
                console.log('Playing...', dataItems[currentIndex]);
            },
            onpause: () => {
                console.log('Paused...');
            },
            onend: () => {
                console.log('Finished...');
                handleNext();
            },
            onload: () => {
                setDuration(sound.duration());
            },
            onseek: () => {
                setCurrentTime(sound.seek());
            },
        });

        setAudio(sound);

        return () => {
            sound.unload();
        };
    }, [currentIndex]);

    useEffect(() => {
        if (audio && isPlaying) {
            audio.play();
            updateCurrentTime();
        } else {
            cancelAnimationFrame(updateCurrentTimeId.current);
        }
    }, [audio, isPlaying]);

    const handlePlayPause = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleNext = () => {
        setIsPlaying(false);
        const currentId = currentIndex.id;
        const nextItem = dataItems.find((item) => item.id > currentId);
        console.log({nextItem})
        if (nextItem) {
            setCurrentIndex(nextItem);
        } else {
            setCurrentIndex(dataItems[0]); // Loop to the first song if at the end of the list
        }
    };

    const handlePrevious = () => {
        setIsPlaying(false);
        const currentId = currentIndex.id;
        const prevItem = dataItems.slice().reverse().find((item) => item.id < currentId);
        if (prevItem) {
            setCurrentIndex(prevItem);
        } else {
            setCurrentIndex(dataItems[dataItems.length-1]); // Loop to the last song if at the beginning of the list
        }
    };

    const handleSongSelect = (index) => {
        setIsPlaying(false);
        setCurrentIndex(index);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const updateCurrentTimeId = useRef(null);

    const updateCurrentTime = () => {
        setCurrentTime(audio.seek());
        updateCurrentTimeId.current = requestAnimationFrame(updateCurrentTime);
    };

    return (
        <>
            <div className="music-container">
                <div className="music-body">
                    <div className="music-img">
                        <img src={currentIndex?.image} alt="song-images" id="img" />
                    </div>
                    <div className="music-info">
                        <h2 id="title">{currentIndex?.title}</h2>
                    </div>
                    <div className="duration">
                        <span className="current-time">{formatTime(currentTime)}</span>
                        <Slider
                            aria-label="time-indicator"
                            size="small"
                            value={currentTime}
                            min={0}
                            step={1}
                            max={duration}
                            onChange={(_, value) => setCurrentTime(value)}
                            sx={{
                                height: 4,
                                '& .MuiSlider-thumb': {
                                    width: 8,
                                    height: 8,
                                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                    '&::before': {
                                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                    },
                                    '&.Mui-active': {
                                        width: 20,
                                        height: 20,
                                    },
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 0.28,
                                },
                            }}
                        />
                        <span className="duration-time">{formatTime(duration)}</span>
                    </div>
                    <div className="music-controls">
                        <div className="main-controls">
                            <button className="prevbtn" id="prevbtn" onClick={handlePrevious}>
                                <i className="fas fa-backward"></i>
                            </button>
                            <button className="playpause" id="playpause" onClick={handlePlayPause}>
                                {isPlaying ? <i id="playpause-btn" className="fas fa-pause" /> : <i id="playpause-btn" className="fas fa-play" />}
                            </button>
                            <button className="nextbtn" id="nextbtn" onClick={handleNext}>
                                <i className="fa-solid fa-forward-step" />
                            </button>
                        </div>
                    </div>
                    <div className="songs-list" id="songs-list">
                        <button className="list-close btn" id="listclose">
                            <i className="fas fa-times"></i>
                        </button>
                        <ul>
                            {dataItems.map((song, index) => (
                                <li key={index} onClick={() => handleSongSelect(index)}>
                                    {song.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MusicPlayer;
