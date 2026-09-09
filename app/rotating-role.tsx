"use client";

import { useEffect, useState } from "react";

// Edit this list any time; it just cycles through in the hero eyebrow.
const ROLES = [
  "Backend Engineer",
  "Full-Stack Developer",
  "Web & Mobile Developer",
  "Software Engineer",
  "Cloud Engineer",
];

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_MS = 1600;

export default function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState(ROLES[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, TYPE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, deleting ? DELETE_MS : TYPE_MS);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span className="role-type">
      <span aria-hidden="true">
        {text}
        <span className="role-cursor" />
      </span>
      <span className="sr-only">{ROLES[0]}</span>
    </span>
  );
}
