import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const App = () => {
  return (
    <div>

      <Card sx={{m:2}}>
          <CardContent>
            <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be nev o lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
         
          {'"a benevolent smile"'}
            </Typography>
          </CardContent>

          <CardActions>
            Acciones
          </CardActions>
      </Card>
      
    </div>
  )
}
export default App;
