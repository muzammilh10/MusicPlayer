import React, { useState } from 'react';
import './index.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// DND component
const DND = ({ dataItems, currentIndex, setCurrentIndex }) => {
    const [items, setItems] = useState(dataItems); // items state


    const [draggedItem, setDraggedItem] = useState(null); // dragged item state
    const [dropTarget, setDropTarget] = useState(null); // drop target state

    // drag start handler
    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    // drag enter handler
    const handleDragEnter = (index) => {
        setDropTarget(index);
    };

    // drop handler
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
    }

    return (
        <>
            <div className="dnd_wrapper">
                <h3 style={{ paddingTop: '32px' }}>Popular</h3>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`dnd_item${currentIndex.id === item.id ? " dnd_playing" : ""}`}
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
                            <Card title={item.title} image={item.image} />
                        </div>
                        {dropTarget === index && <div className="dnd_drop_indicator"></div>}
                    </div>
                ))}
            </div>
        </>
    );
};

// Card component
const Card = ({ title, image }) => (
    <div className="card_item">
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


export default DND