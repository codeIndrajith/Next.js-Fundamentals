import '@/assets/style/global.css';

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
                   {children}
                </main>
            </body>
        </html>
    )
}

export default MainLayout;