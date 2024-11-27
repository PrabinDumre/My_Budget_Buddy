import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Smart Personal Assistance',
  description: 'An integrated interface for notes and expenses',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>

      </body>
    </html>
  );
}
