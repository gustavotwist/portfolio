function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = pr
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()