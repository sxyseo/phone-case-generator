'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { DesignPreview } from "@/components/design-preview"
import Link from "next/link"

export function GeneratorView() {
  const [text, setText] = useState("")
  const [style, setStyle] = useState("")
  const [zodiac, setZodiac] = useState("")

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                风格 <span className="text-red-500">*</span>
              </label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="选择风格" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hand-drawn">手绘插画风</SelectItem>
                  <SelectItem value="minimal">简约风格</SelectItem>
                  <SelectItem value="cute">可爱风格</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                星座 <span className="text-red-500">*</span>
              </label>
              <Select value={zodiac} onValueChange={setZodiac}>
                <SelectTrigger>
                  <SelectValue placeholder="选择星座" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="aquarius">水瓶座</SelectItem>
                <SelectItem value="pisces">双鱼座</SelectItem>
                <SelectItem value="aries">白羊座</SelectItem>
                <SelectItem value="taurus">金牛座</SelectItem>
                <SelectItem value="gemini">双子座</SelectItem>
                <SelectItem value="cancer">巨蟹座</SelectItem>
                <SelectItem value="leo">狮子座</SelectItem>
                <SelectItem value="virgo">处女座</SelectItem>
                <SelectItem value="libra">天秤座</SelectItem>
                <SelectItem value="scorpio">天蝎座</SelectItem>
                <SelectItem value="sagittarius">射手座</SelectItem>
                <SelectItem value="capricorn">摩羯座</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                文字 (20个字以内) <span className="text-red-500">*</span>
              </label>
              <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={20}
                placeholder="输入文字"
              />
              <div className="text-right text-sm text-gray-500">
                {text.length}/20
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-emerald-400 hover:bg-emerald-500">
                🎲 帮我选个文案并扭蛋！
              </Button>
              <Button className="w-full" variant="secondary">
                用我的文案开始扭蛋！
              </Button>
              <Link href="/gallery" className="block">
                <Button variant="link" className="w-full">
                  👀 看看别人扭的蛋
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-6">
            <h2 className="text-lg font-medium">你的扭蛋</h2>
            <DesignPreview />
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button className="flex-1" variant="outline">
                  下载手机壳图片
                </Button>
                <Button className="flex-1" variant="outline">
                  下载壁纸图片
                </Button>
              </div>
              <Button className="w-full bg-emerald-400 hover:bg-emerald-500">
                🔄 传到扭蛋库让别人看到！
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

