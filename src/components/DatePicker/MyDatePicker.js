import React from 'react'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export default function MyDatePicker() {
    return (
        <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={new Date()}
            className="custom-date-picker"
        />
    )
}
