import {createStyles, Flex, Popover, Text} from "@mantine/core";

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

    pokemonImage : {
        width:100,
        height:100
    },

    text : {
        wordBreak: "break-word"
    }
}));

const PokemonPopover = ({pokemon}) => {

    const { classes} = useStyles();

    return (
        <Popover width={200} position="bottom" withArrow shadow="sm">
            <Popover.Target>
                <Flex
                    justify="center"
                    className={classes.card}
                >
                    <Flex
                        direction="column"
                        align="center"
                    >
                        {/*<img src={cocktail.strDrinkThumb} className={classes.cocktailImage} alt="cocktail"/>*/}
                        <Text align="center" size={"sm"} className={classes.text}>{pokemon.drink.name}</Text>
                    </Flex>
                </Flex>
            </Popover.Target>
            <Popover.Dropdown>
                <img src={pokemon.image} className={classes.pokemonImage} alt="pokemon"/>
                <Text size="sm">{pokemon.name}</Text>
            </Popover.Dropdown>
        </Popover>
    )
}

export default PokemonPopover;