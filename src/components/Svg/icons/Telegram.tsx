import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

interface TelegramProps extends SvgProps {
  isDark: boolean
}

const Icon: React.FC<TelegramProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? '#FFFFFF' : '#000000'
  return (
    <Svg viewBox="0 0 50 49" {...props}>
      <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.279297 16.9301C0.279297 8.13216 7.41146 1 16.2094 1C25.0074 1 32.1396 8.13216 32.1396 16.9301C32.1396 25.7281 25.0074 32.8603 16.2094 32.8603C7.41146 32.8603 0.279297 25.7281 0.279297 16.9301Z" stroke="url(#paint0_linear_211_9966)" stroke-width="0.5"/>
      <path d="M22.8716 11.4389L20.4676 22.7759C20.2862 23.576 19.8133 23.7752 19.1412 23.3982L15.4783 20.6991L13.7109 22.3989C13.5153 22.5945 13.3517 22.7581 12.9748 22.7581L13.2379 19.0277L20.0266 12.8933C20.3218 12.6302 19.9626 12.4844 19.5679 12.7475L11.1754 18.032L7.56233 16.9011C6.77642 16.6558 6.7622 16.1152 7.72591 15.7383L21.8581 10.2938C22.5124 10.0484 23.0849 10.4396 22.8716 11.4389Z" fill="url(#paint1_linear_211_9966)"/>
      <defs>
      <linearGradient id="paint0_linear_211_9966" x1="-1.81389" y1="32.8603" x2="33.002" y2="6.33958" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1AFA9A"/>
      <stop offset="0.53125" stop-color="#478EF0"/>
      <stop offset="0.990948" stop-color="#9945FD"/>
      </linearGradient>
      <linearGradient id="paint1_linear_211_9966" x1="5.94022" y1="23.5823" x2="21.0135" y2="9.89126" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1AFA9A"/>
      <stop offset="0.53125" stop-color="#478EF0"/>
      <stop offset="0.990948" stop-color="#9945FD"/>
      </linearGradient>
      </defs>
      </svg>
    </Svg>
  )
}

export default Icon
