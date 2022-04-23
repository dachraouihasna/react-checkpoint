import React from "react";
import { Card } from "react-bootstrap";


function SuggestionList({ suggestions }) {
    return (
        <div>
            {suggestions.map((suggestion) => (
                <Card style={{ width: 227 }}>
                    <iframe
                        width="227"
                        height="109"
                        src={suggestion.url}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <Card.Body>
                        <Card.Title>{suggestion.title}</Card.Title>
                        <Card.Text>
                            {suggestion.description}
                        </Card.Text>
                    </Card.Body>
                </Card>))};
        </div>
    );

}
export default SuggestionList;

