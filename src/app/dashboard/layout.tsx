export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return <section className="flex h-screen w-screen bg-neutral-900 items-center justify-center p6">
    <div className="flex h-5/6 w-11/12 bg-neutral-800 p4 rounded-xl">{children}</div>
    </section>;
}
