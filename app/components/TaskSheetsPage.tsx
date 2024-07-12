import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TaskSheetCard from './TaskSheetCard';

interface TaskSheet {
    id: number;
    name: string;
    description: string;
    tasks: Array<any>;
  }



  const TaskSheetsPage: React.FC = () => {
    const [taskSheets, setTaskSheets] = useState<TaskSheet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchTaskSheets = async () => {
        try {
          const response = await axios.get('/api/tasksheets');
          setTaskSheets(response.data);
          setLoading(false);
        } catch (err) {
            if (axios.isAxiosError(err)){
                setError(err.message);
            } else {
                setError('An unexpected error occurred.')
            }
          setLoading(false);
        }
      };
  
      fetchTaskSheets();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="task-sheets-page p-4">
        <h2 className="text-2xl font-bold mb-4">Your Task Sheets</h2>
        <div className="task-sheets-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {taskSheets.map((taskSheet) => (
            <TaskSheetCard key={taskSheet.id} taskSheet={taskSheet} />
          ))}
        </div>
      </div>
    );
  };
  
  export default TaskSheetsPage;