import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{props.state[0].name}</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>

        </div>

    )
}

function 함수명(state) {

    return {
        state : state
    }
}

export default connect(함수명)(Cart);

//export default Cart;