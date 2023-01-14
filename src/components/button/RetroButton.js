import {createStyles, Flex, UnstyledButton} from '@mantine/core';

const useStyles = createStyles((theme) => ({

    logo: {
        height:40,
        width: 40
    },

    link: {
        boxSizing: 'border-box',
        boxShadow: '0px 6px 5px rgba(255, 179, 188, 0.1)',
        textDecoration: 'none',
        borderRadius: 10,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        backgroundColor: "pink",
        marginTop: theme.spacing.xl,
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        height: 30,
        lineHeight: '30px',
        fontFamily: 'Limelight, cursive',
    },
}));

const RetroButton = ({label, handleClick}) => {
    const { classes} = useStyles();

    return(
        <Flex>
            <UnstyledButton
                className={classes.link}
                onClick={handleClick}
                key={label}
            >
                {label}
            </UnstyledButton>
        </Flex>
    )
}
export default RetroButton;
