import useWindowDimensions from "../../utils/windowDimensionHook";
import InformationItem from "./InformationItem";
import InformationButton from "../button/InformationButton";

const ChooseInformationSection = ({width, title, text, buttonText, linkTo, color, isBorder, flex, desktopAlign}) => {
    if (width <= 600){
        return <InformationButton title={title} text={text} linkTo={linkTo} color={color}/>
    }
    return <InformationItem title={title} text={text} buttonText={buttonText}
                            linkTo={linkTo} color={color} isBorder={isBorder} flex={flex}
                            desktopAlign={desktopAlign}/>
}

const InformationSection = ({title, text, buttonText, linkTo, color, isBorder, flex, desktopAlign}) => {

    const { width } = useWindowDimensions();
    return(
        <ChooseInformationSection width={width} title={title} text={text} buttonText={buttonText}
                                  linkTo={linkTo} color={color} isBorder={isBorder} flex={flex}
                                  desktopAlign={desktopAlign}
        />
    )
}
export default InformationSection;
