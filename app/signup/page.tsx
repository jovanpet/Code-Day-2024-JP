'use client';
import React, {useState} from "react";
import ChooseRole from "../components/ChooseRole";
import AddKid from "../components/AddKid";

// import NextAuth from "next-auth"
// import Cognito from "next-auth/providers/cognito"
 
//import add user api from ..

export default function SignUp() {
    const [active, setActive] = useState<number>(-1);
    const [isParent, setIsParent] = useState(false);
    const toggleHandler = (id: number) => () =>
        setActive((active) => (active === id ? -1 : id));
    

    const handleSetTrue = () => {
        setIsParent(true);
    };
    
    const handleSetFalse = () => {
        setIsParent(false);
    };


    {/* Alternating between stages of account setup */}
    return (
        <div>
            <div className="navbar items-center text-center w-full flex justify-center" >I am..</div>
            <div>
                {active === -1 && <ChooseRole setTrue = {handleSetTrue} setFalse={handleSetFalse}/>}
            </div>
            <div onClick={toggleHandler(1)}>
          Click to show content 1{active === 1 && <AddKid/>}
            </div>
            {/* <div onClick={toggleHandler(2)}>
          Last is just api call to add user with information given{active === 2 && <Content2 />}
            </div> */}
            <div>{isParent}</div>
        </div>
    );
}