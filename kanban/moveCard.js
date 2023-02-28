// const moveCard = (id, sourceStatus, destinationStatus, destinationIndex) => {
//     const newCards = [...cards];
//     const cardIndex = newCards.findIndex(card => card._id === id);
//     const card = newCards[cardIndex];
//
//     // Remove the card from its current position
//     newCards.splice(cardIndex, 1);
//
//     // Insert the card into its new position
//     const newCard = {...card, status: destinationStatus.title};
//     newCards.splice(destinationIndex, 0, newCard);
//
//     // Update the card status in the state
//     setCards(newCards);
//
//     // Update the card status in the server
//     axios.patch(`http://localhost:5050/cards/${id}`, {status: destinationStatus.title})
//         .then(res => {
//             console.log(`Card ${id} updated successfully`);
//         })
//         .catch(err => {
//             console.log(`Error updating card ${id}: ${err}`);
//         });
// };

const moveCard = (id, newStatus) => {
    setCards((prevCards) =>
        prevCards.map((card) =>
            card.id === id ? {...card, status: newStatus} : card
        )
    );
    axios.patch(`http://localhost:5050/cards/${id}`, {status: newStatus})
        .then(res => {
            console.log(`Card ${id} status updated to ${newStatus}.`);
        }).catch(err => {
        console.log(`Error updating card ${id} status: ${err}.`);
    })
};

// useEffect(() => {
//     if (Array.isArray(cards)) {
//         const filteredCards = [
//             ...statusesCards.map((statusCard) => ({
//                 ...statusCard,
//                 cards: cards.filter((card) => card.status === statusCard.status),
//             })),
//         ];
//         console.log("This is a message to the console");
//         console.log(filteredCards);
//         setBoards(filteredCards);
//     }
// }, [cards]);

