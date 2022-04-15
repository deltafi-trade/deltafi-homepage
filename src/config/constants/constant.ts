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
export const CERTIK_LINK = "";
export const SLOWMIST_LINK = "";
export const SUBMITBUG_LINK = "";


export const menuItems = [
  {
    text: "Home", to: HOMEPAGE_LINK
  },
  {
    text: "Token", to: TOKENOMICS_LINK
  },
  {
    id:"auditReport",
    text: "Audit Report",
    children: [
      {
        text: "Certik",
        to: CERTIK_LINK
      },
      {
        text: "SlowMist",
        to: SLOWMIST_LINK,
        targetBlank: true,
      }
    ]
  },
  {
    text: "Whitepaper",
    to: WHITE_PAPER,
    targetBlank: true,
  }
];
