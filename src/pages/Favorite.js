import Header from "../components/item/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import {createStyles, ScrollArea} from "@mantine/core";
import BottomNavBar from "../components/navigation/BottomNavBar";
import CocktailsList from "../components/list/CocktailsList";
import {useEffect, useState} from "react";

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
        marginTop: theme.spacing.xl
    },
}));

const Favorite = () => {

    const { classes} = useStyles();
    const {width, height} = useWindowDimensions();
    const [cocktails, setCocktails] = useState([]);
    const activeLink = "Favorite";
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
                setCocktails(response.favorites)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [userId]);

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            {width <= 600 ? <ScrollArea style={{ height: height - 90 }}><CocktailsList cocktails={cocktails} error={null} isLoaded={true}/></ScrollArea>
                : <CocktailsList cocktails={cocktails} error={null} isLoaded={true}/>
            }
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Favorite;