
interface ProfileCard {
    title: string;
    handle: string;
    imageSrc: string
    description: string
}


export default function ProfileCard(props: ProfileCard){
    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img 
                src={props.imageSrc} 
                alt= "for the logo of"
                />
            </figure>

        </div>
    
        <div className="card-content">
           <div className="media-content">
                <p className="title is-4">{props.title}</p>
                <p className="title is-6">{props.handle}</p>
            </div>    
           <div className="content">{props.description} </div> 
        </div>  
    </div>
    )
}