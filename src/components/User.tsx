import { useEffect, useState } from "react"
import { SkeletonArticles } from "../skeletons/SkeletonProfile"

export const User = () => {
  const [profile, setProfile] = useState<any>()

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await res.json()
      setProfile(data)
    }, 5000)
  }, [])

  return (
    <div className="users">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonArticles />}
    </div>
  )
}