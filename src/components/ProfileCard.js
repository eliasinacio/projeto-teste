import '../styles/profile-card.scss'

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div id="bg1">
        <div id="profile-data">

          <div className="icon">
            <img
              alt="User profile"
              src={profilePic}
            />
          </div>

          <div>
            <h1 id="name">Jão</h1>
            <h2 id="username">@jaodesigner</h2>
            <p id="job">UI/UX Designer</p>
          </div>

          <footer>
            <p id="location">
              <img src={locationIcon} alt="location icon"/>
              São Paulo, SP - Brasil</p>
            
            <div className="footer-data">
              <p id="office">
                <img src={officeIcon} alt="office icon"/>
                InCicle</p>
              
              <p id="university">
                <img src={universityIcon} alt="icon of university"/>
                Unifesp</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;

const 
  profilePic = "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  locationIcon = "https://img.icons8.com/ios/24/000000/place-marker--v1.png",
  officeIcon = "https://img.icons8.com/ios-filled/24/000000/link-company-parent.png",
  universityIcon = "https://img.icons8.com/ios-filled/24/000000/university.png"