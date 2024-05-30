'use client';
import React from'react';
import MainLayout from "@/app/layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/navigation";
import {ITrack} from "../../types/track";
import {TrackList} from "./../../components/TrackList";


export default function Page (){
    const router = useRouter();
    const tracks: ITrack[] =
        [{_id: "3", name: "Skrip4", artist: "Skrip", text: "Skrip Skrip", listens:0, picture:"",audio:"",comments:[]},
        {_id:"3",name:"Skrip4",artist:"Skrip",text:"Skrip Skrip",listens:0,picture:"",audio:"",comments:[]}]
    
    
    return (

        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>List of tracks</h1>
                            <Button onClick={() => router.push('/pages/create-track')}>
                                Add track
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>

  );
}

