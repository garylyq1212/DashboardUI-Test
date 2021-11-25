import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import AdapterDateFns from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import PrintOutlined from '@mui/icons-material/PrintOutlined';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import faker from 'faker';

import MyAppbar from '../components/MyAppbar';
import Sidebar from '../components/Sidebar';
import DashboardCardList from '../components/DashboardCardList';

import theme from '../styles/theme';

const drawerWidth = 240;

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Home(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [value, setValue] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];

    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <CssBaseline />
            <MyAppbar
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />
            <Box
                component='nav'
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label='mailbox folders'
            >
                <Sidebar
                    window={window}
                    drawerWidth={drawerWidth}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
            </Box>

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Grid item xs={6}>
                        <Typography variant='h5' color='primary'>
                            Welcome To Dashboard
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack direction='row' spacing={2}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label='Date Picker'
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>

                            <Button
                                variant='outlined'
                                startIcon={<PrintOutlined />}
                            >
                                Print
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>

                <br />

                <DashboardCardList labels={labels} />

                <br />

                <Card sx={{ minWidth: 600 }}>
                    <CardContent>
                        <Typography
                            variant='h6'
                            color={theme.palette.primary.main}
                            gutterBottom
                            sx={{ fontWeight: 'bold' }}
                        >
                            RANDOM DATA
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste voluptate magnam, illum nesciunt unde
                            voluptates.
                        </Typography>
                        <Line
                            datasetIdKey='id'
                            data={{
                                labels: labels,
                                datasets: [
                                    {
                                        id: 1,
                                        label: 'Dataset 1',
                                        data: labels.map(() =>
                                            faker.datatype.number({
                                                min: -1000,
                                                max: 1000,
                                            })
                                        ),
                                        borderColor: theme.palette.primary.main,
                                    },
                                ],
                            }}
                        />
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
