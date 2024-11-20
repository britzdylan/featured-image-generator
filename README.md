# OG Image Generator

A modern, customizable Open Graph image generator for your blog posts and content. Create stunning social media previews with three distinct themes.

🔗 [Live Demo](https://og-images.dylanbritz.dev/)

![Project Banner showing the three different themes](https://og-images.dylanbritz.dev/?title=OG%20Image%20Generator&subtitle=Create%20stunning%20social%20media%20previews&category=OPEN%20SOURCE&download=false)

## Features

- 🎨 Three unique themes:

  - Tech - Modern with curved gradient lines
  - Cyberpunk - Edgy with pixel art aesthetics
  - Geometric - Clean with hexagonal patterns

- ✨ Real-time preview
- 🔄 Dynamic text updates
- 📥 One-click PNG downloads
- 🌐 URL parameter support
- 📱 Responsive design
- 🎯 Optimized for social media

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/og-image-generator.git

# Install dependencies
cd og-image-generator
npm install

# Start development server
npm run dev
```

### Usage

#### Web Interface

1. Visit [og-images.dylanbritz.dev](https://og-images.dylanbritz.dev/)
2. Choose a theme
3. Enter your content
4. Click download

#### URL Parameters

Generate images directly via URL:

```
https://og-images.dylanbritz.dev/?title=Your%20Title&subtitle=Your%20Subtitle&category=CATEGORY&download=true
```

Parameters:

- `title`: Main heading text
- `subtitle`: Secondary text
- `category`: Tag text
- `download`: Set to 'true' to trigger automatic download

## Tech Stack

- ⚡️ Vite
- ⚛️ React
- 🎨 TailwindCSS
- 📸 html-to-image

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Customization

### Adding New Themes

1. Create a new component in `src/themes`
2. Follow the existing theme structure
3. Add to the theme selector in `ImageEditor`

### Modifying Existing Themes

Each theme consists of:

- Background gradients
- Grid/pattern overlays
- Text styling
- Layout structure

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by modern tech landing pages
- Built with React and Tailwind CSS

## Author

[Dylan Britz](https://github.com/britzdylan)

## Support

- Star the repo
- Report issues
- Submit PRs
- Share with others

---

Made by [Dylan Britz](https://dylanbritz.dev/)
