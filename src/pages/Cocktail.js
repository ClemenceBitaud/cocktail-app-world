import Header from "../components/item/Header";
import BottomNavBar from "../components/navigation/BottomNavBar";
import {createStyles, ScrollArea} from "@mantine/core";
import useWindowDimensions from "../utils/windowDimensionHook";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CocktailsList from "../components/list/CocktailsList";

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
}));

const Cocktail = () => {

    const { classes} = useStyles();
    const {width, height} = useWindowDimensions();
    const activeLink = "Cocktail";
    const {search} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        if (search === undefined){
            const saved = JSON.parse(localStorage.getItem("cocktails"));
            setCocktails(saved);
            setIsLoaded(true);

        }else{
            fetch(`http://localhost:3000/api/drinks/search/${search}`, {
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
                    setIsLoaded(true);
                    setCocktails(data);

                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
        }

    }, [search]);

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            {width <= 600 ? <ScrollArea style={{ height: height - 90 }}><CocktailsList cocktails={cocktails} error={error} isLoaded={isLoaded}/></ScrollArea>
                : <CocktailsList cocktails={cocktails} error={error} isLoaded={isLoaded}/>
            }
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Cocktail;