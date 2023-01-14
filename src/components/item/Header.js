import {createStyles, Flex} from '@mantine/core';
import image from '../../assets/cocktail.svg';
import Navbar from "../navigation/Navbar";
import useWindowDimensions from "../../utils/windowDimensionHook";
import CustomTextInput from "./CustomTextInput";

const useStyles = createStyles(() => ({

    logo: {
        height:40,
        width: 40
    },
}));

const HeaderWithLogoNavbarTextInput = ({activeLink}) => {
    const { classes} = useStyles();

    return (
        <Flex justify="space-between" align="center">
            <img src={image} className={classes.logo} alt="logo"/>
            <Navbar activeLink={activeLink}/>
            <CustomTextInput/>
        </Flex>
    )
}

const ChooseHeader = ({width, activeLink}) => {
    if (width <= 600){
        return <CustomTextInput/>
    }
    return <HeaderWithLogoNavbarTextInput activeLink={activeLink}/>
}

const Header = ({activeLink}) => {
    const { width } = useWindowDimensions();

    return(
        <ChooseHeader width={width} activeLink={activeLink}/>
    )
}
export default Header;