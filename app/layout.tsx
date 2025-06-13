import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Great Pearl Coffee Company - Premium Coffee Experience",
  description: "Discover exceptional coffee at Great Pearl Coffee Company. Premium beans, expertly crafted beverages, and a welcoming atmosphere for coffee lovers.",
  keywords: "coffee, premium coffee, coffee shop, Great Pearl, specialty coffee, espresso, latte",
  authors: [{ name: "Great Pearl Coffee Company" }],
  creator: "Great Pearl Coffee Company",
  openGraph: {
    title: "Great Pearl Coffee Company",
    description: "Premium coffee experience with expertly crafted beverages",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Pearl Coffee Company",
    description: "Premium coffee experience with expertly crafted beverages",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-yellow-50/20 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 transition-all duration-500">
            <Navbar />
            <main className="pt-20 relative">
              {/* Background decorative elements */}
              <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 dark:bg-green-800/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200/20 dark:bg-yellow-800/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-300/10 dark:bg-green-700/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              <div className="relative z-10">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}