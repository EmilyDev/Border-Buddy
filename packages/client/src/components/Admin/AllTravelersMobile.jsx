import React from 'react'
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardContent,
  Grid,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { setStatusColor } from './styles'

const AllTravelersMobile = ({ travelers }) => {
  const history = useHistory()
  return (
    <div>
      {travelers.map((traveler, i) => {
        const {
          id,
          name,
          phone,
          email,
          nationality,
          status: travelerStatus,
          countryCode,
        } = traveler
        const { airlineCode, flightNum, scheduledArrivalTime, status: flightStatus } =
          traveler.flight || {}
        const timeString = new Date(scheduledArrivalTime).toLocaleString()
        const color = setStatusColor(travelerStatus)
        const style = {
          passengerStatus: {
            color,
            fontWeight: 'bold',
          },
        }
        return (
          <Card key={i} style={{ margin: '2em' }}>
            <CardContent>
              <Grid container direction='row'><Typography variant="h5">{name}</Typography></Grid>
              <Grid container direction='row'><Typography variant="subtitle1">Traveler ID: {id}</Typography></Grid>
              <Grid container style={{marginTop: '1em'}}>
                <Grid container direction='row'><Typography display='block' variant="h6">Traveler Information</Typography></Grid>
                <Grid container direction='row'><Typography display='block'variant="body2" style={style.passengerStatus}>
                  Traveler Status: {travelerStatus}
                </Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">
                  Country Code: +{countryCode}
                </Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">Phone: {phone}</Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">Email: {email}</Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">
                  Nationality: {nationality}
                </Typography></Grid>
              </Grid>
              <Grid container style={{marginTop: '1em'}}>
                <Grid container direction='row'><Typography display='block' variant="h6">Flight Information </Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">
                  Airline Code: {airlineCode}
                </Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">Flight #: {flightNum}</Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">
                  ArrivalTime: {timeString}
                </Typography></Grid>
                <Grid container direction='row'><Typography display='block' variant="body2">
                  Flight Status: {flightStatus}
                </Typography></Grid>
              </Grid>
            </CardContent>
            <CardActions justify='space-around'>
              <Button
                style={{color: '#2d6ea8'}}
                variant="text"
                onClick={() =>
                  history.push(`/travelers/${traveler.id}`)
                }
              >
                View/Edit Traveler
              </Button>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}

export default AllTravelersMobile
