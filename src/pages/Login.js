import {createStyles, Flex, TextInput, Modal, Text} from "@mantine/core";
import '../components/item/TextInput.css';
import {useState} from "react";
import RetroButton from "../components/button/RetroButton";
import {useNavigate} from "react-router-dom";

const useStyles = createStyles((theme) => ({

    main : {
      height: '100%'
    },

    card : {
        width: 300,
        border: '2px solid #B8D1CD',
        borderRadius: 15,
        padding: theme.spacing.xs,
        margin: theme.spacing.sm,
    },

    register : {
        padding: '30px',
        marginTop: '30px'
    },

    input : {
        marginTop: theme.spacing.sm
    },

    error :{
        color: "red"
    }
}));

const Login = () => {

    const { classes} = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [opened, setOpened] = useState(false);
    const [successRegister, setSuccessRegister] = useState(true);
    const [successLogin, setSuccessLogin] = useState(true);
    const navigate = useNavigate();

    const login = () => {
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": email, "password": password})
        })
            .then(response => response.json())
            .then(response => {
                const user = response.user;
                const token = response.token;
                window.sessionStorage.setItem('userEmail', user.email);
                window.sessionStorage.setItem('userId', user._id);
                window.sessionStorage.setItem('userToken', token);
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
                setSuccessLogin(false);
            })
    }

    const register = () => {
        console.log("register");

        fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": email, "password": password, "name": name })
        })
            .then(response => response.json())
            .then(response => {
                setOpened(false);
            })
            .catch((error) => {
                console.log(error);
                setSuccessRegister(false);
            })
    }

    return (
        <Flex className={classes.main} justify="center" align="center">
            <Flex className={classes.card} direction="column">

                <TextInput
                    value={email}
                    placeholder="Email"
                    radius={20}
                    aria-label="Email"
                    variant="filled"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextInput
                    className={classes.input}
                    value={password}
                    placeholder="Password"
                    radius={20}
                    aria-label="Password"
                    variant="filled"
                    onChange={(event) => setPassword(event.target.value)}
                />
                {!successLogin && <Text className={classes.error}>Email or password incorect</Text>}
                <Flex justify="space-evenly">
                    <RetroButton label={"Login"} handleClick={login}/>
                    <RetroButton label={"Register"} handleClick={() =>{setOpened(true)}}/>
                </Flex>
            </Flex>
            <Modal
                radius={20}
                padding={0}
                opened={opened}
                onClose={() => setOpened(false)}>
                <Flex direction="column" className={classes.register}>
                    <TextInput
                        value={name}
                        placeholder="Name"
                        radius={20}
                        aria-label="Name"
                        variant="filled"
                        required
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextInput
                        className={classes.input}
                        value={email}
                        placeholder="Email"
                        radius={20}
                        aria-label="Email"
                        variant="filled"
                        required
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <TextInput
                        className={classes.input}
                        value={password}
                        placeholder="Password"
                        radius={20}
                        aria-label="Password"
                        variant="filled"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {!successRegister && <Text className={classes.error}>Something went wrong, please try again</Text>}
                    <Flex justify="space-evenly">
                        <RetroButton label={"Register"} handleClick={register}/>
                    </Flex>
                </Flex>
            </Modal>
        </Flex>
    )

}
export default Login;