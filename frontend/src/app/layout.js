import "../styles/globals.css";


export const metadata = {
title: "Dynamic Portfolio Dashboard",
description: "Next.js + Tailwind + React-Table + Recharts",
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