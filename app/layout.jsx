import '@/assets/style/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

// Add meta data
export const metadata = {
    title: "Next js Project",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property",
}
const MainLayout = ({children}) => {
    return (
        <AuthProvider>
        <html>
            <body>
                <main>
                    <Navbar />
                   {children}
                   <Footer />
                </main>
            </body>
        </html>
        </AuthProvider>
    )
}

export default MainLayout;