export function PageLoader() {
  return (
    <div
      className="flex min-h-[50dvh] items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="size-8 animate-spin rounded-full border-2 border-accent border-t-primary" />
    </div>
  )
}
