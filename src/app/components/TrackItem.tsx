import React from 'react';
import {ITrack} from "@/app/types/track";
import {Card, Grid, IconButton} from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/navigation";



interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}



export const TrackItem: React.FC<TrackItemProps> = ({track, active= true}) =>{
    const router = useRouter();

    return (
        <Card className={styles.track} onClick={()=>router.push('tracks/'+ track._id)}>
            <IconButton onClick={e=> e.stopPropagation()}>{active? <Pause/> : <PlayArrow/>}</IconButton>
            <img src={track.picture}  alt={track.name} width={70} height={70}/>
            <Grid container direction="column" className={styles.nameContainer}>
                <div>{track.name}</div>
                <div className={styles.artistTitle}>{track.artist}</div>
            </Grid>

            {active && <div>2:42 / 03:22</div>}
            <IconButton
                onClick={e=> e.stopPropagation()}
                className={styles.deleteButton}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

// export default TrackItem;