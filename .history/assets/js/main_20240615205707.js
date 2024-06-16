function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    
    
    
    

    const name = document.getElementById('profile.name')
    const person = document.getElementById('profile.person')
    const name = document.getElementById('profile.location')
    const name = document.getElementById('profile.call')
    const name = document.getElementById('profile.mail')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()