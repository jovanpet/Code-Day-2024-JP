'use client'
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from './interfaces/interfaces.tsx';

// Fake users data
//    id: number;
// task_ids: string;//Task[]; //in SQL database this would be a json
// first_name: string;
// second_name: string;
// student: boolean;
const users: User[] = [{ id: 1, task_ids: "", first_name: "T", second_name: "B", student: false }, { id: 2, task_ids: "", first_name: "A", second_name: "B", student: false }, { id: 3, task_ids: "", first_name: "B", second_name: "B", student: false }];

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<User[]>,
) {
    // Get data from your database
    res.status(200).json(users);
}
