import "./globals.css";
import Navbar from "./component/navbar/navbar";

import GharPlansBlogsNew from "./component/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        
        {children}
        <GharPlansBlogsNew />
      </body>
    </html>
  );
}