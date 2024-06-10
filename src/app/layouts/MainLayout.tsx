import React from 'react';
import Navbar from "@/app/components/NavBar";
import {Container} from "@mui/material";
import Player from "@/app/components/Player";

const MainLayout: React.FC = ({ children}) => {
    return (
        <div>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
            <Player/>

        </div>
    );
};

export default MainLayout;