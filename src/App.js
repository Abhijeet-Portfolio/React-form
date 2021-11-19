import { useState } from "react";

// const inputName = ['ID','Name','Age','Dept'];

function App() {
  
  const [data, setdata] = useState({
    "ID": null,
    "fname": null,
    "age": null,
    "dept": null
  });
  
  return (
    <>
      <form>
        <div className='form-group'>
          <label>ID : </label>
          <input type='text' onChange={e => setdata({
            "ID": e.target.value
          })}></input>
        </div>
        <div className='form-group'>
          <label>Name : </label>
          <input type='text' onChange={e => setdata({
            "fname": e.target.value
          })}></input>
        </div>
        <div className='form-group'>
          <label>Age : </label>
          <input type='text' onChange={e => setdata({
            "age": e.target.value
          })}></input>
        </div>
        <div className='form-group'>
          <label>Dept : </label>
          <input type='text' onChange={e => setdata({
            "dept": e.target.value
          })}></input>
        </div>
        <div className='form-control'>
          <button onClick={() => display(data)}>Submit</button>
        </div>
      </form>

      {
        display(data)
      }
    </>
  );
}


const display = (props) => {
 
  const getData = {
    "ID": props.ID,
    "fname": props.fname
  }

  console.log(getData);
  // return (
  //   <div>
  //     <h2>Emp. ID : {data.ID}</h2>
  //     <h2>Name : {data.fname}</h2>
  //     <h3>Age : {data.age}</h3>
  //     <h3>Dept : {data.dept}</h3>
  //   </div>
  // )
}

export default App;
