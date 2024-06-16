function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    
    'profile.person'
    'profile.location'
    'profile.call'
    'profile.mail'

    const name = document.getElementById()
    const name = document.getElementById()
    const name = document.getElementById()
    const name = document.getElementById()
    const name = document.getElementById()
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()