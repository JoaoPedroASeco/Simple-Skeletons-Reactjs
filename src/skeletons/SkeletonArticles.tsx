import { SkeletonElements } from "./skeletonElements"

export const SkeletonArticles = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
      </div>
    </div>
  )
}