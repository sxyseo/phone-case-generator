import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { style, zodiac, text, needSuggestion } = await req.json()

    // 这里调用 Coze API
    const response = await fetch("YOUR_COZE_API_ENDPOINT", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.COZE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        style,
        zodiac,
        text,
        needSuggestion
      }),
    })

    if (!response.ok) {
      throw new Error("Coze API 调用失败")
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "生成失败" },
      { status: 500 }
    )
  }
} 