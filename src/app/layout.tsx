import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Board. | Get on it.",
  description: "Your next stop onboarding new hires.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
