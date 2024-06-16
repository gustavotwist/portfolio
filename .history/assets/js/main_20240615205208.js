function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    id="profile.name"
id="profile.person"
id="profile.location"
id="profile.call"
id="profile.mail"

    const name = document.getElementById()
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()