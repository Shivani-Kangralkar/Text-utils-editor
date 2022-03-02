import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //   If props.alert is false then dont execute div part, If it is true than return div part
    // if props.alert is not null then return div part, if it is null then dont execute div part
    //`alert alert-${props.alert.type} alert-dismissible fade show` ----contain green color for success
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
