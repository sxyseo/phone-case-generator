import { GeneratorView } from "@/components/generator-view"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <h1 className="text-xl font-medium text-center">打工人壁纸扭蛋机</h1>
      </header>
      <GeneratorView />
    </main>
  )
}

