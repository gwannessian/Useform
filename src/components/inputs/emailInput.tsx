import React from "react";
import { IProps } from "./typess";
import "./styles.css";


//props enq anum registery u errory
const EmailInput =  ({register, error}:IProps) => { 
 
    return(
        <>
            <input
                className="emailInput"
                type="text"
                placeholder="Email"
                {...register("email")}
                // kapum a inputy form statei het 
                // validationa anum(inch bayman ka eta)
            />
            {error && <p className="form-email-error-text">{error}</p>}
            {/* ete skhal ka cuyc e talis error.message-y
            ete chka ban chi anum  */}
        </>
   
    )
}

export default EmailInput;