import logo from "./logo.svg";

function ReactFacts() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="react-logo" height="100px" width="100px" />
      </div>
      <div className="section">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k star on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </>
  );
}

export default ReactFacts;
