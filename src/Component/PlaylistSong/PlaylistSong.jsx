import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import DropdownMenu from '../DropDown/Dropdown';
import { BASE_URL } from '../../config';


const PlayListSong = ({ setCurrentIndex, setIsPlaying }) => {
    const { id } = useParams();  // Get playlist id from the URL parameter
    const [items, setItems] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);
    const [dropTarget, setDropTarget] = useState(null);

    useEffect(() => {
        // Fetch playlist data when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/playlist/${id}`);
                const { data } = await response.json();


                if (response.ok) {
                    setItems(data.data[0].songs);
                } else {
                    console.error('Failed to fetch playlist:', data.message);
                }
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        };

        fetchData();
    }, [id]);  // Dependency array to refetch when id changes

    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    const handleDragEnter = (index) => {
        setDropTarget(index);
    };

    const handleDragEnd = () => {
        if (draggedItem !== null && dropTarget !== null) {
            const newItems = [...items];
            const draggedIndex = newItems.findIndex(
                (item) => item.id === draggedItem.id
            );
            newItems.splice(draggedIndex, 1);
            newItems.splice(dropTarget, 0, draggedItem);
            setItems(newItems);
            setDraggedItem(null);
            setDropTarget(null);
        }
    };

    const handleClick = (item) => {
        setCurrentIndex(item);
        setIsPlaying(true);
    };

    return (
        <>
            <section>
                <div className="dnd_wrapper">
                    <h3 style={{ paddingTop: '32px', paddingLeft: '20px' }}>Popular</h3>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`dnd_item`}
                            draggable={true}
                            onDragStart={() => handleDragStart(item)}
                            onDragEnter={() => handleDragEnter(index)}
                            onDragEnd={handleDragEnd}
                            onClick={() => handleClick(item)}
                        >
                            <div
                                className={`dnd_item_inner${draggedItem && draggedItem.id === item.id ? " dnd_dragging" : ""
                                    }`}
                            >
                                <Card title={item.title} image={item.image} duration={item.duration} path={item.path} singer={item.singer} />
                            </div>
                            {dropTarget === index && <div className="dnd_drop_indicator"></div>}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

// Card component
const Card = ({ title, image, duration, path, singer }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = (e) => {
        e.stopPropagation();
        setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (e) => {
        // Check if the clicked target is not inside the dropdown or button
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        if (dropdownVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownVisible]);

    return (
        <div className="card_item" ref={dropdownRef}>
            <div className="card_icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="68"
                    viewBox="0 0 32 68"
                    fill="none"
                >
                    <path
                        d="M12.5 7C12.5 10.0376 10.0376 12.5 7 12.5C3.96243 12.5 1.5 10.0376 1.5 7C1.5 3.96243 3.96243 1.5 7 1.5C10.0376 1.5 12.5 3.96243 12.5 7ZM12.5 25C12.5 28.0376 10.0376 30.5 7 30.5C3.96243 30.5 1.5 28.0376 1.5 25C1.5 21.9624 3.96243 19.5 7 19.5C10.0376 19.5 12.5 21.9624 12.5 25ZM12.5 43C12.5 46.0376 10.0376 48.5 7 48.5C3.96243 48.5 1.5 46.0376 1.5 43C1.5 39.9624 3.96243 37.5 7 37.5C10.0376 37.5 12.5 39.9624 12.5 43ZM12.5 61C12.5 64.0376 10.0376 66.5 7 66.5C3.96243 66.5 1.5 64.0376 1.5 61C1.5 57.9624 3.96243 55.5 7 55.5C10.0376 55.5 12.5 57.9624 12.5 61ZM30.5 7C30.5 10.0376 28.0376 12.5 25 12.5C21.9624 12.5 19.5 10.0376 19.5 7C19.5 3.96243 21.9624 1.5 25 1.5C28.0376 1.5 30.5 3.96243 30.5 7ZM30.5 25C30.5 28.0376 28.0376 30.5 25 30.5C21.9624 30.5 19.5 28.0376 19.5 25C19.5 21.9624 21.9624 19.5 25 19.5C28.0376 19.5 30.5 21.9624 30.5 25ZM30.5 43C30.5 46.0376 28.0376 48.5 25 48.5C21.9624 48.5 19.5 46.0376 19.5 43C19.5 39.9624 21.9624 37.5 25 37.5C28.0376 37.5 30.5 39.9624 30.5 43ZM30.5 61C30.5 64.0376 28.0376 66.5 25 66.5C21.9624 66.5 19.5 64.0376 19.5 61C19.5 57.9624 21.9624 55.5 25 55.5C28.0376 55.5 30.5 57.9624 30.5 61Z"
                        stroke="currentcolor"
                        strokeWidth="3"
                    />
                </svg>
            </div>
            {image && (
                <div className="card_image">
                    <img src={image} alt={title} loading="lazy" draggable={false} />
                </div>
            )}
            <div className="card_title">
                <span>{title}</span>
            </div>
        </div>
    );
};

export default PlayListSong;

