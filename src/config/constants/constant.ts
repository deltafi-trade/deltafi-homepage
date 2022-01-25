export const HOMEPAGE_LINK = process.env.REACT_HOMPAGE_URL || '/'
export const APP_LINK = process.env.REACT_APP_URL || 'https://app.deltafi.ai'
export const REWARD_LINK = 'https://app.deltafi.ai/rewards'
export const BLOG_LINK = 'https://medium.com/deltafi'
export const TWITTER_LINK = 'https://twitter.com/deltafi_ai'
export const DISCORD_LINK = 'https://discord.gg/deltafi'
export const GITHUB_LINK = 'https://github.com/delta-fi'
export const WHITE_PAPER = 'https://docs.deltafi.ai/welcome/whitepaper'
export const TELEGRAM_LINK = 'https://t.me/deltafi_labs'
export const YOUTUBE_LINK = 'https://youtube.com'
export const CAREERS_LINK = 'https://deltafi.medium.com/jobs-deltafi-280dd54f82de'
export const PRIVACY_LINK = '/privacy'
export const TEAM_LINK = '/team'

export const menuItems = [
  {
    text: 'Blog',
    to: BLOG_LINK,
  },
  {
    text: 'Community',
    children: [
      {
        text: 'Twitter',
        to: TWITTER_LINK,
      },
      {
        text: 'Discord',
        to: DISCORD_LINK,
      },
      {
        text: 'Telegram',
        to: TELEGRAM_LINK,
      },
    ],
  },
  {
    text: 'Resources',
    children: [
      {
        text: 'Github',
        to: GITHUB_LINK,
      },
      {
        text: 'Docs',
        to: DOC_LINK,
      },
    ],
  },
  { text: 'Whitepaper', to: WHITE_PAPER },
  { text: 'About', to: TEAM_LINK },
]
