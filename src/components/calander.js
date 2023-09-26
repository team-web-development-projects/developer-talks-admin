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

    // 날짜 포맷팅 함수 정의
    const formatDate = (date) => {
        if (!date) return "";
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
        return `${year}년 ${month} ${day}일 ${dayOfWeek}`;
    };

    return (
        <div>
            <h1>달력 선택 예제</h1>
            <DatePicker selected={startDate} onChange={handleDateChange} />
            {startDate && (
                <p>시작 날짜: {formatDate(startDate)}</p>
            )}
            <h1>달력 선택 예제</h1>
            <DatePicker selected={endDate} onChange={handleChange} />
            {endDate && (
                <p>끝 날짜: {formatDate(endDate)}</p>
            )}
        </div>
    );
}

export default CalendarSelect;
