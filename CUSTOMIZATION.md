# Portfolio Customization Guide

This is a static portfolio site ready for GitHub hosting. Here's how to customize it with your own links, information, and images.

## Customizing Images

All portfolio and hero images are stored in `/public/` directory. Replace them with your own:

### Portfolio Images
Located in `/public/portfolio/`:
- `commercial.png` - Commercial/advertising project thumbnail
- `music-video.png` - Music video project thumbnail
- `documentary.png` - Documentary project thumbnail
- `wedding.png` - Wedding project thumbnail
- `short-film.png` - Short film project thumbnail
- `social.png` - Social media content thumbnail

**How to replace:**
1. Create your own thumbnail images (aspect ratio 4:3 recommended, min 600x450px)
2. Save as PNG files
3. Replace the files in `/public/portfolio/` with the same names
4. The site will automatically use your new images

### Hero Section Image
Located in `/public/`:
- `editor-portrait.png` - Your profile/editor portrait for the About section

**How to replace:**
1. Take a portrait photo or screenshot
2. Save as PNG file
3. Replace `/public/editor-portrait.png` with your image
4. Recommended size: 600x600px or similar square aspect ratio

### Tips for Best Results
- Keep all images in PNG format for consistency
- Use high-quality images (at least 600px width minimum)
- Portfolio thumbnails should be 4:3 aspect ratio
- Keep file sizes under 500KB for fast loading
- Use descriptive alt text in filenames for SEO

## Updating Social Links

Edit `/components/sections/contact.tsx`:

```typescript
const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/yourprofile',  // Add your Instagram URL
    icon: '📷',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/yourphone',  // Replace with your WhatsApp phone number
    icon: '💬',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',  // Add your LinkedIn URL
    icon: '💼',
  },
]
```

## Updating Contact Information

In the same file (`/components/sections/contact.tsx`):

- **Email**: Update the `mailto:` link with your email
- **WhatsApp**: Update the WhatsApp link with your phone number (format: +1234567890)
- **Location**: Change "Los Angeles — Working Worldwide" to your location

## Adding Portfolio Video Links

Edit `/components/sections/portfolio.tsx` and update each project's `videoUrl`:

```typescript
const projects: Project[] = [
  {
    title: 'Aurora Skincare',
    category: 'Commercial',
    tag: '60s Spot',
    image: '/portfolio/commercial.png',
    videoUrl: 'https://youtu.be/your-video-id',  // Replace with your YouTube link
  },
  // ... other projects
]
```

You can use:
- YouTube links: `https://youtu.be/video-id` or `https://www.youtube.com/watch?v=video-id`
- Vimeo links: `https://vimeo.com/video-id`
- Google Drive: Shared video links
- Any video hosting platform's shareable link

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Click Save

Your site will be live at: `https://your-username.github.io/your-repo-name/`

## File Structure

```
/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Theme & styles (black/orange/white)
├── components/
│   ├── sections/         # Each section component
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── portfolio.tsx  # ← Update video links here
│   │   ├── services.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   └── contact.tsx    # ← Update social & contact info here
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   └── reveal.tsx
└── public/
    ├── portfolio/        # Portfolio images (6 thumbnail images)
    │   ├── commercial.png
    │   ├── music-video.png
    │   ├── documentary.png
    │   ├── wedding.png
    │   ├── short-film.png
    │   └── social.png
    └── editor-portrait.png
```

## Features

✅ Dark theme (black background with orange accents)  
✅ All links are clickable and external  
✅ Smooth scroll animations  
✅ Fully static - no backend required  
✅ Mobile responsive  
✅ Fast loading  
✅ Easily customizable images and links
