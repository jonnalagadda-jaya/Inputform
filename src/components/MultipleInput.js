// import { useEffect, useState } from 'react'

// function MultipleInput() {

//     const [questions, setQuestions] = useState([]);
//     const [visibleQuestions, setVisibleQuestions] = useState([]);

//     useEffect(() => {
//         let data = [];
//         (new Array(100).fill(0)).forEach((el, i) => {
//             data.push({
//                 id: i + 1,
//                 label: "question/field ",
//                 visibility: true
//             })
//         });
//         setQuestions(data);
//         setVisibleQuestions(data);
//     }, [])


//     const toggleDeleteButton = (index) => {
//         questions[index]['visibility'] = false;
//         setQuestions([...questions]);
//         let visibleQs = questions.filter((question) => { return question.visibility });
//         setVisibleQuestions([...visibleQs]);
//     }

//     return (
//         <div className="App">
//             {
//                 visibleQuestions.map((ele, i) => {
//                     return (
//                         <div key={ele.label + ele.id + i}>
//                             <div onClick={(e) => toggleDeleteButton(ele.id - 1)} >
//                                 {i + 1}. {ele.label} {ele.id}
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// }

// export default MultipleInput

import React from 'react'
import { useState, useEffect } from 'react';
// import { ToggleButton } from 'react-bootstrap';

function MultipleInput(){
const [questions, setQuestions] = useState([])
const [visibleQuestions, setVisibleQuestions] = useState([])

        useEffect(()=>{
            var data =[];
            (new Array (100).fill(0)).forEach((el,i)=>{
                data.push({
                id:i+1,
                label:"questions",
                visibility: true
            })
        });
        setQuestions(data)
        setVisibleQuestions(data)
        },[])

const toggleDeleteButton=(index) =>{
    questions[index]['visibility']= false
    setQuestions([...questions]);
    let visibleQs = questions.filter((question)=>{return question.visibility})
    setVisibleQuestions([...visibleQs])
}  

return(
        <div className='app'>
            {
         visibleQuestions.map((ele,i)=>{
         return (
            <div key={ele.label+ele.id+i}>
            <button className='tests' onClick={(e)=>toggleDeleteButton(ele.id-1)}>
                {i+1}.{ele.label}.{ele.id}
            </button>
            </div>
         )
         })
        }
        </div>
    )
}
export default MultipleInput;