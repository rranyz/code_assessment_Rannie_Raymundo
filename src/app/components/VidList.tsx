import React from 'react'
import Image from 'next/image'
import { VideoItem } from '../utils/interfaces'
import decode from '../utils/converter'

interface VideoItems {
  videos: Array<VideoItem>
  onSelect: (selectedItem: VideoItem) => void
}

/**
 * Display of video list
 * @param videos
 * @param onSelect
 * @returns JSX
 */
const VidList = function ({ videos, onSelect }: VideoItems) {
  return (
    <div className="w-[25rem]">
      {videos.map((ctxVid, idx) => (
        <div className="relative w-full h-32" key={`video_item_${idx + 1}`}>
          <button
            type="button"
            className="absolute z-10 w-full h-32"
            onClick={() => onSelect(ctxVid)}
          >
            <span className="text-transparent">Click</span>
          </button>
          <div className="flex gap-2 w-full mb-5">
            <div className="w-full h-full bg-black">
              <Image
                src={ctxVid.snippet.thumbnails.medium.url}
                width={500}
                height={500}
                alt="thumbnail from videos"
              />
            </div>
            <p className="w-[360px] overflow-hidden font-semibold text-ellipsis">
              {decode(ctxVid.snippet.title)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VidList
