import { useEffect, useState } from "react";
import Card from "./Card";

const CardSection = () => {
    const [loadedCard, setLoadedCard] = useState(1)

    // Rerender is new card is clicked
    useEffect(() => {
    }, [loadedCard])


    // Temporary content for card
    const tempCard = [{
        image: '',
        alt: 'brisbane',
        header: 'Heading 1',
        body: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur accusamus architecto eius totam error nemo consequatur soluta fuga omnis, at quidem, porro, expedita earum quisquam vel dolor hic et.'
        ],
        buttonContext: 'Button 1',
        buttonLink: ''
    }, {
        image: '',
        alt: 'brisbane',
        header: 'Heading 2',
        body: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt ipsa at sit velit id laudantium libero quibusdam aliquid saepe fugiat vitae fugit neque, optio eveniet illum odio! Fugiat, pariatur.'
        ],
        buttonContext: 'Button 2',
        buttonLink: ''

    }, {
        image: '',
        alt: 'brisbane',
        header: 'Heading 3',
        body: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, incidundam aliquid saepe fugiat vitae fugit neque, optio eveniet illum odio! Fugiat, pariatur.',
            'Dolorem veritatis, maiores adipisci eum enim totam ad asperiores accusamus labore eos architecto!'
        ],
        buttonContext: 'Button 3',
        buttonLink: ''
    }];

    return (
        <div className="card-section">
            <div className="cards-layout">
                {tempCard.map((card, i) => {
                    return (
                        <div className="card" key={i}>
                            <Card
                                cardKey={i}
                                imageLink={card.image}
                                alt={card.alt}
                                header={card.header}
                                body={card.body}
                                buttonContext={card.buttonContext}
                                buttonLink={card.buttonLink}
                                loadedCard={loadedCard}
                                setLoadedCard={setLoadedCard} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CardSection;