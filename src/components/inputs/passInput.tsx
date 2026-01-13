import React, { useState } from "react";
import { IProps } from "./typess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";



const PassInput =  ({register, error = ''}:IProps) => { 
const [show,setShow] = useState(false)
//passwordy yervalu te cherevalu hamar

    return(
        <div>
            <div className="div-input-pass">
                <input
                    className="passInput"
                    type={show ? "text":"password"}
                    // ete false a tesaneli chi 
                    // ete true a tesaneli a
                    placeholder="password"
                    {...register("password")}
                />
                <FontAwesomeIcon
                    icon={faEye}
                    className="eye-icon"
                    onClick={() => setShow(!show)}
                />
            </div>
            {/* usery sekhmum a iconi vra */}
            {error && <p className="form-pass-error-text">{error}</p>}
        </div>
    )
}

export default PassInput;