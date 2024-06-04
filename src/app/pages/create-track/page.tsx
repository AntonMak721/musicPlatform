'use client'
import React, {useState} from 'react';
import MainLayout from "@/app/layouts/MainLayout";
import StepWrapper from "@/app/components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "@/app/components/FileUpload";

const Page = () => {

    const [activeStep, setActiveStep]  = useState(0);
    const [picture, setPicture]   = useState(null);
    const [audio, setAudio] = useState(null)

    const nextStep = () => {
        if (activeStep  !== 2)  {
            setActiveStep(prev => prev + 1 );
        }

    }
    const prevStep  =  ()  =>  {
        setActiveStep(prev  => prev  - 1);
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep ===  0 &&
                   <Grid container direction="column" justifyContent="center" style={{textAlign:"center", padding:"20px"}}>
                       <TextField label={'Track title'} style={{marginTop:10}}/>
                       <TextField label={'Track artist'} style={{marginTop:10}}/>
                       <TextField label={'Track lyrics'} style={{marginTop:10}} multiline rows={4}/>
                   </Grid>
                }
                {activeStep ===  1 &&
                    <FileUpload setFile={setPicture}  accept={'image/*'}>
                        <Button>Upload image</Button>
                    </FileUpload>
                }
                {activeStep ===  2 &&
                    <FileUpload setFile={setAudio}  accept={'audio/*'}>
                        <Button>Upload audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-around">
                <Button disabled={activeStep === 0} onClick={prevStep}>Back</Button>
                <Button  onClick={nextStep}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Page;