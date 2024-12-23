import '@/assets/style/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: "Next.js Project",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property",
};

export default function MainLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Wrap the entire app in AuthProvider */}
                <AuthProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
