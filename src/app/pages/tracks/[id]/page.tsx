'use client';
import React from 'react';
import {ITrack} from "@/app/types/track";
import {useRouter} from "next/navigation";
import MainLayout from "@/app/layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";

const TrackPage = () => {
    const track: ITrack = {_id: "3", name: "Skrip3", artist: "Skrip3", text: "Skrip Skrip", listens:0, picture:"",audio:"",comments:[]}
    const router = useRouter();
    return (
        <MainLayout>
            <Button
            onClick={()=>router.push("/pages/tracks")}
            variant={"outlined"}
            style={{ fontSize:32 }}
            >
                Back
            </Button>
            <Grid container style={{margin:"20px 0"}}>
                <img src={track.picture} alt={track.name} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>{track.name}</h1>
                    <h1>{track.artist}</h1>
                    <h1>{track.listens}</h1>


                </div>

            </Grid>
            <h1>Lyrics</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container style={{margin:"20px  0"}}>
            <TextField
                style={{margin:"10px  0"}}
                label="Your name"
                fullWidth
            />
                <TextField
                    style={{margin:"10px  0"}}
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Add comment</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                     <div>
                         <div>{comment._username}</div>
                         <div>{comment.text}</div>
                     </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;