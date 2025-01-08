import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface DesignGridProps {
  type: "hot" | "new"
}

export function DesignGrid({ type }: DesignGridProps) {
  const items = [
    {
      id: 1,
      zodiac: "水瓶座",
      title: "别给我画饼，最近戒碳水",
      downloads: 84,
      caseImage: "/placeholder.svg?height=400&width=200",
      wallpaperImage: "/placeholder.svg?height=400&width=200",
    },
    {
      id: 2,
      zodiac: "双子座",
      title: "好无聊啊，一起来花老板的钱吧",
      downloads: 41,
      caseImage: "/placeholder.svg?height=400&width=200",
      wallpaperImage: "/placeholder.svg?height=400&width=200",
    },
    {
      id: 3,
      zodiac: "金牛座",
      title: "周一周五吃苦，周六周日大补",
      downloads: 40,
      caseImage: "/placeholder.svg?height=400&width=200",
      wallpaperImage: "/placeholder.svg?height=400&width=200",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="relative">
              {type === "hot" && (
                <div className="absolute -top-2 -left-2 z-10">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full transform rotate-[-15deg]">
                    HOT DEAL
                  </div>
                </div>
              )}
              <div className="flex justify-center gap-4">
                <div className="relative w-[150px] h-[300px]">
                  <Image
                    src={item.caseImage}
                    alt="Phone Case"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[150px] h-[300px]">
                  <Image
                    src={item.wallpaperImage}
                    alt="Wallpaper"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-medium">{item.zodiac}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.title}</p>
              <p className="text-gray-400 text-sm mt-1">
                已被下载{item.downloads}次
              </p>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1">
                  下载手机壳
                </Button>
                <Button variant="outline" className="flex-1">
                  下载壁纸
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

