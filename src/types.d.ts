export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  title: string;
  thumbnails: {
    medium: {
      url: string;
    };
  }
}

export interface Video {
  snippet: Snippet;
  id: {
    channelId: string;
    videoId: string;
  }
}

export interface Videos {
  videos: Video[];
  nextPageToken?: string;
  prevPageToken?: string;
}

export interface VideoCardProps {
  snippet: Snippet;
  id: {
    channelId: string;
    videoId: string;
  };
}

export interface VideoDetails {
  id: string;
  snippet: {
    channelTitle: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      }
    };
    title: string;
  };
  statistics: {
    dislikeCount: string;
    likeCount: string;
    viewCount: string;
  }
}