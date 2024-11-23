import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  {
    name: "Ai Insights",
    url: "./ai-insights",
  },
  {
    name: "Investor Dashboard",
    url: "./dashboard/investor",
  },
  {
    name: "SME Dashboard",
    url: "./dashboard/sme",
  },
  {
    name: "Escrow Wallet",
    url: "./escrow",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            InvestConnect
          </Link>
          <nav>
            <Sheet>
              <SheetTrigger>
                <CiMenuFries className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent>
                {navLinks.map(
                  ({ name, url }: { name: string; url: string }) => (
                    <SheetClose asChild key={name} className="w-full p-3 flex">
                      <Link href={url}>{name}</Link>
                    </SheetClose>
                  )
                )}
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-600">
          © 2024 InvestConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
