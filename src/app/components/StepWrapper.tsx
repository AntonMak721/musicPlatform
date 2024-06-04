import React from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";

interface StepWrapperProps {
    activeStep: number;
}

const steps = ['Track information', 'Track image', 'Track file']

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep,children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step,index)=>
                    <Step
                        key={index}
                        completed={activeStep>index}
                    >
                       <StepLabel>{step}</StepLabel>
                    </Step>

                )}
            </Stepper>
            <Grid container justifyContent="center" alignItems="center" style={{margin:'70px 0', height:'300px'}}>
                <Card style={{width:600, height:'100%'}}> {children}</Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;