import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import DeletePostButton from "@/components/deletePost";
import EditPostAction from "@/components/editPost";

import sql from "@/lib/database";

export const metadata = {
  title: "Admin Panel",
};

export default async function Admin() {
  const posts = await sql`select * from posts`;

  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold pb-5">Admin Panel</h1>
      <input
        type="password"
        id="apiKey"
        placeholder="ApiKey"
        className="w-full p-2 rounded-md border border-gray-300"
      />
      <Table>
        <TableCaption>A Lists of posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.created_at.toString()}</TableCell>
              <TableCell>{post.content}</TableCell>
              <TableCell className="flex flex-row gap-2">
                <EditPostAction post={post} />
                <DeletePostButton id={post.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
