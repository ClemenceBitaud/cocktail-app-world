import {Flex, Text} from '@mantine/core';

const ErrorMessage = ({text}) => {

    return (
        <Flex justify="center">
            <Text align="center" size={"lg"}>{text}</Text>
        </Flex>

    )
}
export default ErrorMessage;