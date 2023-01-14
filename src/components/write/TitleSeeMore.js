import {createStyles, Flex, Title} from '@mantine/core';

const useStyles = createStyles((theme) => ({

    section : {
        marginTop: theme.spacing.md,
    },

    link: {
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        fontSize: theme.fontSizes.sm,
    },
}));

const TitleSeeMore = ({title, linkTo}) => {

    const { classes} = useStyles();

    return(
        <Flex direction="row" align="center" justify="space-between" className={classes.section}>
            <Title size="h3">{title}</Title>
            <a href={linkTo} className={classes.link}>See more</a>
        </Flex>
    )
}
export default TitleSeeMore;
