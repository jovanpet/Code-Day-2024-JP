
import React from 'react';

interface ToggleButtonsProps {
    setTrue: () => void;
    setFalse: () => void;
  }  

const ChooseRole: React.FC<ToggleButtonsProps> = ({ setTrue, setFalse }) => {
    return (
        <div className="flex w-full"><div className="card rounded-box grid  flex-grow place-items-center">
            <figure className="px-10 pt-10 pb-10 bg-white rounded-b-xl">
                <img
                    src="https://w1.pngwing.com/pngs/449/801/png-transparent-smiley-face-boy-child-human-avatar-black-facial-expression-black-and-white.png"
                    alt="Child"
                    className="rounded-xl object-cover w-52 h-52" />
            </figure>
            <div className="card-body items-center text-center pt-11">
                {/* <h2 className="card-title">a Kid/Student</h2> */}
                {/* <p>a parent</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={setFalse}>a Kid/Student</button>
                </div>
            </div>
        </div>

        <div className="divider divider-horizontal">OR</div>

        <div className="card rounded-box grid flex-grow place-items-center">
            <figure className="px-10 pt-10 pb-10 bg-white rounded-b-xl">
                <img
                    src="https://static.thenounproject.com/png/2734647-200.png"
                    alt="Parent"
                    className="rounded-xl object-cover h-52 w-52" />
            </figure>
            <div className="card-body items-center text-center pt-11">
                {/* <h2 className="card-title">Shoes!</h2> */}
                {/* <p>a child/student</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={setTrue} >A Parent</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ChooseRole;

