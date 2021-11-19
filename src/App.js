import { useState } from "react";

function App() {
  const [ID, setID] = useState(null);
  const [fname, setfname] = useState(null);
  const [age, setage] = useState(null);
  const [dept, setdept] = useState(null);
  
  const [data, setdata] = useState({
    "ID": null,
    "fname": null,
    "age": null,
    "dept": null
  });

  const passData = e => {
    e.preventDefault();
    setdata({
      "ID": ID,
      "fname": fname,
      "age": age,
      "dept": dept
    });
  }
  
  return (
    <>
      <form>
        <div className='form-group'>
          <label>ID : </label>
          <input type='text' onChange={e => setID(e.target.value)}></input>
        </div>
        <div className='form-group'>
          <label>Name : </label>
          <input type='text' onChange={e => setfname(e.target.value)}></input>
        </div>
        <div className='form-group'>
          <label>Age : </label>
          <input type='text' onChange={e => setage(e.target.value)}></input>
        </div>
        <div className='form-group'>
          <label>Dept : </label>
          <input type='text' onChange={e => setdept(e.target.value)}></input>
        </div>
        <div className='form-control'>
          <button onClick={(e) => passData(e)}>Submit</button>
        </div>
      </form>

      { display(data) }
    </>
  );
}


const display = (props) => {
 
  const getData = {
    "ID": props.ID,
    "fname": props.fname,
    "age": props.age,
    "dept": props.dept
  }

  if(getData.ID !== null) {
    return (
      <div>
        <h2>Emp. ID : {getData.ID}</h2>
        <h2>Name : {getData.fname}</h2>
        <h3>Age : {getData.age}</h3>
        <h3>Dept : {getData.dept}</h3>
      </div>
    )
  }
}

export default App;
