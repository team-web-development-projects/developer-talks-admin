import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CalendarSelect() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
    };
    const handleChange = (date) => {
        setEndDate(date);
    };

    return (
        <div>
            <h1>달력 선택 예제</h1>
            <DatePicker selected={startDate} onChange={handleDateChange} />
            {startDate && (
                <p>시작 날짜: {startDate.toDateString()}</p>
            )}
            <h1>달력 선택 예제</h1>
            <DatePicker selected={endDate} onChange={handleChange} />
            {endDate && (
                <p>끝 날짜: {endDate.toDateString()}</p>
            )}
        </div>
    );
}

export default CalendarSelect;
