import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ROOT_API } from "../constants/api";

const Main = () => {
  const token = localStorage.getItem("admin");
  const [chartData, setChartData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getUserList() {
    try {
      setIsLoading(true);

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

      // Sort chartData by date
      chartData.sort((a, b) => new Date(a.name) - new Date(b.name));

      setChartData(chartData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString('ko-KR', options);
  }

  return (
    <div className="container">
      <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        {chartData.length > 0 && (
          <BarChart width={800} height={400} data={chartData}>
            <Bar dataKey="num" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-xl font-bold mb-4">날짜 선택</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">시작 날짜</label>
            <DatePicker
              className="border rounded p-2 w-full"
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="yyyy-MM-dd (EEE)"
            />
            {startDate && <p className="mt-2 text-sm text-gray-500">시작 날짜:  {formatDate(startDate)}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">끝 날짜</label>
            <DatePicker
              className="border rounded p-2 w-full"
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy-MM-dd (EEE)"
            />
            {endDate && <p className="mt-2 text-sm text-gray-500">끝 날짜: {formatDate(endDate)}</p>}
          </div>
        </div>

        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={getUserList} disabled={!startDate || !endDate || isLoading}>
          날짜 선택
        </button>
      </div>
    </div>
  );
};

export default Main;
