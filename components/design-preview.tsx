import Image from "next/image"

export function DesignPreview() {
  return (
    <div className="flex justify-center gap-4">
      <div className="relative w-[200px] h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=200"
          alt="Phone Case Preview"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-[200px] h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=200"
          alt="Wallpaper Preview"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

