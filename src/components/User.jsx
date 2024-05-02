

const User = (props) => {

    const {id, firstName, lastName} = props

     return(
        <div style={{borderBottom: "1px solid black"}}>
        <span><b>Id</b> {id}</span> <br />
        <span><b>First: </b> {firstName}</span><br />
        <span><b>Last: </b>{lastName}</span> <br />
        <span><b>Email: </b>yarshad@gmail.com</span> <br />
        <span><b>DOB: </b>1/1/2010</span> <br />
        <span><b>UserName: </b>yarshad</span> <br />
        </div>

    )
}

export default User