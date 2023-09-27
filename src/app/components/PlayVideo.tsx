import decode from '../utils/converter'
import { VideoItem } from '../utils/interfaces'

/**
 * Display top video that can be play
 * @param param0
 * @returns JSX
 */
const PlayVideo = function ({ id, snippet }: VideoItem) {
  return (
    <div className="w-[72.666667%]">
      <div className="w-full h-[522px] mb-5 bg-slate-800">
        <iframe
          className="w-full h-full"
          src={`${process.env.YT_URL}${id.videoId}`}
          title={snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{decode(snippet.title)}</h1>
        <p>{decode(snippet.description)}</p>
      </div>
    </div>
  )
}

export default PlayVideo
