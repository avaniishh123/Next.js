import "./globals.css";

export const metadata = {
  title: "Feedback App",
  description: "Simple Next.js Feedback App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}