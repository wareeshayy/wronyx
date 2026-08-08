import './globals.css';
import RagChatbot from '../components/RagChatbot';
import MotionLayer from '../components/MotionLayer';
import SignalMarquee from '../components/SignalMarquee';

export const metadata = {
  title: 'WRONYX | Next-Gen AI Solutions & Agentic Enterprise Intelligence',
  description: 'WRONYX delivers cutting-edge autonomous AI agents, enterprise knowledge graphs, and predictive intelligence architectures. Innovate. Connect. Lead.',
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: '64x64', type: 'image/x-icon' },
      { url: '/assets/favicon.png', sizes: '128x128', type: 'image/png' },
      { url: '/assets/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [{ url: '/assets/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <canvas id="bg-canvas"></canvas>
        <MotionLayer />
        {children}
        <SignalMarquee label="WRONYX intelligence in motion" />
        <RagChatbot />
      </body>
    </html>
  );
}
