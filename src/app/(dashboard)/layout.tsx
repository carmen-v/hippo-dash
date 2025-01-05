import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] xl:w-[14%] bg-gray-800">
        <Link href= "/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
          <Image src="/hippo-logo.svg" alt="Logo" width={32} height={32}/>
          <span className="hidden lg:block">HippoDash</span>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-orange-800">r</div>
    </div>
  );
}
