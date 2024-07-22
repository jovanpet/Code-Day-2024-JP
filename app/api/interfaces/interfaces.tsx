//TODO move all the interfaces here.
export interface User {
    id: number;
    task_ids: string;//Task[]; //in SQL database this would be a json
    first_name: string;
    second_name: string;
    student: boolean;
    //TODO Add more properties here, name, email, and everything else that makes sense please.
}
export interface Task {
    task_id: number
    task_name: string;
    completed: boolean;
    user_ids: string;//User[]; //json in database. say we complete the task, we would need the users to know 
}
