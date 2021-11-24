import React from "react";
import {Link} from "react-router-dom";

export const NotFoundPage: React.FC = () => {
    return (
        <>
            <div className={'center mT-2'}>
                <h4>
                    <Link to={'/'} children={'Back To Home'}/>
                </h4>
                <img src="https://i.pinimg.com/564x/a6/c1/63/a6c1639daa955f333a497a2e571adbb1.jpg" alt=""/>
                <h1>Not Found 404. </h1>
            </div>
        </>
    )
}