export function ZodiacRanking() {
  const rankings = [
    { sign: "双子座", count: 114 },
    { sign: "水瓶座", count: 92 },
    { sign: "金牛座", count: 51 },
  ]

  return (
    <div className="bg-white p-4">
      <h2 className="text-center mb-4">星座下载量排行</h2>
      <div className="flex justify-around max-w-2xl mx-auto">
        {rankings.map((item) => (
          <div key={item.sign} className="text-center">
            <span className="mr-2">{item.sign}</span>
            <span className="inline-flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

