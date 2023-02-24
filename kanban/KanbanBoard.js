import React, {useState} from 'react';
import './Kanban.css';
import {capitalizeFirstLetter} from "../support";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import axios from "axios";

const KanbanBoard = (props) => {
    const {cards, statuses, users} = props;
    const [stateCards, setCards] = useState(cards);


    const moveCard = (taskId, sourceStatus, destinationStatus, destinationIndex) => {
        const card = stateCards.find(card => card._id === taskId);
        const sourceIndex = stateCards.indexOf(card);

        console.log('moveCard called');
        console.log('taskId:', taskId);
        console.log('card:', card);
        console.log('sourceIndex:', sourceIndex);
        console.log('destinationIndex:', destinationIndex);

        if (sourceIndex !== -1) {
            const newCards = Array.from(stateCards);
            newCards.splice(sourceIndex, 1);
            newCards.splice(destinationIndex, 0, {...card, status: destinationStatus.title});

            // update the status of the card in the database here
            const id = card._id;
            axios
                .patch(`http://localhost:5050/cards/${id}`, {
                    status: destinationStatus.title,
                    order: destinationIndex,
                })
                .then((res) => {
                    console.log(`Card ${id} updated successfully`);
                })
                .catch((err) => {
                    console.log(`Error updating card ${id}: ${err}`);
                });

            setCards(newCards);
        }
    };


    const handleDragOver = (event) => {
        event.preventDefault();
    };

    console.log(cards)
    const handleDragStart = (event, id) => {
        console.log('handleDragStart called');
        console.log('id:', id);
        console.log('event:', event);
        event.dataTransfer.setData('taskId', id);
    };
    console.log(statuses)


    const handleDrop = (event) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('taskId');
        const destinationStatus = statuses.find(status => status.title.toLowerCase() === event.target.id);
        moveCard(taskId, null, destinationStatus, destinationStatus.cards.length);
        console.log('event:', event);
    };


    const getCardStyle = (isDragging) => ({
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
    });

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: '10px',
        minHeight: '300px'
    });

    return (
        <DragDropContext onDragEnd={result => {
            const {source, destination} = result;

            if (!destination) {
                return;
            }

            if (source.droppableId === destination.droppableId && source.index === destination.index) {
                return;
            }

            const sourceStatus = statuses.find(status => status._id === source.droppableId);
            const destinationStatus = statuses.find(status => status._id === destination.droppableId);

            moveCard(cards[source.index]._id, sourceStatus, destinationStatus, destination.index);
        }}>
            <div>
                <h1>Kanban Board</h1>
                <div className="container-kanban text-center">
                    <div className="row align-items-start" onDragOver={handleDragOver} onDrop={handleDrop}>
                        {statuses.map(status => (
                            <div key={status._id} className="col">
                                <h2 className="kanban-title">{capitalizeFirstLetter(status.title)}</h2>
                                <Droppable droppableId={status._id}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            style={getListStyle(snapshot.isDraggingOver)}
                                        >
                                            {cards.filter(el => el.status === status.title)
                                                .map((card, index) => (
                                                    <Draggable key={card._id} draggableId={card._id} index={index}
                                                               onDragStart={(event) => handleDragStart(event, card._id)}>

                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{...getCardStyle(snapshot.isDragging), ...provided.draggableProps.style}}
                                                                className="card" draggable={true}  onDragStart={(event) => handleDragStart(event, card._id)}
                                                            >
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{card.taskNumber}{' '}</h5>
                                                                    <h6 className="card-subtitle mb-2 text-muted">{card.assignee}{' '}{card.priority}</h6>
                                                                    <h6 className="card-subtitle mb-2 text-muted">{card._id}</h6>
                                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            alignItems: 'center'
                                                                        }}>
                                                                            <span
                                                                                style={{marginRight: '10px'}}>State</span>
                                                                            <span
                                                                                className={`status-dot status-dot-${card.status.toLowerCase()}`}></span>
                                                                            <span
                                                                                style={{flexGrow: 1}}>{card.status}</span>
                                                                        </div>
                                                                    </h6>
                                                                    <p className="card-text">
                                                                        {card.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DragDropContext>
    );
};

export default KanbanBoard;
