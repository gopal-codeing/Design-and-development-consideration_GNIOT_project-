import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState([]);
  const childId = "child123"; // Example child ID

  useEffect(() => {
    axios.get(`/api/analytics?childId=${childId}`).then((response) => {
      setAnalytics(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Parent Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Activity</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map((log) => (
            <tr key={log.id}>
              <td>{log.timestamp}</td>
              <td>{log.activityType}</td>
              <td>{log.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
