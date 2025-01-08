import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Gallery() {
  const items = [
    {
      id: 1,
      zodiac: "水瓶座",
      title: "别给我画饼，最近戒碳水",
      downloads: 78,
      caseImage: "/placeholder.svg?height=400&width=200",
      wallpaperImage: "/placeholder.svg?height=400&width=200",
    },
    {
      id: 2,
      zodiac: "金牛座",
      title: "周一周五吃苦，周六周日大补",
      downloads: 39,
      caseImage: "/placeholder.svg?height=400&width=200",
      wallpaperImage: "/placeholder.svg?height=400&width=200",
    },
    // Add more items as needed
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow">
          <div className="relative">
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
              HOT
            </div>
            <div className="flex justify-center gap-4">
              <Image
                src={item.caseImage}
                alt="Phone Case"
                width={150}
                height={300}
                className="rounded-lg"
              />
              <Image
                src={item.wallpaperImage}
                alt="Wallpaper"
                width={150}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="font-medium">{item.zodiac}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.title}</p>
            <p className="text-gray-400 text-sm mt-1">已被下载{item.downloads}次</p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="w-full">
                下载手机壳
              </Button>
              <Button variant="outline" className="w-full">
                下载壁纸
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

