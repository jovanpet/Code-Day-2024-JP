import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import { Task } from '@/app/api/interfaces/interfaces';

interface TaskSheetDetailProps {
  taskSheetId: number;
}

const TaskSheetDetail: React.FC<TaskSheetDetailProps> = ({ taskSheetId }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`/api/task-sheets/${taskSheetId}`);
                setTasks(response.data.tasks);
            } catch (err) {
                setError('Failed to fetch tasks');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [taskSheetId]);

    const handleTaskCompletion = (taskName: string) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.task_name === taskName ? { ...task, completed: !task.completed } : task
            ).sort((a, b) => Number(a.completed) - Number(b.completed))
        );
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Tasks for Task Sheet {taskSheetId}</h1>
            <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
        </div>
    );
};

export default TaskSheetDetail;
