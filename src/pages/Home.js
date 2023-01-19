import {createStyles, Flex, ScrollArea, Box} from "@mantine/core";
import TitleSeeMore from "../components/write/TitleSeeMore";
import Header from "../components/item/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import BottomNavBar from "../components/navigation/BottomNavBar";
import CocktailsList from "../components/list/CocktailsList";
import {useEffect, useState} from "react";
import InformationSection from "../components/item/InformationSection";

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

const InfoSeeMoreAndList = ({cocktails, error, isLoaded}) => {
    const {classes} = useStyles();
    return (
        <Box>
            <Flex direction={{ base: 'column', md:'row'}} className={classes.section}>
                <InformationSection
                    title={"Bienvenue dans le monde des cocktails !"}
                    text={"Aucune idée pour un apéritif ou une fête ? Un cocktail en tête mais vous ne savez pas comment le réaliser ? Pas de boisson originale pour votre SAM ?"}
                    buttonText={"Trouver un cocktail"}
                    linkTo={"/cocktail"}
                    color={"#FFB3BC"}
                    isBorder={false}
                    flex={2}
                    desktopAlign={"flex-start"}
                />
                <InformationSection
                    title={""}
                    text={"Envie de pimenter les choses ? Laissez-nous choisir pour vous !"}
                    buttonText={"Démarrer la recherche aléatoire !"}
                    linkTo={"/random"}
                    color={"#B8D1CD"}
                    isBorder={true}
                    flex={1}
                    desktopAlign={"center"}
                />
            </Flex>
            <TitleSeeMore title={"Cocktails"} linkTo={"/cocktail"}/>
            <CocktailsList cocktails={cocktails} error={error} isLoaded={isLoaded}/>
        </Box>
    )
}

const Home = () => {

    const { classes} = useStyles();
    const {width, height} = useWindowDimensions();
    const activeLink = "Home";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/drinks", {
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
                console.log(data);
                setCocktails(data.slice(0,15));
                localStorage.setItem("cocktails", JSON.stringify(data));

            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>

            {width <= 600 ? <ScrollArea style={{ height: height - 90}}>
                    <InfoSeeMoreAndList cocktails={cocktails} error={error} isLoaded={isLoaded}/>
                </ScrollArea>
                : <InfoSeeMoreAndList cocktails={cocktails} error={error} isLoaded={isLoaded}/>
            }
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>

    )
}
export default Home;