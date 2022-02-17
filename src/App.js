import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";

const App = () => {
  return (
    <div>

{/* <Box sx={{width:300}}>
      <Card sx={{m:2}}>
          <CardContent>
            <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
              Carolina Raniti
            </Typography>
            <Typography variant="h5" component="div">
              Frontend Developer
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              29 años
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
            {'"a benevolent smile"'}
            </Typography>
          </CardContent>

          <CardActions>
        
            <Button>Hola</Button> 
            <Button variant="outlined">Hola</Button>
            <Button variant="contained">Hola</Button>
          </CardActions>
            
      </Card>
          
</Box> */}

<Box sx={{width:300}}>

  <Card>
   <CardMedia
        component="img"
        height="140"
        image="http://www.placekitten.com/200"
        alt="green iguana"
      />
    <CardContent>Hola</CardContent>
    <CardActions>
      <Button>Hola</Button>
    </CardActions>

  </Card>
</Box>
    </div>
  )
}
export default App;
