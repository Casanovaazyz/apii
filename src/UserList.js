import React from 'react'
import Card from 'react-bootstrap/Card';

function UserList({el}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.edirect-tunisie.com/wp-content/uploads/2017/01/CB-03-02-1140x640.jpg"  />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        {el.email}
        <br/>
        {el.username}

       
<br/>
        {el.address.city}
        </Card.Text>
        
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default UserList
