"use client";

import { useState } from "react";
import { addTicket } from "../actions";

export default function CreateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <form className="w-1/2" action={addTicket}>
      <label>
        <span>Title:</span>
        <input name="title" required type="text" />
      </label>

      <label>
        <span>Body:</span>
        <textarea name="body" required />
      </label>

      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Midium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>

      <button disabled={isSubmitting} className="btn-primary">
        {isSubmitting ? <span>Submitting...</span> : <span>submit</span>}
      </button>
    </form>
  );
}
