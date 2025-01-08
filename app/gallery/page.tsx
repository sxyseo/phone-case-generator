import { GalleryView } from "@/components/gallery-view"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <a href="/" className="text-lg">← 回去扭蛋</a>
          <h1 className="text-xl font-medium">别的打工人扭了什么蛋</h1>
          <button className="text-lg">刷新</button>
        </div>
      </header>
      <GalleryView />
    </main>
  )
}

