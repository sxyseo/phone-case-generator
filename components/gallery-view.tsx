import { ZodiacRanking } from "@/components/zodiac-ranking"
import { DesignGrid } from "@/components/design-grid"

export function GalleryView() {
  return (
    <div className="max-w-7xl mx-auto">
      <ZodiacRanking />
      <div className="p-4 space-y-8">
        <section>
          <h2 className="text-xl font-medium text-center mb-6">
            热门扭蛋（横滑看更多）
          </h2>
          <DesignGrid type="hot" />
        </section>
        <section>
          <h2 className="text-xl font-medium text-center mb-6">
            新生扭蛋（横滑看更多）
          </h2>
          <DesignGrid type="new" />
        </section>
      </div>
    </div>
  )
}

