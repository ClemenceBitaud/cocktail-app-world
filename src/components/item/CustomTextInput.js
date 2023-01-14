import './TextInput.css';
import {TextInput} from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CustomTextInput = () => {

    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }
    const handleSearch = (event) => {
        if (event.key === 'Enter'){
            console.log(message);
            navigate(`/cocktail/${message}`);
        }
    }

    return (
        <TextInput
            value={message}
            placeholder="Search a cocktail"
            radius={20}
            aria-label="Search a cocktail"
            variant="filled"
            rightSection={<SearchIcon sx={{ color: '#FFB3BC' }}/>}
            onChange={handleChange}
            onKeyDown={handleSearch}
        />
    )
}

export default CustomTextInput;