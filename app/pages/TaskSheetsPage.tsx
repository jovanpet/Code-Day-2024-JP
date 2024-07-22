"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskSheetList from '../components/TaskSheet/TaskSheetList';
import { TaskSheet } from '../api/interfaces/interfaces';

const TaskSheetPage: React.FC = () => {
    const [taskSheets, setTaskSheets] = useState<TaskSheet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTaskSheets = async () => {
            try {
                const response = await axios.get('/api/task-sheets/${userId}');
                setTaskSheets(response.data.tasks);
            } catch (err) {
                setError('Failed to fetch task sheets');
            } finally {
                setLoading(false);
            }
        };

        fetchTaskSheets();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Task Sheets</h1>
            <TaskSheetList taskSheets={taskSheets} />
        </div>
    );
};

export default TaskSheetPage;
