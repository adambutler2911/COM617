import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from 'react-bootstrap';

export const metadata: Metadata = {
    title: 'COM617 Web6S',
    description: '',
};

export default async function RootLayout({children,}: {children: React.ReactNode;}){
    return (
        <html lang="en">
            <body className="h-screen bg-(--main-bg)">
                <Navbar className="sticky top-0 h-[50px] mb-[20px] bg-(--navbar-bg) border-(--navbar-border)"></Navbar>
                {children}
            </body>
        </html>
    );
}


