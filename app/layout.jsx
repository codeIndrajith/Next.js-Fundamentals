import '@/assets/style/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Add meta data
export const metadata = {
    title: "Next js Project",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property",
}
const MainLayout = ({children}) => {
    return (
        <html>
            <body>
                <main>
                    <Navbar />
                   {children}
                   <Footer />
                </main>
            </body>
        </html>
    )
}

export default MainLayout;