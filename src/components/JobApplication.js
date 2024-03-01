import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function JobApplication(){
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    courseselect: "",
    birthday: null,
    employe: "",
    text: "",
    resume: "",
    referenceFname: "",
    referenceLname: "",
    referenceEmail: ""
  });

  const [submission, setSubmission] = useState([]);
  
  const handleInputChange = (e) => {
    const { name, value ,type, checked } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = { ...data };
    setSubmission([...submission, newSubmission]);
    setData({
      fname: "",
      lname: "",
      email: "",
      courseselect: "",
      birthday: null,
      employe: "",
      text: "",
      resume: "",
      referenceFname: "",
      referenceLname: "",
      referenceEmail: ""
    });
    console.log("User Data", newSubmission);
  };

    return(
        <div className='main-container'>
         <h1>Job Aplication Form</h1>
         <hr/>
         <form onSubmit={handleSubmit}>
          <p className='para1'>Thank you for your interest in working with us. Please check below for
          available job opportunities that meet your criteria and send your application by 
          filling out the Job Application Form.</p>
            <p>Name </p>
            <div className='name'>
         <input className='f-name' name='fname' placeholder='First' value={data.fname} onChange={handleInputChange}/>
         <input className='l-name' name='lname' placeholder='Last' value={data.lname} onChange={handleInputChange}/>
        </div>
        <div className='email'>
            <p>Email</p>
         <input className='e-mail' name='email' placeholder='john.deo@example.com'value={data.email} onChange={handleInputChange}/>
        </div>
        <div className='posation-date'>
            <div className='posation'>
        <p>What posation are you applying for?</p>
        <select className='options' name="courseselect" value={data.courseselect} onChange={handleInputChange}>
            <option>-Select-</option>
            <option>PHP BackEnd Developer</option>
            <option>Senior PHP Team Lader</option>
            <option>Front End Developer</option>
            <option>Web Development</option>
            <option>IT Manager </option>
            <option>Testing</option>
        </select>
        </div>
        <div className='date'>
        <p>Avaliable Date</p>
    <DatePicker
            className='calender'
            selected={data.birthday}
            onChange={(date) => handleInputChange({ target: { name: 'birthday', value: date } })}
            dateFormat="yyyy-MM-dd"
          />
    </div>
        </div>
        <div className='employement'>
       <p>What is your current employement status</p>
       <div className='emp'>
       <input type='radio' name="employe" value="employed" checked={data.employe=='employed'} onChange={handleInputChange}/> <label>Employed</label>
       <input className='selfemp' type='radio' name="employe" value="selfemploye" checked={data.employe=='selfemploye'} onChange={handleInputChange}/> <label>Self Emploeement</label>
        </div>
        <div className='unemp'>
       <input type='radio' name="employe" value="unemployed" checked={data.employe=="unemployed"} onChange={handleInputChange}/><label> UnEmployed</label>
       <input className='student' type='radio' name="employe" value="student" checked={data.employe=="student"} onChange={handleInputChange}/> <label>Student</label>
       </div>
               </div>
               <div className='resumeName'>
                <div className='resume-text'>
                <p> Please provide your resume link</p>
                <textarea className='textarea' name='text' placeholder='https://example.com' value={data.text} onChange={handleInputChange}></textarea>
                </div>
                <div className='resume-file'>
                <p>Please Upload your Resume</p>
                <input className='resumefile' type='file' name="resume" placeholder='Resume' value={data.resume} onChange={handleInputChange}/>
                </div>
               </div>
               <div className='reference'>
               <p>Do you have any reference? (Optional)</p>
               <input className='fname' name='referenceFname' placeholder='First' value={data.referenceFname} onChange={handleInputChange}/>
               <input className='lname' name='referenceLname' placeholder='Last' value={data.referenceLname} onChange={handleInputChange}/>
               </div>
               <div className='Remail'>
                <p>Reference Email</p>
                <input className='email' name='referenceEmail' placeholder='john.doe@example.com' value={data.referenceEmail} onChange={handleInputChange}/>
               </div>
                <button className='apply' type='submit'>Apply</button>
               </form>

    
        </div>
    )
}
export default JobApplication;