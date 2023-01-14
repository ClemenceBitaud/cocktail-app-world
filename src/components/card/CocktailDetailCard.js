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
    }

}));

const IngredientLine = ({measure, ingredient}) => {
    const { classes} = useStyles();
    return (
        <Flex>
            <Text className={classes.measureText}>{measure}</Text>
            <Text>{ingredient}</Text>
        </Flex>
    )
}

const CocktailDetailCard = ({cocktail}) => {
    const { classes} = useStyles();

    return(
        <Box>
            <img className={classes.image} src={cocktail.strDrinkThumb} alt="detail cocktail"/>
            <Flex className={classes.content} direction="column">
                <Flex justify="space-between">
                    <Title size={"h3"}>{cocktail.strDrink}</Title>
                    <FavoriteButton cocktail={cocktail}/>
                </Flex>
                <Text>{cocktail.strInstructions}</Text>
                <Flex direction="column" className={classes.ingredientContent}>
                    <Title align="center" size={"h5"}>Ingredients</Title>
                    <IngredientLine measure={cocktail.strMeasure1} ingredient={cocktail.strIngredient1}/>
                    <IngredientLine measure={cocktail.strMeasure2} ingredient={cocktail.strIngredient2}/>
                    <IngredientLine measure={cocktail.strMeasure3} ingredient={cocktail.strIngredient3}/>
                    <IngredientLine measure={cocktail.strMeasure4} ingredient={cocktail.strIngredient4}/>
                    <IngredientLine measure={cocktail.strMeasure5} ingredient={cocktail.strIngredient5}/>
                    <IngredientLine measure={cocktail.strMeasure6} ingredient={cocktail.strIngredient6}/>
                    <IngredientLine measure={cocktail.strMeasure7} ingredient={cocktail.strIngredient7}/>
                    <IngredientLine measure={cocktail.strMeasure8} ingredient={cocktail.strIngredient8}/>
                    <IngredientLine measure={cocktail.strMeasure9} ingredient={cocktail.strIngredient9}/>
                    <IngredientLine measure={cocktail.strMeasure10} ingredient={cocktail.strIngredient10}/>
                    <IngredientLine measure={cocktail.strMeasure11} ingredient={cocktail.strIngredient11}/>
                    <IngredientLine measure={cocktail.strMeasure12} ingredient={cocktail.strIngredient12}/>
                    <IngredientLine measure={cocktail.strMeasure13} ingredient={cocktail.strIngredient13}/>
                    <IngredientLine measure={cocktail.strMeasure14} ingredient={cocktail.strIngredient14}/>
                    <IngredientLine measure={cocktail.strMeasure15} ingredient={cocktail.strIngredient15}/>
                </Flex>
            </Flex>

        </Box>
    )

}
export default CocktailDetailCard;
