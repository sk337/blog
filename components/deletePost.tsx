"use client";

import { Button } from "@/components/ui/button";

export default function DeletePostButton(id) {
  return (
    <Button
      variant="destructive"
      onClick={() => {
        fetch("/api/deletePost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + document.getElementById("apiKey").value,
          },
          body: JSON.stringify({ id: id }),
        }).then((res) => {
          res.json().then((data) => {
            if (data.success) {
              alert("Post deleted");
              location.reload();
            } else {
              alert("Error: " + data.error);
            }
          });
        });
      }}
    >
      Delete
    </Button>
  );
}
