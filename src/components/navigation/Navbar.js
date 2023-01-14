// import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {createStyles, Flex} from '@mantine/core';
import '../item/TextInput.css'

const useStyles = createStyles((theme) => ({

    link: {
        boxSizing: 'border-box',
        display: 'block',
        textDecoration: 'none',
        borderRadius: theme.radius.xl,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        height: 30,
        lineHeight: '30px',
        fontFamily: 'Limelight, cursive',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'filled', color: "orange" })
                .background,
            color: theme.colors.dark[9],
        },
    },
}));

const linksMockdata = [
    {
        label:'Home',
        linkTo: '/'
    },
    {
        label:'Cocktail',
        linkTo: '/cocktail'
    },
    {
        label:'Favorite',
        linkTo: '/favorite'
    },
    {
        label: 'Random',
        linkTo: '/random'
    }
];

const Navbar = ({activeLink}) => {

    const navigate = useNavigate();
    const { classes, cx } = useStyles();
    // const [activeLink, setActiveLink] = useState('Home');

    const links = linksMockdata.map((link) => (
        <a
            className={cx(classes.link, { [classes.linkActive]: activeLink === link.label })}
            href="/"
            onClick={(event) => {
                event.preventDefault();
                navigate(link.linkTo)
            }}
            key={link.label}
        >
            {link.label}
        </a>
    ));

    return(
        <Flex>
            {links}
        </Flex>
    )
}
export default Navbar;