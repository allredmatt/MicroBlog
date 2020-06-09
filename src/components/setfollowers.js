import React, {useState} from 'react';

export default function WhoToFollow ({users, follow, setFollower, currentUser}) {

    const [filterBox, setFilterBox] =  useState("");

    if(users.loading) {return <div className="message-div">Loading...</div>};
    if(users.error) {return <div className="message-div">Error... {users.error}</div>};

    const handelCheck = (event) => {
        setFollower(event.target.id)
    }

    let regex = filterBox?  new RegExp (`${filterBox}`, 'i') : new RegExp (`[A-Z]`, 'i')

    let checkboxArray = users.data.allUsers.data.map((user) => {
        if(!regex.test(user.nickName)) {return("")};
        if(user.nickName === currentUser) {return("")};
            return( 
            <React.Fragment key={"frag"+user._id}>
                <label key={"label"+user._id} htmlFor={user._id}>{user.nickName}</label>
                <input type="checkbox" key={user._id} id={user._id} placeholder="Add a filter..." onClick={handelCheck} label={user.nickName} defaultChecked={follow.includes(user._id)}/>
                <br />
            </React.Fragment>)
    })

    return (
        <div style={ {color: "white", textAlign: "left", paddingLeft:"500px"}}>
            Who do you want to follow? <br />
            Filter names:
            <input type="text" id="filterBox" value={filterBox} onChange={(event)=>setFilterBox(event.target.value)}/><br />
            {checkboxArray}
        </div>
    );
}