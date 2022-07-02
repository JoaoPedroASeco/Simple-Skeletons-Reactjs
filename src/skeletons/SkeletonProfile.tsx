import { SkeletonElements } from "./skeletonElements"

export const SkeletonArticles = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElements type="avatar" />
        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
      </div>
    </div>
  )
}