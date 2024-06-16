function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()