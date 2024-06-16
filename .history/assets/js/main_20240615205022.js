function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = documentget
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()