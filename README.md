# Social Media Caption Generator

An AI-powered web application that generates engaging, contextual captions for social media posts across Instagram, Twitter, LinkedIn, TikTok, and Facebook.

## 🚀 Features

- **AI-Powered Generation**: Create engaging captions in seconds
- **Multi-Platform Support**: Optimized for Instagram, Twitter, LinkedIn, TikTok, and Facebook
- **Customization Options**: Choose tone, length, and style preferences
- **Smart Hashtags**: AI-generated relevant hashtags for better discoverability
- **Emoji Integration**: Contextual emoji suggestions
- **Responsive Design**: Mobile-first, minimalist interface
- **Real-time Character Counting**: Platform-specific limits and recommendations

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **UI Components**: Custom design system

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd social-media-caption-generator
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

### 4. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── generate/          # Caption generation page
│       └── page.tsx
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features showcase
│   ├── Footer.tsx        # Footer component
│   └── CaptionGenerator.tsx # Main caption generator
├── stores/               # State management
│   └── captionStore.ts   # Zustand store
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎯 Core Components

### CaptionGenerator
The main component that handles:
- Content input (text, image, URL)
- Platform and style customization
- AI caption generation
- Results display and management

### CaptionStore (Zustand)
State management for:
- User inputs and preferences
- Generated captions
- Generation status and history
- User interactions (favorites, copying)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for API keys and configuration:

```env
# AI API Configuration (for production)
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key

# Database (for production)
DATABASE_URL=your_database_url

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Tailwind CSS
The project uses Tailwind CSS with custom design tokens:
- Primary colors: Blue gradient
- Secondary colors: Purple gradient
- Custom animations and transitions
- Responsive breakpoints

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🔮 Future Enhancements

### Phase 2 (Weeks 5-8)
- [ ] User authentication and accounts
- [ ] Generation history and favorites
- [ ] Image upload and analysis
- [ ] Freemium model implementation

### Phase 3 (Weeks 9-12)
- [ ] Brand voice profiles
- [ ] Bulk generation capabilities
- [ ] A/B testing suggestions
- [ ] Advanced analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Icons from Lucide React
- State management with Zustand

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Email: support@captionai.com
- Documentation: [docs.captionai.com](https://docs.captionai.com)

---

**Built with ❤️ for content creators and social media managers**
