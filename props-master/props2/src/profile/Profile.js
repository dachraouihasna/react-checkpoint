import React from 'react';

const Profile = (props) => (
    <div>
        <section>

            <img src="img.png" alt="myPic" />

            <h1 style={{ color: "black" }}>FullName: {props.fullname}</h1>

            <h2 style={{ color: "blue" }}>Profession: {props.profession}</h2>²_
            <h2 style={{ color: "red" }}> Bio:{props.bio}</h2>
        </section>


    </div>
)

const HandleName = (props) => {

    return alert({ props });
}
export { Profile, HandleName };