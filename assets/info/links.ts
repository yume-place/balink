import { GitHubIcon, RobloxIcon, SoundCloudIcon } from 'vue3-simple-icons'

export const userContent = {
  linksSectionTitle: '아무 링크',
  links: [
    { name: 'GitHub', url: 'https://github.com/baboribo', icon: GitHubIcon, description: '제 프로필과 리포지토리를 볼 수 있어요!'},
    { name: 'Roblox', url: 'https://www.roblox.com/users/244515714/profile', icon: RobloxIcon, description: '로블록스'},
    { name: 'SoundCloud', url: 'https://soundcloud.com/baboribo', icon: SoundCloudIcon, description: '사운드클라우드'},
  ],
  playlistsSectionTitle: '내 플레이리스트',
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
  ]
}