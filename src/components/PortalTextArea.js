import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=(props)=>{
    return (
        <div>
            <textarea id="textarea" value={props.value}></textarea>
        </div>
    )
}
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose