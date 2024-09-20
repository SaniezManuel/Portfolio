
import "./globals.css";

export const metadata = {
  title: "Saniez Manuel",
  description: "porfolio personal saniez manuel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
