export interface VideoItem {
  id: {
    kind: string
    videoId?: string
    channelId?: string
  }
  snippet: {
    publishedAt: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
  }
}

export interface ResponseAPI {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Array<VideoItem>
}

export interface VideoLists {
  topVideo: VideoItem
  nextVideos?: Array<VideoItem>
}
