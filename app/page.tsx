'use client'
import type { User } from "./api/interfaces/interfaces"
import useSwr from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  // test user is 1
  const { data, error, isLoading } = useSwr<User[]>("/api/tasks/1", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            {user.first_name ?? `User ${user.id}`}
          </Link>
        </li>
      ))}
    </ul>
  );
}
