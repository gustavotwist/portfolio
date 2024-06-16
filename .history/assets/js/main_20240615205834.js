function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    
    const name = document.getElementById('profile.name')
    name.innerText = 

    const person = document.getElementById('profile.person')
    const location = document.getElementById('profile.location')
    const call = document.getElementById('profile.call')
    const mail = document.getElementById('profile.mail')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()