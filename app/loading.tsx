export default function Loading() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 rounded-full border-2 border-teal/30 border-t-teal animate-spin"
          role="status"
          aria-label="Loading"
        />
        <p className="text-white/40 text-sm tracking-widest uppercase font-medium">
          Loading
        </p>
      </div>
    </div>
  );
}
