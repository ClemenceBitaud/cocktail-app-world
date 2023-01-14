import Header from "../components/item/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import {createStyles, ScrollArea} from "@mantine/core";
import BottomNavBar from "../components/navigation/BottomNavBar";
import {useSelector} from "react-redux";
import {favoriteCocktails} from "../utils/slice";
import CocktailsList from "../components/list/CocktailsList";

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
    const favorites = useSelector(favoriteCocktails);
    const activeLink = "Favorite";

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            {width <= 600 ? <ScrollArea style={{ height: height - 90 }}><CocktailsList cocktails={favorites} error={null} isLoaded={true}/></ScrollArea>
                : <CocktailsList cocktails={favorites} error={null} isLoaded={true}/>
            }
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Favorite;