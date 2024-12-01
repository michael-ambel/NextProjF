"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton({ onClick }) {
  const [formState, formAction] = useFormStatus();
  return (
    <button disabled={formState.isSubmitting} className="btn-primary">
      {formState.isSubmitting ? (
        <span>Submitting...</span>
      ) : (
        <span>submit</span>
      )}
    </button>
  );
}
