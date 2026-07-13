import Image from 'next/image';

interface LogoProps {
  variant?: 'icon' | 'wordmark' | 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'wordmark', size = 'md', className = '' }: LogoProps) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const logoPaths = {
    icon: '/logos/icon-mark.svg',
    wordmark: '/logos/wordmark.svg',
    horizontal: '/logos/horizontal-lockup.svg',
    stacked: '/logos/stacked-lockup.svg',
  };

  const alt = {
    icon: 'CodePay Logo Icon',
    wordmark: 'CodePay Wordmark',
    horizontal: 'CodePay Logo Horizontal',
    stacked: 'CodePay Logo Stacked',
  };

  // For icon only, use size mapping
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${className}`}
        aria-label={alt.icon}
      >
        <circle cx="128" cy="128" r="90" fill="#3d81b4" />
        <circle cx="128" cy="128" r="55" fill="white" />
        <circle cx="128" cy="37" r="14" fill="#14b8a6" />
        <circle cx="211" cy="128" r="12" fill="#14b8a6" />
        <circle cx="128" cy="219" r="10" fill="#14b8a6" opacity="0.8" />
        <line
          x1="135"
          y1="47"
          x2="205"
          y2="115"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.25"
          strokeLinecap="round"
        />
        <line
          x1="205"
          y1="140"
          x2="140"
          y2="210"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // For wordmark - professional typography
  if (variant === 'wordmark') {
    return (
      <svg
        viewBox="0 0 390 80"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto ${className}`}
        aria-label={alt.wordmark}
        preserveAspectRatio="xMinYMid meet"
      >
        <text
          x="4"
          y="62"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif"
          fontSize="68"
          fontWeight="700"
          fill="#000"
          letterSpacing="-2"
          textAnchor="start"
        >
          CodePay
        </text>
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <svg
        viewBox="0 0 500 120"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        style={{ height: 'auto' }}
        aria-label={alt.horizontal}
      >
        <g id="icon">
          <circle cx="60" cy="60" r="40" fill="#3d81b4" />
          <circle cx="60" cy="60" r="25" fill="white" />
          <circle cx="60" cy="27" r="8" fill="#14b8a6" />
          <circle cx="92" cy="60" r="6" fill="#14b8a6" />
          <circle cx="62" cy="90" r="5" fill="#14b8a6" opacity="0.8" />
          <line
            x1="65"
            y1="32"
            x2="88"
            y2="56"
            stroke="#14b8a6"
            strokeWidth="1.5"
            opacity="0.25"
            strokeLinecap="round"
          />
          <line
            x1="88"
            y1="62"
            x2="66"
            y2="87"
            stroke="#14b8a6"
            strokeWidth="1.5"
            opacity="0.2"
            strokeLinecap="round"
          />
        </g>
        <text
          x="120"
          y="75"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="42"
          fontWeight="700"
          fill="#0f2849"
        >
          CodePay
        </text>
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <svg
        viewBox="0 0 300 280"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        style={{ height: 'auto' }}
        aria-label={alt.stacked}
      >
        <g id="icon">
          <circle cx="150" cy="70" r="50" fill="#3d81b4" />
          <circle cx="150" cy="70" r="30" fill="white" />
          <circle cx="150" cy="25" r="9" fill="#14b8a6" />
          <circle cx="200" cy="70" r="9" fill="#14b8a6" />
          <circle cx="153" cy="115" r="7" fill="#14b8a6" opacity="0.8" />
          <line
            x1="158"
            y1="32"
            x2="195"
            y2="65"
            stroke="#14b8a6"
            strokeWidth="1.5"
            opacity="0.25"
            strokeLinecap="round"
          />
          <line
            x1="195"
            y1="75"
            x2="162"
            y2="110"
            stroke="#14b8a6"
            strokeWidth="1.5"
            opacity="0.2"
            strokeLinecap="round"
          />
        </g>
        <text
          x="50"
          y="180"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="32"
          fontWeight="700"
          fill="#0f2849"
        >
          CodePay
        </text>
        <text
          x="30"
          y="205"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="11"
          fontWeight="400"
          fill="#3d81b4"
        >
          Africa&apos;s Fintech Infrastructure
        </text>
      </svg>
    );
  }

  return null;
}
