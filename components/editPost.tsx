"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditPostAction(post) {
  console.log(post);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Post</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={`${post.post.id}-name`} className="text-right">
              Title
            </Label>
            <Input
              id={`${post.post.id}-name`}
              value={post.post.title}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={`${post.post.id}-content`} className="text-right">
              Content
            </Label>
            <Textarea
              id={`${post.post.id}-content`}
              value={post.post.content}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              onClick={() => {
                console.log(post);
                fetch("/api/editPost", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    authorization:
                      "bearer " + document.getElementById("apiKey").value,
                  },
                  body: JSON.stringify({
                    id: post.post.id,
                    title: document.getElementById(`${post.post.id}-name`)
                      .value,
                    content: document.getElementById(`${post.post.id}-content`)
                      .value,
                  }),
                }).then((res) => {
                  res.json().then((data) => {
                    if (data.success) {
                      alert("Post edited");
                      location.reload();
                    } else {
                      alert("Error: " + data.error);
                    }
                  });
                });
              }}
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
