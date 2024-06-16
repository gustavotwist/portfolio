function resolveProfileInfo()

(async () => {
    const profileData = await fetchProfileData()
    console.log(profileData)
})()