import React from 'react';
import { useRouter } from 'next/router';
import TaskSheetDetail from '../../components/TaskSheet/TaskSheetDetail';

const TaskSheetPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    const taskSheetId = parseInt(id as string, 10);

    return (
        <div>
            <TaskSheetDetail taskSheetId={taskSheetId} />
        </div>
    );
};

export default TaskSheetPage;
