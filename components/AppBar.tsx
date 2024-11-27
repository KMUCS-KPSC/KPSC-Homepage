'use client';

import { useRouter, usePathname } from "next/navigation";
import {AppBar, Button, Chip, Container, Stack, Toolbar, Typography} from "@mui/material";

export default function CustomAppBar() {
    const router = useRouter();
    const currentRoute = usePathname();

    const navigateTo = (path: string) => () => router.push(path);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                    <Stack direction={"row"} spacing={2}>
                        <Button onClick={navigateTo('/apply')} sx={{ my: 2, color: 'white', display: 'inline' }}>
                            {currentRoute === '/apply' ? (
                                <Chip label={<Typography variant="h6" sx={{ color: "black" }}>지원/연락</Typography>} style={{ backgroundColor: "white" }} />
                            ) : (
                                <Typography variant="h6">지원/연락</Typography>
                            )}
                        </Button>
                        <Button onClick={navigateTo('/achievements')} sx={{ my: 2, color: 'white', display: 'inline' }}>
                            {currentRoute === '/achievements' ? (
                                <Chip label={<Typography variant="h6" sx={{ color: "black" }}>성과</Typography>} style={{ backgroundColor: "white" }} />
                            ) : (
                                <Typography variant="h6">성과</Typography>
                            )}
                        </Button>
                        <Button onClick={navigateTo('/')} sx={{ my: 2, color: 'white', display: 'inline' }}>
                            {currentRoute === '/' ? (
                                <Chip label={<Typography variant="h6" sx={{ color: "black" }}>소개</Typography>} style={{ backgroundColor: "white" }} />
                            ) : (
                                <Typography variant="h6">소개</Typography>
                            )}
                        </Button>
                        <Button onClick={navigateTo('/activities')} sx={{ my: 2, color: 'white', display: 'inline' }}>
                            {currentRoute === '/activities' ? (
                                <Chip label={<Typography variant="h6" sx={{ color: "black" }}>활동</Typography>} style={{ backgroundColor: "white" }} />
                            ) : (
                                <Typography variant="h6">활동</Typography>
                            )}
                        </Button>
                        <Button onClick={navigateTo('/members')} sx={{ my: 2, color: 'white', display: 'inline' }}>
                            {currentRoute === '/members' ? (
                                <Chip label={<Typography variant="h6" sx={{ color: "black" }}>구성원</Typography>} style={{ backgroundColor: "white" }} />
                            ) : (
                                <Typography variant="h6">구성원</Typography>
                            )}
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}