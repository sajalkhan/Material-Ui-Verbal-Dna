import React from "react";
import "./text-field-style.scss";
import Cleave from 'cleave.js/react';

const MoneyDataStyle = (props) => {
    return (
        <div className="nmef-text-field">
            <Cleave
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                options={{
                    prefix: '$',
                    numeral: true,
                    numeralThousandsGroupStyle: 'thousand'
                }}
                onChange={props.onChange}
            />

        </div>
    );
};

export default MoneyDataStyle;
