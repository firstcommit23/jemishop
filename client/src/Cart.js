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
                {
                    props.state.map((a,i)=> {
                        return (
                            <tr key={i}>
                                <td>{ a.id }</td>
                                <td>{ a.name }</td>
                                <td>{ a.quan }</td>
                                <td>
                                    <button onClick={()=>{ props.dispatch({type:'수량증가', id:a.id, payload:a}) }}>+</button>
                                    <button onClick={()=>{ props.dispatch({type:'수량감소', id: a.id, payload: a}) }}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
            {props.alertYn === true 
            ? (
                <div className="my-alert">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={()=>{props.dispatch({type:'닫기'})}}>닫기</button>
                </div>)
                : null 
            }


        </div>

    )
}

function 함수명(state) {
    return {
        state : state.reducer,
        alertYn: state.reducer2
    }
}

export default connect(함수명)(Cart);

//export default Cart;