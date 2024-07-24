// TODO fix these errors

import { GET } from './user/[id].tsx';
import React from 'react'
import { Task } from './user/[id].tsx';

async function CallAPI() {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GET(requestObj);
    const body: Task[] = await response.json();
    return (
        <>
            <h1>Users</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {body.map(user => <tr key={user.task_id} >
                        <td>{user.task_name}</td>
                        <td>{user.student_id}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}
export default CallAPI;