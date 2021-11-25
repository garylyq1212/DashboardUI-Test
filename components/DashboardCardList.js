import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Line, Bar } from 'react-chartjs-2';
import faker from 'faker';

import theme from '../styles/theme';

const DashboardCardList = ({ labels }) => {
    return (
        <Grid
            container
            direction='row'
            alignItems='center'
            spacing={4}
        >
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Card sx={{ minWidth: 600 }}>
                    <CardContent>
                        <Grid
                            container
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid item container direction='column' xs={6}>
                                <Grid item>
                                    <Typography
                                        variant='h6'
                                        color={theme.palette.primary.main}
                                        gutterBottom
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        RANDOM DATA
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='h5'
                                        sx={{ color: '#1de9b6', fontWeight: 'bold' }}
                                    >
                                        +3.5
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={6}>
                                <Line
                                    datasetIdKey='id'
                                    data={{
                                        labels: labels,
                                        datasets: [
                                            {
                                                id: 1,
                                                label: 'Dataset 1',
                                                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                                                borderColor: theme.palette.primary.main,

                                            },
                                            {
                                                id: 2,
                                                label: 'Dataset 2',
                                                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                                                borderColor: theme.palette.secondary.main,
                                            },
                                        ],
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Card sx={{ minWidth: 600 }}>
                    <CardContent>
                        <Grid
                            container
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid item container direction='column' xs={6}>
                                <Grid item>
                                    <Typography
                                        variant='h6'
                                        color={theme.palette.secondary.main}
                                        gutterBottom
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        RANDOM DATA
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='h5'
                                        sx={{ fontWeight: 'bold' }}
                                        color={theme.palette.error.main}
                                    >
                                        -2.6
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={6}>
                                <Bar
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                            },
                                        }
                                    }}
                                    data={{
                                        labels: labels,
                                        datasets: [
                                            {
                                                label: 'Dataset 1',
                                                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                                                backgroundColor:
                                                    theme.palette.primary.main,
                                            },
                                            {
                                                label: 'Dataset 2',
                                                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                                                backgroundColor: theme.palette.secondary.main,
                                            },
                                        ],
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default DashboardCardList;
