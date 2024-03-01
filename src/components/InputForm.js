import React, { useState } from 'react'

function InputForm(){

    const[data, setData] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        phoneNumber:"",
        email: "",
        gender: "",
        Address:{
            houseNumber:"",
            city:"",
            state:"",
            country:"",
            pincode:""
        },
        adharCardNo: "",
        roomNo: "",
        uploadPhoto:null,
        uploadAdharCard:null,
        joining: {
            withFood: false,
            withoutFood: false,
            fewdaysStay: false,
            guest: false
          }
    });
      
    const [submission, setSubmission] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'joining') {
      setData((prevData) => ({
        ...prevData,
        joining: {
          ...prevData.joining,
          [value]: checked
        }
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          Address: {
            ...prevData.Address,
            [name]: value,
          },
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newSubmission = { ...data };
        setSubmission([...submission, newSubmission]);
        setData({
          firstName: "",
          lastName: "",
          fatherName: "",
          phoneNumber: "",
          email: "",
          gender: "",
          Address: "",
          adharCardNo: "",
          roomNo: "",
          uploadPhoto: "",
          uploadAdharCard: "",
          joining: {
            withFood: false,
            withoutFood: false,
            fewdaysStay: false,
            guest: false
          }
        });
      };
    
    
    return( 
        <div className='container'>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
            <div className='row'>
            <label className='label'>First Name </label>
            <input className='data input-box' name="firstName" placeholder='Enter your First Name' value={data.firstName} onChange={handleInputChange}/>
            </div>
            <div  className='row'>
            <label className='label'>Last Name </label>
            <input  className='data input-box' name="lastName" placeholder='Enter your Last Name' value={data.lastName} onChange={handleInputChange}/>
            </div>
            <div  className='row'>
            <label className='label'>Father Name </label>
            <input  className='data input-box' name="fatherName" placeholder='Enter your Father Name'value={data.fatherName} onChange={handleInputChange}/>
            </div>
            <div  className='row'>
            <label className='label'> Phone Number </label>
            <input  className='data input-box' name="phoneNumber" placeholder='Enter your Phone Number'value={data.phone} onChange={handleInputChange}/>
            </div>
            <div>
            <label> Email :</label>
            <input className='data' name="email" placeholder='Enter your Email'value={data.email} onChange={handleInputChange}/>
            </div>
            <div>
            <label>Gender: </label>
            <input type='radio' name='gender' value="male"checked={data.gender==='male'} onChange={handleInputChange}/> 
            <label>Male</label>
            <input type='radio' name='gender' value="female" checked={data.gender==='female'} onChange={handleInputChange}/>
            <label>FeMale</label>
            <input type='radio' name='gender' value="transgender" checked={data.gender==='transgender'} onChange={handleInputChange}/>
            <label>TransGender</label> 
            </div>
            <p>Address: </p>
            <div>
            <label>House Number</label>
            <input className='data' name="houseNumber" placeholder='Enter your House Number' value={data.Address.houseNumber} onChange={handleAddressChange}/>
            <label>Select City Name: </label>
            <select className='data' name='city' value={data.Address.city} onChange={handleAddressChange}>
                 <option></option>
                <option>Khammam</option>
                <option>Vijayawada</option>
                <option>Hyderabad</option>
                <option>Gampalagudam</option>
                <option>Warangal</option>
            </select>
            <label>Select State Name: </label>
            <select className='data' name='state' value={data.Address.state} onChange={handleAddressChange}>
                <option></option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>TamilNadu</option>
                <option>Kerala</option>
                <option>Maharashtra</option>
            </select>
            <label>Select Country Name: </label>
            <select className='data' name='country' value={data.Address.country} onChange={handleAddressChange}>
            <option></option>
                <option>United States</option>
                <option>United Kingdam</option>
                <option>India</option>
                <option>Australia</option>
                <option>Canada</option>
            </select>
            <label>Pin Code</label>
            <input className='data' name='pincode' placeholder='Enter your Pin code' value={data.Address.pincode} onChange={handleAddressChange}/>
            </div>
            <div>
            <label>Adharcard No : </label>
            <input className='data' name='adharCardNo' placeholder='Enter your AdharCard Number'value={data.adharCardNo} onChange={handleInputChange}/> 
            </div>
            <div>
            <label>Room No : </label>
            <input className='data' name='roomNo' placeholder='Enter your Room Number' value={data.roomNo} onChange={handleInputChange}/>
            </div>
            <div>
            <label>Upload Photo :</label>
                <input className='data' type='file' value={data.uploadPhoto} onChange={handleInputChange}/> 
                </div>
                <div>
                <label>Upload Adhar Card :</label>
                <input className='data' type='file' name='uploadAdharCard' value={data.uploadAdharCard} onChange={handleInputChange}/>
                </div>
<div className='aboutjoining'>
  <p>Are you joining With Food or Without Food</p>
  <label>
    <input
      type='checkbox'
      name="withFood"
      checked={data.joining.withFood}
      onChange={() => handleInputChange({ target: { name: 'joining', value: 'withFood', checked: !data.joining.withFood } })}
    />
    With Food
  </label>
  <label>
    <input
      type='checkbox'
      name="withoutFood"
      checked={data.joining.withoutFood}
      onChange={() => handleInputChange({ target: { name: 'joining', value: 'withoutFood', checked: !data.joining.withoutFood } })}
    />
    Without Food
  </label>
  <label>
    <input
      type='checkbox'
      name="fewdaysStay"
      checked={data.joining.fewdaysStay}
      onChange={() => handleInputChange({ target: { name: 'joining', value: 'fewdaysStay', checked: !data.joining.fewdaysStay } })}
    />
    Few Days Stay
  </label>
  <label>
    <input
      type='checkbox'
      name="guest"
      checked={data.joining.guest}
      onChange={() => handleInputChange({ target: { name: 'joining', value: 'guest', checked: !data.joining.guest } })}
    />
    Guest
  </label>
</div>

                
            <div>
            <button type='submit'>Submit</button>
            </div>
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>FatherName</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>gender</th>
                        <th>Address</th>
                        <th>AdharCard No</th>
                        <th>Room No</th>
                        <th>Photo</th>
                        <th>Adharcard Photo</th>
                        <th>Joining</th>
                    </tr>
                </thead>
                <tbody>
                    {submission.map((item,index)=>(
                        <tr key={index}>
                             <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.fatherName}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{`${item.Address.houseNumber},${item.Address.city},${item.Address.state},${item.Address.country}`}</td>
                                <td>{item.adharCardNo}</td>
                                <td>{item.roomNo}</td>
                                <td>{item.uploadPhoto}</td>
                                <td>{item.uploadAdharCard}</td>              
                                <td>
                                {item.joining.withFood ? 'With Food ' : ''}
                                {item.joining.withoutFood ? 'Without Food ' : ''}
                                {item.joining.fewdaysStay ? 'Few Days Stay ' : ''}
                                {item.joining.guest ? 'Guest ' : ''}
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default InputForm;