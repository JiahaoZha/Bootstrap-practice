const JSX1 = <h1>Hello JSX!</h1>;

const JSX2 = <div>
<h1></h1>
<p></p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
</div>

const JSX3 = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>{/* 这是注释*/}
    </div>
  );

  const JSX4 = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  ReactDOM.render(JSX4,document.getElementById("challenge-node"))


  const JSX5 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

  const JSX6 = (
    <div>
      <h2>Welcome to React!</h2> <br/>
      <p>Be sure to close all tags!</p>
      <hr/>
    </div>
  );

  const MyComponent = function() {
    return(
      <div>123</div>
    )

  }