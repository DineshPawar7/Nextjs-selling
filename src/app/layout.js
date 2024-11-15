export const metadata = {
    title: 'My Next.js App',
    description: 'A prototype website for selling smart yoga products',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        
        <body>{children}</body>
      </html>
    );
  }
  