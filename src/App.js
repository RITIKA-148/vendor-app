
import React from 'react'
  import Headers from './Headers'

  
import { useState } from 'react'
function App() {
  //


    const [name, setName] = useState("");
    const [Address1, setAddress] = useState("");
    let result;

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        result = await fetch(
          'http://localhost:5000/register', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:"ritikkaaa",bankaccount:"text",
            Address1:"react"}),
            

        })
        console.log(result)
        // const resultresponse= await result.json();
             

        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
           
        }
    }

  return (

<div class="container-fluid text-center ">
  <Headers></Headers>
<h1 class="contact">CONTACT
<span>-us</span>

</h1>

<div class="next container">
  <div class="form">
        <div class="row">
          <div class="col-lg-4 col-md-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="vendor Name" data-msg="Please enter at least 4 chars"/>
            
            <div class="validate"></div>
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="number" name="name" class="form-control" id="name" placeholder="Bank Account No" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="Name" name="name" class="form-control" id="name" placeholder="Bank Account Name" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3">
          <input type="text" name="date" class="form-control" id="date" placeholder="Address Line 1*" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3">
          <input type="text" name="date" class="form-control" id="date" placeholder="Address Line 2*" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3">
          <input type="text" name="date" class="form-control" id="date" placeholder="City" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3">
          <input type="text" name="date" class="form-control" id="date" placeholder="Zip-Code" data-msg="Please enter at least 4 chars"/>
          <i class='bx bx-edit-alt'></i>
          <div class="validate"></div>
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3">
          <input type="text" name="date" class="form-control" id="date" placeholder="Country" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
        </div>

      </div>
      <div class="form-group mt-3">
        <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
          <div class="validate"></div>
      </div>
      <div class="text8">
        <button type="submit" class="submit"
        onClick={handleOnSubmit}>submit</button>

      </div>
      </div>
    </div>




      

 
     </div>

  // </div>


  )
}


 export default App

 