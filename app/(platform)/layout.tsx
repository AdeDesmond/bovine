import { AboveHeader } from "./_components/above-header";
import { Header } from "./_components/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutBovine({ children }: LayoutProps) {
  return (
    <div className="max-w-[1500px] bg-[#FEF9F5] mx-auto min-h-screen overflow-y-auto">
      <AboveHeader />
      <Header />
      {children}
    </div>
  );
}
