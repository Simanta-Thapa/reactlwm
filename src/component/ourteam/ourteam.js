function ourteamcard(props){
   return(<>

   <div className="card w-2/5">
     <div className="image">
        <img src={props.image} />
     </div>

     <div className="upperparttext">
        <div className="upperpartextheading">
          <h3>{props.name}</h3>
          <p>{props.post}</p>
        </div>
     </div>

     <div className="lowerparttext">
    <a href="#">{props.email}</a>
     </div>
   </div>
   </>)
}

export default ourteamcard