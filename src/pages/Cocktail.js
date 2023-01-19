import Header from "../components/item/Header";
import BottomNavBar from "../components/navigation/BottomNavBar";
import {createStyles, ScrollArea, Select} from "@mantine/core";
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

    monster : {
        width: 15,
        position: "absolute",
        left: '50%',
        bottom: '40px'
    }
}));

const Cocktail = () => {

    const { classes} = useStyles();
    const {width, height} = useWindowDimensions();
    const activeLink = "Cocktail";
    const {search} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cocktails, setCocktails] = useState([]);
    const [typeValue, setTypeValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');

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

   const handleTypeChange = (value) => {
       setTypeValue(value);
       fetch(`http://localhost:3000/api/drinks/search/type/${value}`, {
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
               setCocktails(data);

           }, (error) => {
               setError(error);
           });
   }

   const handleCategoryChange = (value) => {
       setCategoryValue(value);
       fetch(`http://localhost:3000/api/drinks/search/category/${value}`, {
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
               setCocktails(data);

           }, (error) => {
               setError(error);
           });
   }

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            <Select
                label="Rechercher par type"
                placeholder="Choisissez-en un"
                value={typeValue}
                onChange={handleTypeChange}
                data={[
                {value: '63c2b1f4cb8f5bf19d1ef4d5', label: 'Cocktail'},
                {value: '63c2b4d8b7f2f44a1e345db2', label:'Shot'}
            ]}
            />
            <Select
                label="Rechercher par catégorie"
                placeholder="Choisissez-en un"
                value={categoryValue}
                onChange={handleCategoryChange}
                data={[
                    {value: '63c2b7f7b7f2f44a1e345db7', label: 'Sans alcool'},
                    {value: '63c2be44b7f2f44a1e345dc4', label:'Beach Party'},
                    {value: '63c9656a334587f7fc0e361b', label:'Populaire'},
                ]}
            />
            {width <= 600 ? <ScrollArea style={{ height: height - 90 }}><CocktailsList cocktails={cocktails} error={error} isLoaded={isLoaded}/></ScrollArea>
                : <CocktailsList cocktails={cocktails} error={error} isLoaded={isLoaded}/>
            }
            <img className={classes.monster} src="https://app.pixelencounter.com/api/basic/monsters/59"/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Cocktail;