import React from 'react';

/**
 * Color Usage Examples
 * 
 * This file demonstrates all the different ways you can use colors in your application.
 * You can now use semantic color names like "PrimaryColor" in multiple ways.
 */

const ColorUsageExamples: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold color-text">Color Usage Examples</h1>
      
      {/* Method 1: Using Tailwind's built-in color system with our custom colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 1: Tailwind Color Classes</h2>
        <div className="space-y-2">
          <p className="text-PrimaryColor">Primary Color Text (using semantic name)</p>
          <p className="text-PrimaryColorLight">Primary Color Light Text</p>
          <p className="text-PrimaryColorDark">Primary Color Dark Text</p>
          <p className="text-SecondaryColor">Secondary Color Text</p>
          <p className="text-AccentColor">Accent Color Text</p>
          <p className="text-SuccessColor">Success Color Text</p>
          <p className="text-WarningColor">Warning Color Text</p>
          <p className="text-ErrorColor">Error Color Text</p>
        </div>
      </section>

      {/* Method 2: Using CSS custom properties directly */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 2: CSS Custom Properties</h2>
        <div className="space-y-2">
          <p className="color-primary">Primary Color Text</p>
          <p className="color-primary-light">Primary Light Text</p>
          <p className="color-primary-dark">Primary Dark Text</p>
          <p className="color-secondary">Secondary Color Text</p>
          <p className="color-accent">Accent Color Text</p>
          <p className="color-success">Success Color Text</p>
          <p className="color-warning">Warning Color Text</p>
          <p className="color-error">Error Color Text</p>
        </div>
      </section>

      {/* Method 3: Background colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 3: Background Colors</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-PrimaryColor text-white p-4 rounded">Primary Background</div>
          <div className="bg-PrimaryColorLight text-white p-4 rounded">Primary Light Background</div>
          <div className="bg-PrimaryColorDark text-white p-4 rounded">Primary Dark Background</div>
          <div className="bg-SecondaryColor text-white p-4 rounded">Secondary Background</div>
          <div className="bg-AccentColor text-white p-4 rounded">Accent Background</div>
          <div className="bg-SuccessColor text-white p-4 rounded">Success Background</div>
        </div>
      </section>

      {/* Method 4: Using CSS custom properties for backgrounds */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 4: CSS Custom Properties Backgrounds</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary text-white p-4 rounded">Primary Background</div>
          <div className="bg-primary-light text-white p-4 rounded">Primary Light Background</div>
          <div className="bg-primary-dark text-white p-4 rounded">Primary Dark Background</div>
          <div className="bg-secondary text-white p-4 rounded">Secondary Background</div>
          <div className="bg-surface color-text p-4 rounded border border-default">Surface Background</div>
          <div className="bg-background color-text p-4 rounded border border-default">Background Color</div>
        </div>
      </section>

      {/* Method 5: Border colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 5: Border Colors</h2>
        <div className="space-y-2">
          <div className="border-2 border-PrimaryColor p-4 rounded">Primary Border</div>
          <div className="border-2 border-PrimaryColorLight p-4 rounded">Primary Light Border</div>
          <div className="border-2 border-PrimaryColorDark p-4 rounded">Primary Dark Border</div>
          <div className="border-2 border-SecondaryColor p-4 rounded">Secondary Border</div>
          <div className="border-2 border-AccentColor p-4 rounded">Accent Border</div>
        </div>
      </section>

      {/* Method 6: Using CSS custom properties for borders */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 6: CSS Custom Properties Borders</h2>
        <div className="space-y-2">
          <div className="border-2 border-primary p-4 rounded">Primary Border</div>
          <div className="border-2 border-secondary p-4 rounded">Secondary Border</div>
          <div className="border-2 border-default p-4 rounded">Default Border</div>
        </div>
      </section>

      {/* Method 7: Hover states */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 7: Hover States</h2>
        <div className="space-y-2">
          <button className="bg-PrimaryColor hover:bg-PrimaryColorDark text-white px-4 py-2 rounded transition-colors">
            Primary Button
          </button>
          <button className="bg-SecondaryColor hover:bg-SecondaryColorDark text-white px-4 py-2 rounded transition-colors">
            Secondary Button
          </button>
          <button className="bg-AccentColor hover:bg-AccentColorDark text-white px-4 py-2 rounded transition-colors">
            Accent Button
          </button>
        </div>
      </section>

      {/* Method 8: Using the color palette with different shades */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 8: Color Palette Shades</h2>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-primary-50 p-2 rounded text-xs">50</div>
          <div className="bg-primary-100 p-2 rounded text-xs">100</div>
          <div className="bg-primary-200 p-2 rounded text-xs">200</div>
          <div className="bg-primary-300 p-2 rounded text-xs">300</div>
          <div className="bg-primary-400 p-2 rounded text-xs">400</div>
          <div className="bg-primary-500 p-2 rounded text-xs text-white">500</div>
          <div className="bg-primary-600 p-2 rounded text-xs text-white">600</div>
          <div className="bg-primary-700 p-2 rounded text-xs text-white">700</div>
          <div className="bg-primary-800 p-2 rounded text-xs text-white">800</div>
          <div className="bg-primary-900 p-2 rounded text-xs text-white">900</div>
        </div>
      </section>

      {/* Method 9: Dynamic color switching example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold color-primary">Method 9: Dynamic Color Switching</h2>
        <p className="color-text-light">
          Colors automatically adapt to dark mode using CSS custom properties.
          Try switching your system theme to see the colors change!
        </p>
        <div className="bg-surface color-text p-4 rounded border border-default">
          This surface adapts to light/dark mode automatically
        </div>
      </section>
    </div>
  );
};

export default ColorUsageExamples;
