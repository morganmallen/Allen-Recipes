# Color System Documentation

This directory contains the color configuration for the application, providing a comprehensive and flexible color system that supports semantic naming, dark mode, and dynamic color switching.

## Files

- `colors.ts` - Main color configuration with semantic color definitions
- `README.md` - This documentation file

## Usage Methods

### Method 1: Semantic Color Names (Recommended)
Use semantic color names directly in Tailwind classes:

```tsx
// Text colors
<p className="text-PrimaryColor">Primary text</p>
<p className="text-SecondaryColor">Secondary text</p>
<p className="text-AccentColor">Accent text</p>

// Background colors
<div className="bg-PrimaryColor">Primary background</div>
<div className="bg-SecondaryColor">Secondary background</div>

// Border colors
<div className="border-PrimaryColor">Primary border</div>
```

### Method 2: CSS Custom Properties
Use CSS custom properties for dynamic color switching:

```tsx
// Text colors
<p className="color-primary">Primary text</p>
<p className="color-secondary">Secondary text</p>

// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-surface">Surface background</div>

// Border colors
<div className="border-primary">Primary border</div>
```

### Method 3: Color Palette Shades
Use the full color palette with different shades:

```tsx
// Different shades of primary color
<div className="bg-primary-50">Lightest primary</div>
<div className="bg-primary-500">Main primary</div>
<div className="bg-primary-900">Darkest primary</div>
```

## Available Colors

### Semantic Colors
- `PrimaryColor` / `PrimaryColorLight` / `PrimaryColorDark`
- `SecondaryColor` / `SecondaryColorLight` / `SecondaryColorDark`
- `AccentColor` / `AccentColorLight` / `AccentColorDark`
- `SuccessColor`
- `WarningColor`
- `ErrorColor`
- `BackgroundColor`
- `SurfaceColor`
- `TextColor` / `TextColorLight`
- `BorderColor`

### Color Palettes
Each color has a full palette with shades from 50-950:
- `primary` (blue tones)
- `secondary` (gray tones)
- `accent` (red tones)
- `success` (green tones)
- `warning` (yellow tones)
- `error` (red tones)
- `neutral` (gray tones)

## Dark Mode Support

The color system automatically supports dark mode through CSS custom properties. Colors will automatically adapt when the user's system is in dark mode.

## Customization

To modify colors:

1. **Update the color values** in `colors.ts`
2. **Update CSS custom properties** in `index.css` if using Method 2
3. **Restart your development server** to see changes

## Examples

See `src/examples/ColorUsageExamples.tsx` for comprehensive usage examples of all methods.

## Best Practices

1. **Use semantic names** (`PrimaryColor`) for consistent branding
2. **Use CSS custom properties** (`color-primary`) for dynamic theming
3. **Use color palettes** (`primary-500`) for fine-grained control
4. **Test in both light and dark modes** to ensure accessibility
5. **Maintain contrast ratios** for accessibility compliance
