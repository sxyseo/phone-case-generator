import Image from "next/image"

interface DesignPreviewProps {
  caseImage?: string
  wallpaperImage?: string
  isLoading?: boolean
}

export function DesignPreview({ caseImage, wallpaperImage, isLoading }: DesignPreviewProps) {
  if (isLoading) {
    return (
      <div className="aspect-[4/3] rounded-lg bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-400 border-t-transparent"></div>
      </div>
    )
  }

  if (!caseImage && !wallpaperImage) {
    return (
      <div className="aspect-[4/3] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
        生成的图片将在这里显示
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {caseImage && (
        <img 
          src={caseImage} 
          alt="手机壳预览"
          className="rounded-lg w-full h-auto object-cover"
        />
      )}
      {wallpaperImage && (
        <img 
          src={wallpaperImage} 
          alt="壁纸预览"
          className="rounded-lg w-full h-auto object-cover"
        />
      )}
    </div>
  )
}

