"use client";

import { useState } from "react";
import { Button, LineIcon } from "@/components/ui/Button";
import { WaitlistModal } from "@/components/ui/WaitlistModal";

interface CourseActionProps {
  available: boolean;
  ctaHref: string;
  ctaLabel: string;
  courseSlug: string;
  courseTitle: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CourseAction({
  available,
  ctaHref,
  ctaLabel,
  courseSlug,
  courseTitle,
  className,
  size = "lg"
}: CourseActionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (available) {
    // Available courses always go to LINE to book
    return (
      <Button
        href={ctaHref}
        external
        variant="lime"
        size={size}
        className={className}
      >
        <LineIcon /> {ctaLabel}
      </Button>
    );
  }

  // Not available -> Open Waitlist Modal instead of Line
  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        variant="outline"
        size={size}
        className={className}
      >
        {ctaLabel}
      </Button>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseSlug={courseSlug}
        courseTitle={courseTitle}
      />
    </>
  );
}
