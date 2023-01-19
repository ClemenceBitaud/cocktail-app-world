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

    return(
        <Flex
            justify="center"
            className={classes.card}
            onClick={() =>{
                setOpened(true)
            }}
        >
            <Flex
                direction="column"
                align="center"
            >
                <img src={cocktail.image} className={classes.cocktailImage} alt="cocktail"/>
                <Text align="center" size={"sm"} className={classes.text}>{cocktail.name}</Text>
                <Flex>
                    <FavoriteButton cocktail={cocktail}/>
                </Flex>
            </Flex>
            <Modal
                radius={20}
                padding={0}
                opened={opened}
                onClose={() => setOpened(false)}>
                <CocktailDetailCard cocktail={cocktail}/>
            </Modal>
        </Flex>

    )
}
export default CocktailCard;
