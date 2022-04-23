import React from "react";
import { Card } from "react-bootstrap";
import { comments } from "../Data/data";


function Comments({ Comments }) {
    return (
        <div>
            {comments.map((comment) => (
                <Card style={{ width:500 }}>
                    <Card.Body>
                        
                        <Card.Title>{comment.name}</Card.Title>
                        <Card.Text>
                            {comment.comment} <tr/>
                            {comment.date}
                        </Card.Text>
                    </Card.Body>
                </Card>))};
        </div>
    );

}
export default Comments;

