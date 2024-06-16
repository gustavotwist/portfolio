function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()