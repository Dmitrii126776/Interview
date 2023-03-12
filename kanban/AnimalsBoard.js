import React, {useState} from 'react';

const AnimalsBoard = (props) => {
    const {animals} = props
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="container-fluid">
            <div>
                <h1>Board of Animals</h1>
            </div>
            <div className="row">
                {animals.map((el, index) => (
                    <div key={el._id} className="col-md-4 col-auto mb-3">
                        <div className="card p-3" style={{width: "100%", cursor: "pointer"}}
                             onMouseEnter={() => setHoveredCard(index)}
                             onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img src={el.mainPhoto} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <h6 className="card-text">{el.age}{', '}{el.sex} </h6>
                                {hoveredCard === index && <div>click to view more...</div>}
                            </div>
                        </div>
                        {((index + 1) % 3 === 0 || index === animals.length - 1) && <div className="w-100"></div>}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default AnimalsBoard;
