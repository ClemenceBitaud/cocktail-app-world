import {createStyles, Flex, Text, Title} from '@mantine/core';
import RetroButton from "../button/RetroButton";
import {useNavigate} from "react-router-dom";

const useStyles = createStyles((theme) => ({

    section : {
        borderRadius: 20,
        paddingTop: theme.spacing.lg,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        paddingLeft: theme.spacing.md
    },

    text: {
        marginTop: theme.spacing.md
    }
}));

const InformationItem = ({title, text, buttonText, linkTo, color, isBorder, flex, desktopAlign}) => {

    const { classes} = useStyles();
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(linkTo)
    }

    return(
        <Flex direction="column" align={{ base: 'center', md:desktopAlign}} justify="center" className={classes.section} style={{ border: isBorder ? `2px solid ${color}` : 'none', flex: flex }}>
            <Title size="h1">{title}</Title>
            <Text align={desktopAlign} fz="lg">{text}</Text>
            <RetroButton label={buttonText} handleClick={handleNavigation}/>
        </Flex>
    )
}
export default InformationItem;
