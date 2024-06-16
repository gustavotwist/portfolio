function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()