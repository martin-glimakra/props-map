const Card = ({ sommar, namn, färg }) => {

    console.log('sommar? ', sommar)
    return (
        <div>
            <h2>{sommar ? 'hej hej!' : 'det är inte sommar'}</h2>
            <div>Namn { namn }</div>
            <div>Färg {färg}</div>
        </div>
    );
}

export default Card;