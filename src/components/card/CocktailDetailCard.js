import {createStyles, Title, Flex, Text, Box} from '@mantine/core';
import FavoriteButton from "../button/FavoriteButton";

const useStyles = createStyles((theme) => ({

    image: {
        width: `${100}%`,
        height: `300px`,
        objectFit: "cover",
        borderRadius: 20
    },

    content : {
        margin: theme.spacing.xs
    },

    ingredientContent:{
        border: '2px solid #FFC76E',
        borderRadius: 20,
        padding: theme.spacing.xs
    },

    measureText : {
        marginRight: theme.spacing.xs
    },

}));

const IngredientLine = ({ingredient}) => {
    const { classes} = useStyles();
    return (
        <Flex>
            <Text className={classes.measureText}>{ingredient.quantity}</Text>
            <Text className={classes.measureText}>{ingredient.unit}</Text>
            <Text>{ingredient.name}</Text>
        </Flex>
    )
}

const CocktailDetailCard = ({cocktail}) => {
    const { classes} = useStyles();

    return(
        <Box>
            <img className={classes.image} src={cocktail.image} alt="detail cocktail"/>
            <Flex className={classes.content} direction="column">
                <Flex justify="space-between">
                    <Title size={"h3"}>{cocktail.name}</Title>
                    <FavoriteButton cocktail={cocktail}/>
                </Flex>
                <Text>{cocktail.recipe}</Text>
                <Flex direction="column" className={classes.ingredientContent}>
                    <Title align="center" size={"h5"}>Ingredients</Title>
                    { cocktail.ingredients !== undefined ? cocktail.ingredients.map(ingredient => (
                        <IngredientLine ingredient={ingredient}/>
                    )) : null}
                </Flex>
            </Flex>

        </Box>
    )

}
export default CocktailDetailCard;
