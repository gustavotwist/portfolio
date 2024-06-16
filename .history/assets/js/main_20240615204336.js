function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = p
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()