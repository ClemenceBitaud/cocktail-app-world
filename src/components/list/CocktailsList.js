import CocktailCard from "../card/CocktailCard";
import {Flex, Loader} from "@mantine/core";
import InformationSection from "../item/InformationSection";
import ErrorMessage from "../write/ErrorMessage";

const CocktailsList = ({cocktails, error, isLoaded}) => {

    if (error){
        return <ErrorMessage text={"A mistake has been made, let's have an aperitif while we wait!"}/>
    }else if(!isLoaded){
        return <Flex justify="center" >
            <Loader color="pink" />
        </Flex>
    }else if(cocktails.length === 0){
        return <InformationSection
            title={""}
            text={"You don't have any favourites yet... You have to have an aperitif to remedy that!"}
            buttonText={"See cocktails !"}
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
                    <CocktailCard cocktail={cocktail} key={cocktail.strDrink}/>
                ))}
            </Flex>
        )
    }

}
export default CocktailsList;