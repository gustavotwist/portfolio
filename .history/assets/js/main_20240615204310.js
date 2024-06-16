function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()