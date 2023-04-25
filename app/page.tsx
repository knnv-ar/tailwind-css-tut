export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Title 1</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs note">A little note</p>
      
      <div className="flex w-full">
        <div className="w-1/5 bg-red-500 w-min-width"></div>
        <div className="w-4/5 h-64 bg-green-500"></div>
      </div>
    </div>
  )
}