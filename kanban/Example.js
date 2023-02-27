const KanbanBoard = (props) => {
    const { cards, statuses, users } = props;
    const [stateCards, setCards] = useState(cards);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        // If the draggable was dropped outside of a valid droppable, do nothing
        if (!destination) {
            return;
        }

        // If the draggable was dropped in the same position it started, do nothing
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // Find the card being dragged in the state
        const card = stateCards.find((card) => card._id === draggableId);

        // Find the source and destination columns in the state
        const sourceStatus = statuses.find((status) => status._id === source.droppableId);
        const destinationStatus = statuses.find((status) => status._id === destination.droppableId);

        // Move the card in the state
        const newCards = Array.from(stateCards);
        newCards.splice(source.index, 1);
        newCards.splice(destination.index, 0, card);
        setCards(newCards);

        // const moveCard = (taskId, sourceStatus, destinationStatus, destinationIndex) => {
        //     console.log('cards:', cards);
        //     console.log('stateCards:', stateCards);
        //     const card = stateCards.find(card => card._id === taskId);
        //     const sourceIndex = stateCards.indexOf(card);
        //
        //     console.log('moveCard called');
        //     console.log('taskId:', taskId);
        //     console.log('card:', card);
        //     console.log('sourceIndex:', sourceIndex);
        //     console.log('destinationIndex:', destinationIndex);

        // Update the card's status in the database
        const moveCard = (taskId, sourceStatus, destinationStatus, destinationIndex) => {
            const card = stateCards.find(card => card._id === taskId);
            const sourceIndex = stateCards.indexOf(card);

            // Update the card's status and index on the server
            axios.patch(`/api/cards/${taskId}`, {
                status: destinationStatus,
                index: destinationIndex
            });

            // Update the card's status and index in the local state
            const updatedCard = {
                ...card,
                status: destinationStatus,
                index: destinationIndex
            };
            const updatedCards = [...stateCards];
            updatedCards.splice(sourceIndex, 1);
            updatedCards.splice(destinationIndex, 0, updatedCard);
            setCards(updatedCards);
        };

        // Call moveCard to update the card's status and index in the database and local state
        moveCard(card._id, sourceStatus._id, destinationStatus._id, destination.index);
    };

    return (
        <div className="kanban-board">
            {statuses.map((status) => (
                <div className="kanban-column" key={status._id}>
                    <h2>{status.name}</h2>
                    <Droppable droppableId={status._id}>
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {stateCards
                                    .filter((card) => card.status === status._id)
                                    .map((card, index) => (
                                        <Draggable key={card._id} draggableId={card._id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className="kanban-card"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <h3>{card.title}</h3>
                                                    <p>{card.description}</p>
                                                    <p>{users.find((user) => user._id === card.assignedTo)?.name}</p>
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
    );
};
``
