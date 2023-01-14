import {useDispatch, useSelector} from "react-redux";
import {addFavorite, favoriteCocktails, removeFavorite} from "../../utils/slice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './FavoriteButton.css';
import {createStyles, Flex} from "@mantine/core";

const useStyles = createStyles((theme) => ({

    heartIcon : {
        width: 32,
        height: 32,
        border: '2px solid #FFB3BC',
        backgroundColor: "white",
        borderRadius: 20,
        cursor: "pointer",

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: 20,
            height: 20,
        },
    },
}));

const FavoriteButton = ({cocktail}) => {
    const favorites = useSelector(favoriteCocktails);
    const dispatch = useDispatch();
    const { classes} = useStyles();

    const handleFavoris = (cocktail) => {
        if (cocktail != null){
            if (favorites.map(c => c.idDrink === cocktail.idDrink).includes(true)){
                dispatch(
                    removeFavorite({
                        cocktail:cocktail
                    },)
                )
            }else{
                dispatch(
                    addFavorite({
                        cocktail:cocktail
                    },)
                )
            }
        }
    };

    const renderedIconFav = () => {
        var sourceIcon = <FavoriteBorderIcon sx={{ color: '#FFB3BC' }}/>;
        favorites.map(cocktailFav => {
            if (cocktailFav.idDrink === cocktail.idDrink){
                sourceIcon = <FavoriteIcon sx={{ color: '#FFB3BC' }}/>
            }
            return sourceIcon
        });
        return sourceIcon
    };

    return(
        <Flex
            justify="center"
            align="center"
            className={classes.heartIcon}
            onClick={(event) =>{
                event.stopPropagation();
                handleFavoris(cocktail)
            }}>
            {renderedIconFav()}
        </Flex>
    )
}
export default FavoriteButton;