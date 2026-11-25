CREATE TYPE "public"."portal_role" AS ENUM('agent', 'event');--> statement-breakpoint
CREATE TYPE "public"."profile_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"email" text NOT NULL,
	"role" "portal_role" NOT NULL,
	"status" "profile_status" DEFAULT 'pending' NOT NULL,
	"name" text NOT NULL,
	"company" text,
	"country" text NOT NULL,
	"phone" text,
	"application" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "profiles_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "profiles_email_unique" UNIQUE("email")
);
