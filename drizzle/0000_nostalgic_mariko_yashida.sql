CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`organization` text,
	`role` text,
	`intent` text NOT NULL,
	`program_slug` text,
	`goal` text NOT NULL,
	`timeline` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`source_path` text DEFAULT '/contact' NOT NULL
);
--> statement-breakpoint
CREATE INDEX `inquiries_created_at_idx` ON `inquiries` (`created_at`);--> statement-breakpoint
CREATE INDEX `inquiries_status_idx` ON `inquiries` (`status`);--> statement-breakpoint
CREATE INDEX `inquiries_program_slug_idx` ON `inquiries` (`program_slug`);