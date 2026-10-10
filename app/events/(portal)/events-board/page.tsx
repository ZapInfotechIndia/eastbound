import EventsBoardContent from "@/components/events/EventsBoardContent";
import EventsBoardNav from "@/components/events/EventsBoardNav";
import { getSessionProfile } from "@/lib/auth/profile";

const EventsBoard = async () => {
  const session = await getSessionProfile();
  const fullName = session?.profile.name ?? "";

  return (
    <main className="min-h-screen bg-white p-4 text-[#0d2031]">
      <EventsBoardNav fullName={fullName} />
      <EventsBoardContent />
    </main>
  );
};

export default EventsBoard;
