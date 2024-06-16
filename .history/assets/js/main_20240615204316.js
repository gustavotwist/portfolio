function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    php
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()