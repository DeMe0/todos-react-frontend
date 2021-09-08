import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";

function App() {


  //////////////////////
  // style objects
  //////////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px"
  }

  /////////////////////////
  // State & Other Variables
  /////////////////////////

  // API URL
  const url = "https://am-628-django-todos.herokuapp.com/todos/"

  // State to Hold List of Todos
  const [posts, setPosts] = useState([])

  //////////////////////////
  // Functions
  //////////////////////////

  const getTodos = async () => {
    const response = await fetch(url) // fetches data
    const data = await response.json() // presents it as json
    setPosts(data) 
  }
  // now we're going to need to use useEffect to call this function when it first loads
  
  //////////////////////////
  // useEffects
  //////////////////////////
  useEffect(() => {getTodos()}, []) // need the array to make sure we don't end up in an infinite loop

  //////////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <h1 style={h1}> My Todo List </h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
        />
        <Route
          path="/post/:id"
          render={(routerProps) => <SinglePost {...routerProps} posts={posts} />}
        />
        <Route
          path="/new"
          render={(routerProps) => <Form {...routerProps}/>}
        />
        <Route
          path="/edit"
          render={(routerProps) => <Form {...routerProps}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
