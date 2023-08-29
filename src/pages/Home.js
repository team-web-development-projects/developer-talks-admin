import React, { useState, useEffect } from "react";
import NavSideBar from '../layouts/NavSideBar';
import { Outlet } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { ROOT_API } from "../constants/api";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
    const token = localStorage.getItem("admin");
    const [chartData, setChartData] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    async function getUserList() {
        try {
            const { data } = await axios.get(`${ROOT_API}/admin/visitors/daily-count`, {
                params: { startDate: startDate.toISOString().slice(0, 10), endDate: endDate.toISOString().slice(0, 10) },
                headers: {
                    "Content-Type": "application/json",
                    "X-AUTH-TOKEN": token,
                },
            });

            // 데이터 가공
            const chartData = Object.keys(data).map((date) => ({
                name: date,
                num: data[date],
            }));
            setChartData(chartData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        if (startDate && endDate) {
            getUserList();
        }
    }, [startDate, endDate]);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className="flex flex-row mx-auto">
            <NavSideBar />
            <Outlet />
            <BarChart width={500} height={200} data={chartData}>
                <Bar dataKey="num" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
            <div>
                <h1>시작 날짜 선택</h1>
                <DatePicker selected={startDate} onChange={handleStartDateChange} />
                {startDate && (
                    <p>시작 날짜: {startDate.toDateString()}</p>
                )}
            </div>
            <div>
                <h1>끝 날짜 선택</h1>
                <DatePicker selected={endDate} onChange={handleEndDateChange} />
                {endDate && (
                    <p>끝 날짜: {endDate.toDateString()}</p>
                )}
            </div>
            <button onClick={getUserList} disabled={!startDate || !endDate}>날짜 선택</button>
        </div>
    );
};

export default Home;
