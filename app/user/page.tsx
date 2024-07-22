'use client'
import type { User } from "../api/interfaces/interfaces";
import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserPage() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr<User>(
    query.id ? `/api/user/${query.id}` : null,
    fetcher,
  );

  if (error) return <div>Failed to load user</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return <div>{data.first_name}</div>;
}


        // return (
        //     <>
        //         <h1>Users</h1>
        //         <table className='table table-bordered'>
        //             <thead>
        //                 <tr>
        //                     <th>Name</th>
        //                     <th>Users</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {body.map(task => 
        //                     <tr key={task.task_id} >
        //                     <td>{task.task_name}</td>
        //                     <td>{task.user_ids}</td>
        //                     </tr>
        //                 )}
        //             </tbody>
        //         </table>
        //     </>
        // )
