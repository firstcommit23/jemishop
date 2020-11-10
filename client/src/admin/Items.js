/* eslint-disable */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios, { get, post } from 'axios';

function Items(props) {

    // console.log(props.items);
    // htttps://placeimg.com/64/64/any


    let [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/item')
            .then((result) => {
                setItems([...items, ...result.data]);
            })
            .catch(() => {
                console.log('fail');
            });
    }, []);

    return (
        <div style={{ padding: '20px 70px' }}>

            <hr />
            <h2>상품관리</h2><soan>등록상품수:{items.length}</soan>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="3%">#</th>
                        <th width="10%">이미지</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>재고</th>
                        <th>변경</th>
                    </tr>
                </thead>
                {<tbody>
                    {
                        items.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td><img src={'https://placeimg.com/64/64/' + (a.id + 1)} width="64" /></td>
                                    <td>{a.title}</td>
                                    <td>{a.stock}</td>
                                    <td>{a.price}</td>
                                    <td>.</td>

                                </tr>
                            )
                        })
                    }
                </tbody>}
            </Table>
            <button >상품추가</button>
            <ItemAdd item="" />
        </div>
    )
}

function ItemAdd(props) {

    let initItem;

    useEffect(()=>{

        if (props.item === undefined) {
            initItem = [{
                id: '',
                title: '',
                image: '',
                price: '',
                stock: ''
            }];
        } else {
            initItem = props.item;
        }

    },[]);
    let [item, Setitem] = useState(initItem);

    let addItem = () => {
        const url = '/api/item';
        const formData = new FormData();
        formData.append('image', item.file);
        formData.append('title', item.title);
        formData.append('id', item.id);
        formData.append('price', item.price);
        formData.append('stock', item.stock);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    const handelFileChange = (e) => {
        let copy = [...item];
        copy.file = e.target.files[0];
        copy.fileName = e.target.value;
        Setitem(copy);
    }

    const handleValueChange = (e) => {
        const {value, name} = e.target;
        console.log(item);
        let copy = [...item];
        switch (name) {
            case 'itemName':
                copy.title = value;
                break;
            case 'itemPrice':
                copy.price = value;
                break;
        }
        Setitem(copy);
    }

    return (
        <form onSubmit={addItem}>
            <h1>상품 추가</h1>
            프로필 이미지 : <input type="file" name="file" value={props.item.image} onChange={handelFileChange} /><br />
            상품명: <input type="text" name="itemName" value={props.item.title} onChange={handleValueChange} /><br />
            가격: <input type="text" name="itemPrice" value={props.item.price} onChange={handleValueChange} /><br />
            <button type="submit">추가하기</button>
        </form>
    )

}

function 함수명(state) {
    return {
        state: state.reducer,
        alertYn: state.reducer2,
        items: state.reducerItem
    }
}

export default connect(함수명)(Items);

//export default Items;