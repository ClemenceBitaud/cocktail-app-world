import {useNavigate} from 'react-router-dom';
import {createStyles, Flex, UnstyledButton, Text} from '@mantine/core';
import '../item/TextInput.css'
import HomeIcon from '@mui/icons-material/Home';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const useStyles = createStyles((theme) => ({

    main : {
        backgroundColor: "#FFE9D7",
        borderRadius: theme.radius.xl,
        padding: '5px',
        marginTop: theme.spacing.xs,
        marginBottom: theme.spacing.xs,
        marginLeft: theme.spacing.sm,
        marginRight: theme.spacing.sm,
        position:"absolute",
        left:0,
        bottom:0,
        right:0,
    },

    link: {
        borderRadius: theme.radius.xl,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        padding: `0 ${theme.spacing.xs}px`,
        backgroundColor: "transparent",
        height: 30,
        lineHeight: '30px',
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'filled', color: "orange" })
                .background,
            color: theme.colors.dark[9],
        },
    },

    text: {
        display: "none"
    },

    textActive: {
        display: "block"
    },

}));

const linksMockdata = [
    {
        label:'Home',
        icon: HomeIcon,
        linkTo: '/'
    },
    {
        label:'Cocktail',
        icon: LocalBarIcon,
        linkTo: '/cocktail'
    },
    {
        label:'Favorite',
        icon: FavoriteIcon,
        linkTo: '/favorite'
    },
    {
        label: 'Random',
        icon : ShuffleIcon,
        linkTo: '/random'
    }
];

const BottomNavBar = ({activeLink}) => {

    const navigate = useNavigate();
    const { classes, cx } = useStyles();

    const links = linksMockdata.map((link) => (
        <UnstyledButton
            className={cx(classes.link, { [classes.linkActive]: activeLink === link.label })}
            onClick={(event) => {
                event.preventDefault();
                navigate(link.linkTo)
                // setActiveLink(link.label);
            }}
            key={link.label}
        >
            <Flex align="center">
                <link.icon fontSize="small"/>
                <Text className={cx(classes.text, { [classes.textActive]: activeLink === link.label })} size="xs">{link.label}</Text>
            </Flex>

        </UnstyledButton>
    ));

    return(
        <Flex justify="space-between" className={classes.main}>
            {links}
        </Flex>
    )
}
export default BottomNavBar;