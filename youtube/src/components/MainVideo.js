import React from "react";
import { Card } from "react-bootstrap";

function MainVideos({ mainVideo }) {
    return (
        <div>
            <Card style={{ width: 999 }}>
                <iframe
                    width="999"
                    height="500"
                    src={mainVideo.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <Card.Body>
                    <Card.Title>{mainVideo.title}</Card.Title>
                    <Card.Text>
                        {mainVideo.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}
export default MainVideos;
