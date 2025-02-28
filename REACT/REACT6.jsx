const CurrentDate = (props) => {
    return (
      <div>

        <p>The current date is: {props.date}</p>

      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>

          <CurrentDate date={Date()}/>

        </div>
      );
    }
  };


  const List = (props) => {

    return <p>{props.tasks.join(', ')}</p>

  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>

          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["eating","sleeping","gaming"]}/>

        </div>
      );
    }
  };

  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };

  ShoppingCart.defaultProps ={ items:0 }