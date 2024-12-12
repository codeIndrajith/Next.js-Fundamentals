import '@/assets/style/global.css';
import Navbar from '@/components/Navbar';

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
                </main>
            </body>
        </html>
    )
}

export default MainLayout;