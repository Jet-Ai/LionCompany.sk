CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`service` text NOT NULL,
	`location` text NOT NULL,
	`message` text NOT NULL,
	`created_at` integer NOT NULL
);
