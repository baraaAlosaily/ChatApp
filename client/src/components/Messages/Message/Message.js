import React from 'react'
// import './Message.css'
import './Message.css'
import ReactEmoji from 'react-emoji';


const Message = ({message:{user,text},name}) => {
    let isSendByCurrentUser=false;
    const tirmmiedName=name.trim().toLowerCase();
    if(user===tirmmiedName){
        isSendByCurrentUser=true;
    }
    return (
       isSendByCurrentUser?(
           <div className="messageContainer justifyEnd">
               <p className="sentText pr-10">
                   {tirmmiedName}
               </p>
               <div className="messageBox backgroundBlue" >
                   <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
               </div>
           </div>
       ):(
        <div className="messageContainer justifyStart">
        <p className="sentText pl-10">
            {user}
        </p>
        <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
       </div>
       )
    )
}

export default Message
