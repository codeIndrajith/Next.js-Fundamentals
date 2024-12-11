import '@/assets/style/global.css';
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