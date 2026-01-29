import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Stack,
  AppBar,
  Toolbar,
  ThemeProvider,
  CssBaseline,
  IconButton,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Star as StarIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Speed as SpeedIcon,
  Accessibility as AccessibilityIcon,
} from '@mui/icons-material';
import { lightTheme, darkTheme } from '@smug-ui/theme';
import {
  Button as SmugButton,
  Card as SmugCard,
  Badge,
  Chip as SmugChip,
  Avatar as SmugAvatar,
  Alert,
  Progress,
  Rating,
} from '@smug-ui/react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
          <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ bgcolor: 'background.paper' }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Smug UI
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button color="inherit" href="https://storybook.smug-ui.vercel.app" target="_blank">
                  Storybook
                </Button>
                <IconButton
                  color="inherit"
                  href="https://github.com/tahmidbintaslim/smug-ui"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                  {mode === 'dark' ? <LightIcon /> : <DarkIcon />}
                </IconButton>
              </Stack>
            </Toolbar>
          </AppBar>

          {/* Hero Section */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography
                    component="h1"
                    variant="h2"
                    color="text.primary"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    MUI Components,
                    <br />
                    Reimagined
                  </Typography>
                  <Typography variant="h5" color="text.secondary" paragraph>
                    7 design variants. Zero config. 100% TypeScript. Beautiful, accessible React
                    components built on Material-UI.
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href="https://storybook.smug-ui.vercel.app"
                      target="_blank"
                      sx={{ borderRadius: 2, px: 3, py: 1.5 }}
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      href="https://github.com/tahmidbintaslim/smug-ui"
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{ borderRadius: 2, px: 3, py: 1.5 }}
                    >
                      GitHub
                    </Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <SmugCard variant="outlined" sx={{ p: 3, width: '100%', maxWidth: 400 }}>
                      <Stack spacing={2}>
                        <SmugButton variant="solid" color="primary" fullWidth>
                          Primary Button
                        </SmugButton>
                        <SmugButton variant="soft" color="success" fullWidth>
                          Success Button
                        </SmugButton>
                        <SmugButton variant="outlined" color="warning" fullWidth>
                          Warning Button
                        </SmugButton>
                      </Stack>
                    </SmugCard>
                    <SmugCard
                      variant="soft"
                      color="secondary"
                      sx={{ p: 3, width: '100%', maxWidth: 400 }}
                    >
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        <SmugChip variant="solid" color="primary" label="React" />
                        <SmugChip variant="soft" color="success" label="TypeScript" />
                        <SmugChip variant="outlined" color="warning" label="MUI v7" />
                        <SmugChip variant="ghost" color="info" label="Accessible" />
                      </Stack>
                    </SmugCard>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Features Section */}
          <Box sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
              <Typography
                component="h2"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 6 }}
              >
                Why Smug UI?
              </Typography>
              <Grid container spacing={4}>
                {[
                  {
                    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
                    title: '7 Design Variants',
                    description:
                      'Solid, soft, outlined, ghost, plain, and more. Customize every component to match your design system.',
                  },
                  {
                    icon: <CodeIcon sx={{ fontSize: 40 }} />,
                    title: 'Zero Config',
                    description:
                      'Drop-in replacement for MUI components. No complex setup or configuration required.',
                  },
                  {
                    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
                    title: 'TypeScript First',
                    description:
                      '100% TypeScript with full type safety. IntelliSense support and compile-time error checking.',
                  },
                  {
                    icon: <AccessibilityIcon sx={{ fontSize: 40 }} />,
                    title: 'Accessible',
                    description:
                      'Built with accessibility in mind. WCAG compliant components with proper ARIA attributes.',
                  },
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 2,
                      }}
                      elevation={0}
                      variant="outlined"
                    >
                      <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          {/* Components Showcase */}
          <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
              <Typography
                component="h2"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 6 }}
              >
                Component Showcase
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <SmugCard variant="outlined" sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Buttons
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      <SmugButton variant="solid" color="primary" size="sm">
                        Solid
                      </SmugButton>
                      <SmugButton variant="soft" color="success" size="sm">
                        Soft
                      </SmugButton>
                      <SmugButton variant="outlined" color="warning" size="sm">
                        Outlined
                      </SmugButton>
                      <SmugButton variant="ghost" color="danger" size="sm">
                        Ghost
                      </SmugButton>
                    </Stack>
                  </SmugCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <SmugCard variant="soft" color="secondary" sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Form Elements
                    </Typography>
                    <Stack spacing={2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Rating value={4.5} readOnly size="sm" />
                        <Typography variant="body2">4.5 stars</Typography>
                      </Stack>
                      <Progress value={75} color="primary" />
                      <Alert color="info" sx={{ py: 1 }}>
                        This is an info alert
                      </Alert>
                    </Stack>
                  </SmugCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <SmugCard variant="outlined" sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Data Display
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <SmugAvatar src="https://i.pravatar.cc/40" />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          John Doe
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Software Engineer
                        </Typography>
                      </Box>
                      <Badge content="3" color="danger">
                        <SmugButton variant="ghost" size="sm">
                          Messages
                        </SmugButton>
                      </Badge>
                    </Stack>
                  </SmugCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <SmugCard variant="soft" color="primary" sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Navigation
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      <SmugChip variant="solid" color="primary" label="Home" />
                      <SmugChip variant="outlined" color="secondary" label="About" />
                      <SmugChip variant="soft" color="success" label="Contact" />
                      <SmugChip variant="ghost" color="info" label="Blog" />
                    </Stack>
                  </SmugCard>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Footer */}
          <Box sx={{ py: 6, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Smug UI
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Beautiful, accessible React components built on Material-UI. Open source and
                    free to use.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      color="inherit"
                      href="https://github.com/tahmidbintaslim/smug-ui"
                      target="_blank"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton color="inherit">
                      <StarIcon />
                    </IconButton>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Links
                  </Typography>
                  <Stack spacing={1}>
                    <Button
                      color="inherit"
                      href="https://storybook.smug-ui.vercel.app"
                      target="_blank"
                    >
                      Storybook
                    </Button>
                    <Button
                      color="inherit"
                      href="https://github.com/tahmidbintaslim/smug-ui"
                      target="_blank"
                    >
                      GitHub
                    </Button>
                    <Button color="inherit">Documentation</Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Community
                  </Typography>
                  <Stack spacing={1}>
                    <Button color="inherit">Discord</Button>
                    <Button color="inherit">Twitter</Button>
                    <Button color="inherit">Blog</Button>
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: 'divider' }}>
                <Typography variant="body2" color="text.secondary" align="center">
                  © 2024 Smug UI. Built with ❤️ using React and Material-UI.
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
