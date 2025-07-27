import { GitHubIcon, RobloxIcon, SoundCloudIcon, YouTubeIcon } from 'vue3-simple-icons'

export const userContent = {
  linksSectionTitle: '아무 링크',
  links: [
    { name: 'GitHub', url: 'https://github.com/baboribo', icon: GitHubIcon, description: '제 프로필과 리포지토리를 볼 수 있어요!'},
    { name: 'Roblox', url: 'https://www.roblox.com/users/244515714/profile', icon: RobloxIcon, description: '로블록스'},
    { name: 'SoundCloud', url: 'https://soundcloud.com/baboribo', icon: SoundCloudIcon, description: '사운드클라우드'},
  ],
  playlistsSectionTitle: '플레이리스트',
  playlists: [
    {
      title: 'Untitled',
      sitename: 'SoundCloud',
      url: 'https://soundcloud.com/baboribo/sets/unp?si=0e1d18093f8a4d1ebae29aa8ac52af46&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      cover: 'https://i1.sndcdn.com/artworks-QZc2SIdDeLBQRqos-pYcQWw-t1080x1080.png',
      description: '마니아 장르를 만나보시라!',
      type: 'playlist',
      icon: SoundCloudIcon,
    },
    {
      title: 'ASMR',
      sitename: 'YouTube',
      url: 'https://www.youtube.com/playlist?list=PLozElz2g0QZbMX7tL3dNVOzi-3tT8e4iz',
      cover: 'https://i.ytimg.com/pl_c/PLozElz2g0QZbMX7tL3dNVOzi-3tT8e4iz/studio_square_thumbnail.jpg?sqp=CLyMl8QG-oaymwEICOADEOADSFqi85f_AwYIjazcvQY=&rs=AOn4CLAp4DV8IHj5I0YCD2J6AD0zFPZImQ',
      description: '좋아하는 ASMR을 모아봤어요.',
      type: 'playlist',
      icon: YouTubeIcon,
    },
  ]
}