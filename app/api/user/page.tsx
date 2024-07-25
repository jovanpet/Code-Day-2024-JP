import { GetUserTimeSheets } from './[id].tsx';
import React from 'react';

async function CallAPI() {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GetUserTimeSheets(requestObj);
    const body: { user: { [key: string]: any } } = await response.json();
    return (
        <>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Users</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(body.user).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{body.user[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default CallAPI;