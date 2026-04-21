# Coffee Brand Product Ad - 30 Second Video

A Remotion video composition for a professional 30-second product advertisement for a premium coffee brand.

## Features

- **Dark Theme with Orange Accents**: Professional dark background (#1a1a1a) with warm orange (#ff8c00) highlights
- **Animated Text Overlays**: Smooth fade-in and scale animations for title, subtitle, and tagline
- **Professional Typography**: Bold, modern font styling with proper hierarchy
- **Call-to-Action Button**: Animated "Order Now" button with shadow effects
- **Background Effects**: Subtle radial gradient accent for visual depth

## Project Structure

```
coffee-brand-ad/
├── src/
│   ├── index.ts          # Entry point
│   ├── CoffeeAd.tsx      # Composition configuration
│   └── MainVideo.tsx     # Main video component with animations
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Start Development Studio
```bash
npm start
```

This will open the Remotion Studio where you can preview and edit the video in real-time.

### Build the Video
```bash
npm run build
```

This renders the video to `out/video.mp4`.

## Video Specifications

- **Duration**: 30 seconds (900 frames at 30fps)
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps

## Animation Timeline

- **0-15 frames**: Title fade-in and scale animation
- **30-60 frames**: Subtitle fade-in with upward slide
- **600-650 frames**: Tagline fade-in
- **700-750 frames**: CTA button fade-in and scale

## Customization

You can easily customize:

- **Colors**: Modify the hex color codes in `MainVideo.tsx`
- **Text**: Change the brand name, subtitle, and tagline
- **Fonts**: Update font families and sizes
- **Animations**: Adjust frame timings and interpolation values
- **Duration**: Change `durationInFrames` in `CoffeeAd.tsx`

## Technologies

- [Remotion](https://www.remotion.dev/) - Video composition in React
- React 18+
- TypeScript

## Requirements

- Node.js 14+
- npm or yarn

## License

Proprietary - Coffee Brand Product
