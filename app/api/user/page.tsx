import { GetUserTimeSheets } from './[id].tsx';
import React from 'react';

async function CallAPI() {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GetUserTimeSheets(requestObj);
    const body = await response.json();
    console.log(body.body)
    return (
        <>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Users</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(body.body).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default CallAPI;