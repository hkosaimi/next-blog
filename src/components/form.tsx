import { createPost } from "@/actions/actions";
import React from "react";

function Form() {
  return (
    <div>
      <form action={createPost} className="flex flex-col max-w-[400px] mx-auto  gap-2 my-10 ">
        <input
          className="border rounded px-3 h-10"
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          name="body"
          placeholder="Body content"
          className="border  rounded px-3 py-2"
          rows={6}
          required
        />
        <button className="h-10 bg-blue-500 px-5 rounded text-white">Submit</button>
      </form>
    </div>
  );
}

export default Form;
