

function Card (props) {



    return (
        <div className="card">
          <img className="card-image" src={props.image} alt="catPic" />
          <h2 className="card-titel">{props.title}</h2>
          <p className="card-text">{props.text}</p>
       </div>
     );




}
export default Card