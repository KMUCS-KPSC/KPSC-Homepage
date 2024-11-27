import type { Metadata } from "next";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {CssBaseline, ThemeProvider} from "@mui/material";
import CustomAppBar from "@/components/AppBar";

import darkTheme from "@/styles/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPSC Web Project",
  description: "KPSC Web Project",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
    <html lang="ko">
        <head/>
        <CssBaseline/>
        <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
                <CustomAppBar/>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
    );
}
