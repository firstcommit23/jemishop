import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {재고Context} from './App.js'
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from 'react-bootstrap';

import { connect } from 'react-redux';

import {CSSTransition} from "react-transition-group";

let 박스 = styled.div`
  padding:20px;
`;

let  H4Title = styled.h4`
  font-size:25px;
  color : ${props => props.색상}
`;

function Detail(props) {

    let {id} = useParams();

    let [alertYn, alertYnChg] = useState(true);

    let [탭, 탭변경] = useState(0);

    let history = useHistory();
    let [스위치, 스위치변경] = useState(false);

    useEffect(()=> {
      let 타이머 = setTimeout(()=>{ alertYnChg(false); }, 2000);
      
    
      return ()=> {clearTimeout(타이머)}
    }, []) 
    
    //let item = props.item.find(function (상품) {
    //  return 상품.id == id
    //});

    let item = props.item.find(x => x.id == id);

var style = {color : 'white'};

    if(item===undefined) history.push("/noitem");

    return (
      
      <div className="container">
        <박스>
          <H4Title className="red">상세페이지</H4Title>
        </박스>
        {
          (alertYn === true)
          ? <Alert />
          : null
        }
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+(item.id+1)+'.jpg'} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}원</p>

            <Info 재고={props.재고}/>



            <button className="btn btn-danger" onClick={()=>{
              var array = [...props.재고];
              array[0]--;
              props.재고변경(array);
              props.dispatch({type: '항목추가', payload: {id:item.id, name:item.title, quan:1}});
              history.push("/cart");
            }}>주문하기</button> 
            <button className="btn link" onClick={()=>{
                history.goBack();
            }}>Back!</button> 
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false);탭변경(0)}}>상품설명</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false);탭변경(1)}}>리뷰</Nav.Link>
          </Nav.Item>
        </Nav>

        <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabContent 탭={탭} 스위치변경={스위치변경}/>
        </CSSTransition>



      </div> 
    )
}

function TabContent(props) {
  
    useEffect(()=>{
      props.스위치변경(true);
    });

    if (props.탭 === 0) {
      return <div>0번째 내용입니다</div>
    } else if (props.탭 === 1) {
      return <div>1번째 내용입니다</div>
    }
}

function Alert() {
  return (
    <div className="my-alert-red">
      <p>재고가 얼마 남지 않아부려~</p>
    </div>

  );
}

function Info(props) {
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}


function 함수명(state) {
  return {
      state : state.reducer
  }
}

export default connect(함수명)(Detail);

//export default Detail;