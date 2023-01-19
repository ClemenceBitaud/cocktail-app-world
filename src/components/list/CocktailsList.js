import CocktailCard from "../card/CocktailCard";
import {Flex, Loader} from "@mantine/core";
import InformationSection from "../item/InformationSection";
import ErrorMessage from "../write/ErrorMessage";

const CocktailsList = ({cocktails, error, isLoaded}) => {

    if (error){
        return <ErrorMessage text={"Une erreur a été commise, prenons l'apéro en attendant !"}/>
    }else if(!isLoaded){
        return <Flex justify="center" >
            <Loader color="pink" />
        </Flex>
    }else if(cocktails.length === 0){
        return <InformationSection
            title={""}
            text={"Vous n'avez pas encore de favoris... Il faut prendre l'apéro pour y remédier !"}
            buttonText={"Voir les cocktails !"}
            linkTo={"/cocktail"}
            color={"#B8D1CD"}
            isBorder={true}
            flex={1}
            desktopAlign={"center"}
        />
    }else{
        return(
            <Flex wrap="wrap" justify="center">
                {cocktails.map(cocktail => (
                    <CocktailCard cocktail={cocktail} key={cocktail.id}/>
                ))}
            </Flex>
        )
    }

}
export default CocktailsList;