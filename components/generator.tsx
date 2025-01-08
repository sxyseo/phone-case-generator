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
import Image from "next/image"

export function Generator() {
  const [text, setText] = useState("")
  const [style, setStyle] = useState("")
  const [zodiac, setZodiac] = useState("")

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h2 className="text-xl font-medium">打工人壁纸扭蛋机</h2>
        
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
              <SelectItem value="gemini">双子座</SelectItem>
              <SelectItem value="aquarius">水瓶座</SelectItem>
              <SelectItem value="taurus">金牛座</SelectItem>
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
          <Button className="w-full" variant="default">
            帮我选个文案并扭蛋！
          </Button>
          <Button className="w-full" variant="outline">
            用我的文案开扭扭蛋！
          </Button>
          <Button variant="link" className="w-full">
            👀 看看别人扭的蛋
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">你的扭蛋</h3>
        <div className="flex justify-center gap-4">
          <Image
            src="/placeholder.svg?height=400&width=200"
            alt="Generated Phone Case"
            width={200}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/placeholder.svg?height=400&width=200"
            alt="Generated Wallpaper"
            width={200}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex gap-4">
          <Button className="flex-1" variant="outline">
            下载手机壳图片
          </Button>
          <Button className="flex-1" variant="outline">
            下载壁纸图片
          </Button>
        </div>
        <Button className="w-full" variant="default">
          传到扭蛋库让别人看到！
        </Button>
      </div>
    </div>
  )
}

