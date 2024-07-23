import { TaskSheet } from '../interfaces/interfaces';

// This constant is for testing purposes only, remove when not needed
const taskSheets: TaskSheet[] = [
    {
        id: 1,
        tasks: [
            { task_name: 'Task 1', completed: false },
            { task_name: 'Task 2', completed: false },
            { task_name: 'Task 3', completed: false }
        ]
    },
    {
        id: 2,
        tasks: [
            { task_name: 'Task 4', completed: false },
            { task_name: 'Task 5', completed: false },
            { task_name: 'Task 6', completed: false }
        ]
    },
    {
        id: 3,
        tasks: [
            { task_name: 'Task 7', completed: false },
            { task_name: 'Task 8', completed: false },
            { task_name: 'Task 9', completed: false }
        ]
    }
];

// TODO: Implement this function to use a real API
/**
 * Returns the task sheet with the given ID
 * 
 * @param id The ID of the task sheet to get
 * @returns The task sheet with the given ID
 */
const getTaskSheetById = (id: number): TaskSheet | undefined => {
    return taskSheets.find(taskSheet => taskSheet.id === id);
};

export default getTaskSheetById;