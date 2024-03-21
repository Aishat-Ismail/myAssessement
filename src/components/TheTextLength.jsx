
export default function TheTextLength (props){
    return(
        <>
        <p>{props.children} {props.theLength}</p>
        <h3>{props.long}</h3>
        </>
    )
}