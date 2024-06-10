import React from 'react';
import {Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import styles from  "../styles/Player.module.scss";
import {ITrack} from "@/app/types/track";
import TrackProgress from "@/app/components/TrackProgress";

const Player = () => {

    const track: ITrack = {_id: "3", name: "Intro", artist: "Skrip", text: "Skrip Skrip", listens:0, picture:"",audio:"",comments:[]}

    const active = true;
    return (
        <div className={styles.player}>
            <IconButton onClick={e=> e.stopPropagation()}>{active? <Pause/> : <PlayArrow/>}</IconButton>
            <Grid container direction="column" style={{width:200,margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{fontSize:12,color:'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={()=>{}} />
            <VolumeUp style={{marginLeft:'auto'}} />
            <TrackProgress left={0} right={100} onChange={()=>{}} />

        </div>

    );
};

export default Player;