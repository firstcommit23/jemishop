import React from 'react';
import { Table } from 'react-bootstrap';


function Order(props) {

    return (
        <div style={{padding:'20px 70px'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}


export default Order;