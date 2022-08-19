import React from 'react';
import './style.css';
import {
  Box,
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
const theme = createTheme();
const App = () => {
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ backgroundColor: theme.palette.secondary.main, mb: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography children="Sign In" variant="h5" component="h1" />
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              label="Email Address"
              fullWidth
            />
            <TextField
              required
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              label="Your Password"
              fullWidth
            />
            <FormControlLabel
              label="Remember me"
              value="remeber"
              control={<Checkbox />}
            />
          </Box>
        </Box>
        <Grid container justifyContent="space-between" flexDirection="row">
          <Link href="#" variant="body2" component={RouterLink}>
            Forgot password?
          </Link>
          <Grid item>dddd</Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
};

export default App;
