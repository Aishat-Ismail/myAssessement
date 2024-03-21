

export default function TextLength (props){
    return (
        <>
            <h1>Input Value: <br /> <span>{props.textOutput}</span> </h1>
            <input  onChange={props.changeValue} type="text" />
        </>
    )
}


