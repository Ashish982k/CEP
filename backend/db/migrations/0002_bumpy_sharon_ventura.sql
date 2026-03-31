DROP TABLE `users`;--> statement-breakpoint
CREATE INDEX `account_user_id_idx` ON `account` (`userId`);--> statement-breakpoint
CREATE UNIQUE INDEX `account_provider_account_uq` ON `account` (`providerId`,`accountId`);--> statement-breakpoint
ALTER TABLE `account` DROP COLUMN `password`;--> statement-breakpoint
CREATE INDEX `session_user_id_idx` ON `session` (`userId`);--> statement-breakpoint
CREATE INDEX `verification_identifier_idx` ON `verification` (`identifier`);