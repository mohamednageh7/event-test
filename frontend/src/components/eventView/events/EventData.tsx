import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import moment from 'moment'

type Props = {
    data: any
}

const EventData: React.FC<Props> = ({ data }) => {
    const { address, category, date, description, isVirtual, title } = data
    return (
        <Grid container p='1em' m='1em' sx={{ border: '1px solid #ccc' }}>
            <Grid item container xs={11}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom component="div">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>Address: {address}</Grid>
                <Grid item xs={12}>Description: {description}</Grid>
                <Grid item xs={12}>date: {moment(date).format(' DD/MM/YYYY hh:mm')}</Grid>
            </Grid>
            <Grid item container xs={1} >
                <Grid item xs={12} display='flex' justifyContent='center' sx={{
                    background: '#e08686',
                    color: '#fff',
                    fontSize: '1.2rem',
                    borderRadius: '1em',
                    alignSelf: 'end'
                }}>
                    {category}
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center'
                    sx={{
                        background: '#695d5d',
                        color: '#fff',
                        fontSize: '1.2rem',
                        borderRadius: '1em',
                        alignSelf: 'center'
                    }}
                >
                    {isVirtual === 'yes' ? 'Virtual' : 'On site'}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EventData