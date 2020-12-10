import React from "react";
import "./text-field-style.scss";
import Cleave from 'cleave.js/react';

const PhoneDataStyle = (props) => {
    return (
        <div className="nmef-text-field">
            {props.title ? <span>{props.title}</span> : null}

            <Cleave
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                options={{
                    numericOnly: true,
                    blocks: [0, 3, 3, 4, 10],
                    delimiters: ["(", ") ", "-", " x"],
                    delimiterLazyShow: true
                }}
                onChange={props.onChange}
            />

        </div>
    );
};

export default PhoneDataStyle;