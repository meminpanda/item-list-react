import "./card.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Ingredient } from "../../interfaces/Ingredient";
import noImage from "../../assets/images/default.jpg"


function IngredientCard(ingredient: Ingredient) {
  return (
  <div className={`card ${ingredient.foodType}`}>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ingredient.image ? ingredient.image: noImage}
        title={ingredient.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ingredient.name}
        </Typography>
        <div className="card-body">
          Current inventory: <span className="card-body-quantity">{ingredient.quantity} {ingredient.quantityType}</span>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    <span className={`card-label ${ingredient.foodType}`}>{ingredient.foodType}</span>
  </div>
  )
}

export default IngredientCard;
