function Profile({profile}) {
    return (
        <div>
            {profile.name} <br/>
            {profile.age}<br/>
            {profile.profession}<br/>
            {profile.adresse.zip_code}<br/>

        </div>
      );
}

export default Profile;