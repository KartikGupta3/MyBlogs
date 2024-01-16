import Nav from "@/components/nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <div className="">{children}</div>
    </div>
  );
}
