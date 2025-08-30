import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, CircularProgress, Typography, Paper, Box } from '@mui/material';
import { fetchDummyData } from '../api/dummyApi';

const DataList: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchDummyData();
                setData(result);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: 400, margin: '32px auto', padding: 2 }}>
            <Typography variant="h6" gutterBottom align="center">
                Data List
            </Typography>
            <List>
                {data.map((item) => (
                    <ListItem key={item.id} divider>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default DataList;