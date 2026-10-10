CREATE TYPE "public"."enquiry_source" AS ENUM('footer', 'contact_page');--> statement-breakpoint
CREATE TABLE "enquiries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"source" "enquiry_source" NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"destination" text,
	"message" text,
	"company" text,
	"programme_type" text,
	"travel_dates" text,
	"submitter_ip_hash" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "enquiries_ip_hash_created_at_idx" ON "enquiries" USING btree ("submitter_ip_hash","created_at");