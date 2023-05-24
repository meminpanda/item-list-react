import "./card.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Ingredient } from "../../interfaces/Ingredient";

function IngredientCard(ingredient: Ingredient) {
  return (
  <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ingredient.image}
        title={ingredient.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ingredient.name}
        </Typography>
        <div className="card-body">
          
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  </div>
  )
}

export default IngredientCard;
