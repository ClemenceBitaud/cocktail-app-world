import {useDispatch, useSelector} from "react-redux";
import {addFavorite, favoriteCocktails, removeFavorite} from "../../utils/slice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './FavoriteButton.css';
import {createStyles, Flex} from "@mantine/core";
import {useEffect, useState} from "react";

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
    const dispatch = useDispatch();
    const { classes} = useStyles();
    const [favorites, setFavorites] = useState([]);
    const userId = window.sessionStorage.getItem('userId');

    useEffect(() => {
        fetch(`http://localhost:3000/api/auth/${userId}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'email' : window.sessionStorage.getItem('userEmail'),
                'authorization' : window.sessionStorage.getItem('userToken')
            }
        })
            .then(response => response.json())
            .then(response => {
                setFavorites(response.favorites)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [userId]);

    const handleFavoris = (cocktail) => {
        if (cocktail != null){
            if (favorites.map(c => c._id === cocktail._id).includes(true)){
                console.log(cocktail._id);
                fetch(`http://localhost:3000/api/auth/${userId}/favorite/${cocktail._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'email' : window.sessionStorage.getItem('userEmail'),
                        'authorization' : window.sessionStorage.getItem('userToken')
                    }
                })
                    .then(response => response.json())
                    .catch((error) => {
                        console.log(error);
                    })
            }else{
                fetch(`http://localhost:3000/api/auth/${userId}/favorite`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'email' : window.sessionStorage.getItem('userEmail'),
                        'authorization' : window.sessionStorage.getItem('userToken')
                    },
                    body: JSON.stringify({ "drinkId":cocktail._id})
                })
                    .then(response => response.json())
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    };

    const renderedIconFav = () => {
        var sourceIcon = <FavoriteBorderIcon sx={{ color: '#FFB3BC' }}/>;
        favorites.map(cocktailFav => {
            if (cocktailFav._id === cocktail._id){
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