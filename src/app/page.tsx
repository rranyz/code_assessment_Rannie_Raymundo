'use client'

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { ResponseAPI, VideoItem, VideoLists } from './utils/interfaces'
import SearchBar from './components/SearchBar'
import VidList from './components/VidList'
import PlayVideo from './components/PlayVideo'

export default function Home() {
  const [queue, setQueue] = useState<string>('')
  const [resultVideos, setResultVideos] = useState<VideoLists>()

  const fetcher = (args: string) => fetch(args).then((res) => res.json())
  const {
    data: response,
    error,
    isValidating,
    isLoading
  } = useSWR<ResponseAPI>(
    queue !== ''
      ? `${process.env.API_URL}?part=snippet&maxResults=6&q=${queue}&type=video&key=${process.env.YT_KEY}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      revalidateIfStale: false
    }
  )

  /**
   * Select video and display on the top result as a playable video
   * @param itemSelected
   */
  const selectVideo = (itemSelected: VideoItem) => {
    setResultVideos((resVids) => {
      const reNewList = resVids?.nextVideos?.filter(
        (itemFilter) => itemFilter.id.videoId !== itemSelected.id.videoId
      )

      if (resVids?.topVideo) reNewList?.push(resVids.topVideo)

      return {
        topVideo: itemSelected,
        nextVideos: reNewList
      }
    })
  }

  useEffect(() => {
    if (!isValidating && response?.items) {
      setResultVideos(() => {
        const [topVid, ...restItem] = response.items
        return {
          topVideo: topVid,
          nextVideos: [...restItem]
        }
      })
    }
  }, [isValidating, response])

  return (
    <>
      <SearchBar
        disabled={isValidating}
        onSearch={(ctx) => setQueue(() => ctx)}
      />
      <div className="flex gap-4">
        {isLoading && (
          <div className="w-full text-center">
            <h1>Searching...</h1>
          </div>
        )}
        {!resultVideos && !isLoading && (
          <div className="w-full text-center">
            <h1>Search any video...</h1>
          </div>
        )}
        {resultVideos && !error && (
          <>
            <PlayVideo
              id={resultVideos.topVideo.id}
              snippet={resultVideos.topVideo.snippet}
            />
            <VidList
              videos={resultVideos.nextVideos || []}
              onSelect={(pickVid) => selectVideo(pickVid)}
            />
          </>
        )}
      </div>
    </>
  )
}
