import Image from "next/image";
import Dropdown from "../../components/dropdown";

export default function Home() {
  return (
    <main className="flex w-full h-full bg-slate-900 flex-col p-24">
      <Dropdown />
    </main>
  );
}
