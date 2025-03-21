import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body>
        <div className="bg-black text-white">
        {children}
        </div>
      </body>
      </ClerkProvider>

    </html>
  );
}
// absolute top-15 left-50
