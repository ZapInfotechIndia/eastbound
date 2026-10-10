CREATE TYPE "public"."event_portal_request_source" AS ENUM('explore_event_venues', 'browse_experiences');--> statement-breakpoint
CREATE TABLE "event_portal_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"source" "event_portal_request_source" NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"note" text NOT NULL,
	"profile_id" uuid NOT NULL,
	"portal_user_name" text NOT NULL,
	"submitter_ip_hash" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event_proposals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"company" text,
	"email" text NOT NULL,
	"event_type" text,
	"destinations" text,
	"group_size" text,
	"dates" text,
	"dates_flexible" text,
	"budget" text,
	"interests" text,
	"details" text,
	"profile_id" uuid NOT NULL,
	"portal_user_name" text NOT NULL,
	"submitter_ip_hash" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event_update_subscribers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"profile_id" uuid NOT NULL,
	"portal_user_name" text NOT NULL,
	"submitter_ip_hash" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "event_update_subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX "event_portal_requests_ip_hash_created_at_idx" ON "event_portal_requests" USING btree ("submitter_ip_hash","created_at");--> statement-breakpoint
CREATE INDEX "event_proposals_ip_hash_created_at_idx" ON "event_proposals" USING btree ("submitter_ip_hash","created_at");--> statement-breakpoint
CREATE INDEX "event_update_subscribers_ip_hash_created_at_idx" ON "event_update_subscribers" USING btree ("submitter_ip_hash","created_at");