// app/(with-sidebar)/layout.tsx
import Sidebar from "@/components/sidebar";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar title="Professional Platform">
      {children}
    </Sidebar>
  );
}