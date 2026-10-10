import React, { useState } from "react";
import { Button } from "../ui/Button";

interface Props {
  subject: string;
}

export default function SimpleEventForm({ subject }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { subject, name, email, need };
    // Replace with real submit logic (API call, form handler, etc.)
    console.log("SimpleEventForm submit", payload);
    alert("Form submitted — check console for payload");
    setName("");
    setEmail("");
    setNeed("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="subject" value={subject} />

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">What do you need</label>
        <textarea
          required
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Tell us briefly what you need"
        />
      </div>

      <div>
        <Button type="submit">Send enquiry</Button>
      </div>
    </form>
  );
}
