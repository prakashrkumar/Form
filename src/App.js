import "./App.css";
import {useState } from 'react'



function App() {
  const[formData, setFormData]=useState({
    firstName:"",lastName:"",email:"",country:"india",StreetAdress:"",
    City:"",state:"",postelcode:"",comments:false,candidates:false,offers:false,pushNotifications:""
  })
  function changeHandler(event){
const{name,value,checked,type}=event.target;
setFormData((prev)=>({...prev, [name]:type==="checkbox"? checked:value}))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }
  
  
  return (
    <div className="flex flex-col items-center mt-2 ">
    
    <form onSubmit={submitHandler}>
    <fieldset>
    <legend>Fill the form carefully</legend>
    <label htmlFor="firstName">FirstName</label>
    <br/>
    <input
    type="text"
    name="firstName"
    id="firstName"
    placeholder="firstName"
    value={formData.firstName}
    onChange={changeHandler}
    className="outline"

    />
    <br/>
    <label htmlFor="lastName">lastName</label>
    <br/>
    <input
    
    type="text"
    name="lastName"
    id="lastName"
    placeholder="lastName"
    value={formData.lastName}
    onChange={changeHandler}
    className="outline"

    />
    <br/>
    <label htmlFor="email">enter your email</label>
    <br/>
    <input
    
    type="text"
    name="email"
    id="email"
    placeholder="email"
    value={formData.email}
    onChange={changeHandler}
    className="outline"

    />
    <br/>
    
    <label htmlFor="country">Country</label>
    <br/>
    <select
    
    id="country"
    name="country"
    value={formData.country}
    onChange={changeHandler}
    className="outline"
   >
    
    

      <option>India</option>
      <option>United State</option>
      <option>Brazil</option>
      <option>Canada</option>
      <option>Mexico</option>
      <option>Nepal</option>
    </select>
    <br/>
    <label htmlFor="StreetAdress">streetAdress</label>
    <br/>
    <input
    type="text"
    name="StreetAdress"
    id="StreetAdress"
    placeholder="SB-23"
    value={formData.StreetAdress}
    onChange={changeHandler}
    className="outline"

    />
    <br/>
    <label htmlFor="city">City</label>
    <br/>
    <input
    type="text"
    name="City"
    id="City"
    placeholder="city"
    value={formData.city}
    onChange={changeHandler}
    className="outline"

    />
    <br/>
    <label htmlFor="State">State</label>
    <br/>
    <input
    type="text"
    name="State"
    id="State"
    placeholder="State"
    value={formData.State}
    onChange={changeHandler}
    className="outline"
    />
    <br/>
    <label htmlFor="postelcode">postelcode</label>
    <br/>
    <input
    type="text"
    name="postelcode"
    id="postelcode"
    placeholder="pincode"
    value={formData.postelcod}
    onChange={changeHandler}
    className="outline"

    />
    <br/>
    <fieldset>
      <legend>By Email</legend>
      <div className="flex">
      <input
        type="checkbox"
        id="commants"
        name="commants"
        checked={formData.commants}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="commants">commants</label>
        <p>Get notified when someones post a commants on posting.</p>
      </div>
      </div>
      <div className="flex">
      <input
        type="checkbox"
        id="condidates"
        name="condidate"
        checked={formData.condidate}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="condidate">condidate</label>
        <p>Get notified when a condidates apply for job.</p>
      </div>
      </div>
      <div className="flex">
      <input
        type="checkbox"
        id="offers"
        name="offers"
        checked={formData.offers}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="offers">offers</label>
        <p>Get notified when a condidates accept or rejects an offer.</p>
      </div>
      </div>
      
    </fieldset>
    <fieldset>
    <label>Push Notifications</label>
    <p>These are deliverd via SMS on your mobile phone.</p>
    <input
    type="radio"
    id="pushEverything"
    name="pushNotifications"
    value="Everything"
    onChange={changeHandler}
    />
    
    <label htmlFor="pushEverything">Everything</label>
    <br/>
    <input
    type="radio"
    id="pushEmail"
    name="pushNotifications"
    value="smae as Email"
    onChange={changeHandler}
    />
    
    <label htmlFor="pushEmail">Same as email</label>
    <br/>
    <input
    type="radio"
    id="pushNothing"
    name="pushNotifications"
    value="no push notifications"
    onChange={changeHandler}
    />
    <label htmlFor="pushNothing">No push Notification</label>


    </fieldset>
    <button
    className="bg-blue-500 text-white font-bold rounded px-2 py-4" 
    >
save
    </button>
    
</fieldset>

    </form>
    

    </div>
  );
}

export default App;
