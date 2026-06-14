"use client";

import { useState } from "react";

export default function FeedbackForm({ refreshFeedback }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    setName("");
    setMessage("");
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Write your feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}