"use client";
import React, { useState } from "react";

function UpvoteBtn() {
  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 mt-10"
        onClick={() => setUpvoteCount(upvoteCount + 1)}>
        Upvote
        {upvoteCount}
      </button>
    </div>
  );
}

export default UpvoteBtn;
