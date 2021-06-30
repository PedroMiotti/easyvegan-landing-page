import './style.css';

import LaricaVeganaCover from '../../assets/img/LaricaVeganaCover.jpeg';

const Book = () => {
    return (
        <div className="book-container">
            <div className="book">
                <div className="front">
                    <div className="cover">
                        <div className="coverImage">
                            <img src={LaricaVeganaCover} alt="larica vegana cover"/>
                        </div>
                    </div>
                </div>
                <div className="left-side">
                    <h2>
                        <span>Luisa Motta</span>
                        <span>46 receitas</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Book;