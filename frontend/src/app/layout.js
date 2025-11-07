import "../styles/globals.css";


export const metadata = {
title: "Portfolio Dashboard",
description: "Stock Market, BSE, Portfolio",
icons: {
  icon: '/BSE_logo.png',
},
};


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="min-h-screen bg-slate-950 text-slate-100 bg-ai-grid bg-[length:20px_20px]">
{children}
</body>
</html>
);
}