import ProfileCard  from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"



export default function App(){
    return(
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard 
            title = "Alexa"
            handle = "@alexa99"
            imageSrc = {AlexaImage}
            />
            <ProfileCard 
            title = "Siri"
            handle = "@siri01"
            imageSrc={SiriImage}
            />
            <ProfileCard 
            title = "Cortana"
            handle = "@cortana32"
            imageSrc={CortanaImage}
            />
        </div>

    )
}