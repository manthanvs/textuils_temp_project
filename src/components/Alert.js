import React from 'react'

function Alert(props) {
  const capitalise = (word) =>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    // here will take charAt(0) i.e. is s from the lower variable and UpperCase it the concatenation takes place and add the remaining part to the string by using slice , slice will bring you string from (start index , end index) as end index is not given it start slicing from first Index to Last index and Bring "uccess"
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">    
    <strong> {capitalise(props.alert.type)} : </strong> {props.alert.message}
    {/*
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
    </button>*/}
  </div>
  )
}

export default Alert