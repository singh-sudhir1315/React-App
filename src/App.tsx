import React from 'react';
import { Container, Typography } from '@mui/material';
import DataList from './components/DataList';

const App: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dummy Data List
            </Typography>
            <DataList />
        </Container>
    );
};

export default App;