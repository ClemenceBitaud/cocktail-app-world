import {createStyles, Flex, ScrollArea} from "@mantine/core";
import Header from "../components/item/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import BottomNavBar from "../components/navigation/BottomNavBar";
import {useEffect, useState} from "react";
import PokemonPopover from "../components/item/PokemonPopover";

const useStyles = createStyles((theme) => ({

    main : {
        marginRight: `${2}em`,
        marginLeft: `${2}em`,
        marginTop: `${0.5}em`,

        // Media query with value from theme
        [`@media (max-width: 600px)`]: {
            marginRight: `${1}em`,
            marginLeft: `${1}em`,
            marginTop: `${0.5}em`,
        },
    },

    section : {
        marginTop: theme.spacing.md
    },
}));

const PokemonList = ({pokemons}) => {
    return (
        <Flex wrap="wrap" justify="center">
            {pokemons.map(pokemon => (
                <PokemonPopover pokemon={pokemon} key={pokemon._id}/>
            ))}
        </Flex>
    )
}

const Pokemon = () => {

    const { classes} = useStyles();
    const {width, height} = useWindowDimensions();
    const activeLink = "Pokemon";
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/pokemons", {
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
                setPokemons(data);
                // localStorage.setItem("alcoholic-cocktails", JSON.stringify(drinks));

            }, (error) => {
                console.log(error);
            });
    }, []);

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>

            {width <= 600 ? <ScrollArea style={{ height: height - 90}}>
                    <PokemonList pokemons={pokemons}/>
                </ScrollArea>
                : <PokemonList pokemons={pokemons}/>
            }
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>

    )
}
export default Pokemon;