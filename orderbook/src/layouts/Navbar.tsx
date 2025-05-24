import { AppBar, createTheme, ThemeProvider, Toolbar, Typography, Box } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#16181E'
        }
    }
});

type NavbarProps = {
    spread?: number;
};

export const Navbar = ({ spread }: NavbarProps) => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar color="primary" position="static">
                <Toolbar sx={{
                    position: 'relative',
                    minHeight: '64px',
                }}>
                    <Typography variant="h4" color="inherit">
                        Order Book
                    </Typography>
                    <Typography
                        variant="h5"
                        color="inherit"
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',

                            zIndex: 1,
                        }}
                    >
                        Spread: {spread}
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};