import { GET } from './[id].tsx';
import React from 'react'
import { User } from '../interfaces/interfaces.tsx';

async function CallAPI() {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GET(requestObj);
    console.log(response);
    const body:{    user:{id: number;
        task_sheet_ids: string;
        first_name: string;
        second_name: string;
        student: boolean;}} = await response.json();
    return (
        <>

            <table className='table table-bordered'>

            <th>Users</th>
            <tbody>
                        {Object.keys(body.user).map((key) => (
    <tr>
        <tr>{key}</tr>
        <td>{body.user[key]}</td>
 
    </tr>
))}
                </tbody>
            </table>
        </>
    )
}
export default CallAPI;