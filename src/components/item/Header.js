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

    monster : {
        width: 15,
        position: "absolute",
        right: '5px',
        top: '5px'
    }
}));

const HeaderWithLogoNavbarTextInput = ({activeLink}) => {
    const { classes} = useStyles();

    return (
        <Flex justify="space-between" align="center">
            <img src={image} className={classes.logo} alt="logo"/>
            <Navbar activeLink={activeLink}/>
            <CustomTextInput/>
            <img className={classes.monster} src="https://app.pixelencounter.com/api/basic/monsters/66"/>
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