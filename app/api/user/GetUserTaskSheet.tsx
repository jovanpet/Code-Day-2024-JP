import { GetUserTimeSheets } from './[id].tsx';

async function CallAPI() {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GetUserTimeSheets(requestObj);
    const body = await response.json();
    return (
        <>
            
            <h1 style = {{padding: '8px'}}>Table of Task Sheets for users</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User: {requestObj.nextUrl.searchParams}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(body.body).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                        </tr>
                    ))}
                    {Object.keys(body.body.task_sheet_ids).map((key) => (
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