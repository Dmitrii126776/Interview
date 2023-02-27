import React from 'react';
import './Kanban.css'
import {capitalizeFirstLetter} from "../support";

const KanbanBoard = (props) => {
    const {cards, statuses, users} = props
    console.log(cards)

    return (
        <div>
            <h1>Kanban Board</h1>
            <div className="container-kanban text-center">
                <div className="row align-items-start">
                    {statuses.map(status => (<div key={status._id} className="col">
                        <h2 className="kanban-title">{capitalizeFirstLetter(status.title)}</h2>
                        {cards.filter(el => el.status === status.title)
                            .map(card => (
                                <div key={card._id} className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{card.taskNumber}{' '}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{card.assignee}{' '}{card.priority}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <span style={{marginRight: '10px'}}>State</span>
                                                <span
                                                    className={`status-dot status-dot-${card.status.toLowerCase()}`}></span>
                                                <span style={{flexGrow: 1}}>{card.status}</span>
                                            </div>
                                        </h6>
                                        <p className="card-text">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>))}
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default KanbanBoard;
