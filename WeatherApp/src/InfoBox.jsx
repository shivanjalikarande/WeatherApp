
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}) {

    const image_url = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return (
        <div className="InfoBox">
           
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {image_url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <b>{info.city}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <ul>
                    <p>Temperature = <b>{info.temp}&deg;C</b></p>
                    <p>Humidity = <b><b></b>{info.humidity}</b></p>
                    <p>Minimum Temp = <b>{info.tempMin}&deg;C</b></p>
                    <p>Maximum Temp = <b>{info.tempMax}&deg;C</b></p>
                    <p>Weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C</p>
                </ul>
                </Typography>
            </CardContent>
            
    </Card>
  

        </div>
    );
}

