import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserCard({el}) {
  return (
    <div>
         <Card  border="primary" style={{ width: '18rem' }}>
      <Card.Header>ID:{el.id}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>EMAIL : {el.email}</ListGroup.Item>
        <ListGroup.Item>Name : {el.name} </ListGroup.Item>
        <ListGroup.Item>USERNAME : {el.username}</ListGroup.Item>
      </ListGroup>
    </Card>
    <br/>
    </div>
  )
}

export default UserCard
