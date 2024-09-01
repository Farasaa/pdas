
interface ProfileCard {
    title: string;
    handle: string;
    imageSrc: string
}


export default function ProfileCard(props: ProfileCard){
    return (
    <div>
        <img 
        src={props.imageSrc} 
        alt= "for the logo of"
        />
        <div>Title is {props.title}</div>
        <div>Handle is {props.handle}</div>
    </div>
    )
}