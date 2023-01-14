import {createStyles, Flex, Text, Modal} from '@mantine/core';
import {useState} from "react";
import CocktailDetailCard from "./CocktailDetailCard";
import './Modal.css';
import FavoriteButton from "../button/FavoriteButton";

const useStyles = createStyles((theme) => ({

    card : {
        width: 145,
        border: '2px solid #FFC76E',
        borderRadius: 15,
        padding: theme.spacing.xs,
        cursor: "pointer",
        margin: theme.spacing.sm,

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: 70,
        },
    },

    cocktailImage : {
        width: 119,
        height: 144,
        objectFit: "cover",
        borderRadius: 15,

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: 64,
            height: 77,
        },
    },

    text : {
        wordBreak: "break-word"
    }
}));

const CocktailCard = ({cocktail}) => {

    const { classes} = useStyles();
    const [opened, setOpened] = useState(false);
    const [cCocktail, setcCocktail] = useState({});

    const handleCocktailDetail = (idCocktail) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setcCocktail(data.drinks[0]);
            }, (error) => {
                console.log(error)
            });
    }

    return(
        <Flex
            justify="center"
            className={classes.card}
            onClick={() =>{
                handleCocktailDetail(cocktail.idDrink)
                setOpened(true)
            }}
        >
            <Flex
                direction="column"
                align="center"
            >
                <img src={cocktail.strDrinkThumb} className={classes.cocktailImage} alt="cocktail"/>
                <Text align="center" size={"sm"} className={classes.text}>{cocktail.strDrink}</Text>
                <Flex>
                    <FavoriteButton cocktail={cocktail}/>
                </Flex>
            </Flex>
            <Modal
                radius={20}
                padding={0}
                opened={opened}
                onClose={() => setOpened(false)}>
                <CocktailDetailCard cocktail={cCocktail}/>
            </Modal>
        </Flex>

    )
}
export default CocktailCard;
