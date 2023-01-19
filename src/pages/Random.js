import Header from "../components/item/Header";
import BottomNavBar from "../components/navigation/BottomNavBar";
import {createStyles, Flex, ScrollArea, Box} from "@mantine/core";
import useWindowDimensions from "../utils/windowDimensionHook";
import {useState, useEffect} from "react";
import CocktailDetailCard from "../components/card/CocktailDetailCard";
import RetroButton from "../components/button/RetroButton";

const useStyles = createStyles((theme) => ({

    main : {
        marginRight: `${2}em`,
        marginLeft: `${2}em`,
        marginTop: `${0.5}em`,

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            marginRight: `${1}em`,
            marginLeft: `${1}em`,
            marginTop: `${0.5}em`,
        },
    },

    section : {
        marginTop: theme.spacing.xl
    },

    retroButton: {
        marginBottom: theme.spacing.xs
    },

    cocktailCard: {
        width: '40%',

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: '90%',
        },
    },

    monsterRandom : {
        width: 15,
        position: "absolute",
        left: '370px',
        bottom: '20px'
    }
}));

const Random = () => {

    const { classes} = useStyles();
    const {width, height} = useWindowDimensions();
    const activeLink = "Random";
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        handleRandomApi()
    }, []);

    const handleRandomApi = () => {
        setCocktail({});
        fetch('http://localhost:3000/api/drinks/random/find', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'email' : window.sessionStorage.getItem('userEmail'),
                'authorization' : window.sessionStorage.getItem('userToken')
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCocktail(data);
            }, (error) => {
                console.log(error)
            });
    }

    return(
        <Box className={classes.main}>
            <Header activeLink={activeLink}/>
            <Flex direction="column" align="center">
                <Box className={classes.retroButton}>
                    <RetroButton label={"Play again !"} handleClick={handleRandomApi}/>
                </Box>
                <Box className={classes.cocktailCard}>
                    <CocktailDetailCard cocktail={cocktail}/>
                </Box>
            </Flex>
            <img className={classes.monsterRandom} src="https://app.pixelencounter.com/api/basic/monsters/50"/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </Box>
    )
}
export default Random;