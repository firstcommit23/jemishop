/* eslint-disable */
import React, {createContext, useState, useContext, lazy, Suspense, memo} from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.js';
import {useHistory} from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from 'react-bootstrap';

import {Link, Route, Switch} from 'react-router-dom';
//import Detail from './Detail.js';
let Detail = lazy(()=>{ return import('./Detail.js') });
import Cart from './Cart.js';
import axios from 'axios';

// 범위생성
export let 재고Context = React.createContext();

function App() {
  let [item, item_change] = useState(Data);
  let [재고,재고변경] = useState([10,11,12]);

  let child2 = memo(function() {
    return <div>222</div>
  });
  
 // console.log(item);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">재미샵</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>1 + 1 + 1 = 5! </h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">

            <재고Context.Provider value={재고}>
            
            <div className="row">
              {
                item.map(function (item, i) {
                  return (
                      <Item 아이템={item} key={i}/>
                  )
                })
              }

            </div>

            </재고Context.Provider>

            <button className="btn btn-primary" onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                item_change( [...item, ...result.data] );
              })
              .catch(()=>{
                console.log('fail');
              });
              }}>더보기</button>
          </div>

        </Route>
        
        <Route path="/detail/:id">
          <Suspense fallback={<div>로딩주이예요</div>}>
              <Detail item={item} 재고={재고} 재고변경={재고변경}/>
          </Suspense>
        </Route>

        <Route path="/noitem" >
          <div>상품이 존재하지 않습니다.</div>
        </Route>

        <Route path="/cart" >
          <Cart></Cart>
        </Route>

        <Route path="/:id" >
          <div>아무거나 적었을때 이거 보여 주시오</div>
        </Route>
        
      </Switch>
    </div>      
  );

  function Item(props) {
    let history = useHistory();
    let 재고 = useContext(재고Context);
    //history.push('/detail/'+props.i)
    return (
        <div className="col-md-4" onClick={()=>{location.href="/detail/"+props.아이템.id;}}> 
          <img src={'https://codingapple1.github.io/shop/shoes'+(props.아이템.id+1)+'.jpg'} width="100%" />
          <h4>{props.아이템.title}</h4>
          <p>{props.아이템.content} & {props.아이템.price}</p>
          <Test></Test>
        </div>
    )
  }

  function Test() {
    let 재고 = useContext(재고Context);

    return <p>{재고}</p>
  }
}

export default App;
