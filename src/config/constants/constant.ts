export const HOMEPAGE_LINK = process.env.REACT_HOMPAGE_URL || "/";
export const APP_LINK = process.env.REACT_APP_URL || "https://app.deltafi.trade";
export const REWARD_LINK = "https://app.deltafi.trade/rewards";
export const BLOG_LINK = "https://medium.com/deltafi";
export const TWITTER_LINK = "https://twitter.com/deltafi_ai";
export const DISCORD_LINK = "https://discord.gg/deltafi";
export const GITHUB_LINK = "https://github.com/delta-fi";
export const WHITE_PAPER = "https://deltafi-s3.s3.us-east-2.amazonaws.com/DeltaFi_whitepaper.pdf";
export const TELEGRAM_LINK = "https://t.me/deltafi_labs";
export const YOUTUBE_LINK = "https://youtube.com";
export const CAREERS_LINK = "https://deltafi.medium.com/jobs-deltafi-280dd54f82de";
export const PRIVACY_LINK = "/privacy";
export const TOKENOMICS_LINK = "/tokenomics";

export const menuItems = [
  {
    text: "Blog",
    children: [
      {
        text: "Medium",
        to: BLOG_LINK,
      },
      {
        text: "Token",
        to: TOKENOMICS_LINK,
      },
    ],
  },
  {
    text: "Community",
    children: [
      {
        text: "Twitter",
        to: TWITTER_LINK,
      },
      {
        text: "Discord",
        to: DISCORD_LINK,
      },
      {
        text: "Telegram",
        to: TELEGRAM_LINK,
      },
    ],
  },
  {
    text: "Resources",
    children: [
      {
        text: "Github",
        to: GITHUB_LINK,
      },
    ],
  },
  { text: "Whitepaper", to: WHITE_PAPER },
];
