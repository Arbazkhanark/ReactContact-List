import "./styles.css";

function App(props) {
  return (
    <>
      <div className="card">
        <div className="portDetails">
          <h1> {props.name} </h1>
          <img src={props.img} alt="someImg" />
        </div>
        <div className="contact_details">
          <p> {props.phone} </p>
          <p> {props.email} </p>
        </div>
      </div>
    </>
  );
}

export default App;
