import Image from "next/image";
import sql from "@/lib/database";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "My Simple Blog",
  description: "A simple blog built with Next.js and Postgres",
};

export default async function Home() {
  const posts = await sql`select * from posts`;

  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold pb-5">My Simple Blog</h1>

      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{process.env.ADMIN_USERNAME}</CardDescription>
              </CardHeader>
              {post.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
