import React from "react";
import { IProps } from "./typess";
import "./styles.css";


//nuyn dzevn el user inputy 

const UserInput =  ({register, error = ''}:IProps) => { 
 
    return(
        <>
            <input
                className="userName"
                type="userName"
                placeholder="UserName"
                {...register("userName")}
            />
            {error && <p className="form-user-error-text">{error}</p>}
        </>
   
    )
}

export default UserInput;