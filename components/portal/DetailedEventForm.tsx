import React, { useState } from "react";
import { Button } from "../ui/Button";

interface Props {
  subject: string;
}

export default function DetailedEventForm({ subject }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("Incentive");
  const [destinations, setDestinations] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [dates, setDates] = useState("");
  const [datesFlexible, setDatesFlexible] = useState("No");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      subject,
      name,
      company,
      email,
      eventType,
      destinations,
      groupSize,
      dates,
      datesFlexible,
      budget,
      interests,
      details,
    };
    // Replace with real submit logic (API call, form handler, etc.)
    console.log("DetailedEventForm submit", payload);
    alert("Form submitted — check console for payload");
    // reset
    setName("");
    setCompany("");
    setEmail("");
    setEventType("Incentive");
    setDestinations("");
    setGroupSize("");
    setDates("");
    setDatesFlexible("No");
    setBudget("");
    setInterests("");
    setDetails("");
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
        <label className="block text-sm font-medium">
          Company or organisation
        </label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Company or organisation"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email address</label>
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
        <label className="block text-sm font-medium">Type of event</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
        >
          <option>Incentive</option>
          <option>Conference</option>
          <option>Celebration</option>
          <option>Private event</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          Preferred destination(s) or "Open to suggestions"
        </label>
        <input
          value={destinations}
          onChange={(e) => setDestinations(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g. Bhutan, India, Open to suggestions"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Approximate group size
        </label>
        <input
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g. 30-50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Preferred dates or season
        </label>
        <input
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g. 12-18 June 2027 or Summer 2027"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Are your dates flexible?
        </label>
        <div className="mt-1 flex gap-4">
          <label>
            <input
              type="radio"
              checked={datesFlexible === "Yes"}
              onChange={() => setDatesFlexible("Yes")}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={datesFlexible === "No"}
              onChange={() => setDatesFlexible("No")}
            />{" "}
            No
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">
          Estimated budget (optional)
        </label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Optional — budget range"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Experiences or venues that interest you (optional)
        </label>
        <input
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Any particular experiences or venues"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Tell us more about what you're planning
        </label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Provide any additional details"
        />
      </div>

      <div>
        <Button type="submit">Send enquiry</Button>
      </div>
    </form>
  );
}
