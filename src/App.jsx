// src/App.jsx
import React from 'react';
import { toPng } from 'html-to-image';

const ImageEditor = () => {
  const [title, setTitle] = React.useState('Blog Post Title');
  const [subtitle, setSubtitle] = React.useState('Subtitle goes here');
  const [category, setCategory] = React.useState('FEATURED');
  const [theme, setTheme] = React.useState('cyber'); // 'cyber', 'geometric', or 'tech'

  const handleDownload = async () => {
    try {
      const element = document.getElementById('feature-image');
      if (element) {
        const dataUrl = await toPng(element, {
          width: 800,
          height: 400,
          style: {
            transform: 'scale(1)',
            transformOrigin: 'top left',
          },
        });

        const link = document.createElement('a');
        link.download = `${title
          .toLowerCase()
          .replace(/\s+/g, '-')}-featured.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  const ImageComponent = {
    cyber: CyberpunkFeatureImage,
    geometric: GeometricFeatureImage,
    tech: FeatureImage,
  }[theme];

  return (
    <div className='min-h-screen p-8 bg-gray-900'>
      {/* Editor Controls */}
      <div className='max-w-[800px] mx-auto space-y-6 bg-gray-800 p-6 rounded-lg'>
        <div className='space-y-4'>
          <label className='block'>
            <span className='block mb-1 text-white'>Theme</span>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className='w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500'>
              <option value='cyber'>Cyberpunk</option>
              <option value='geometric'>Geometric</option>
              <option value='tech'>Tech</option>
            </select>
          </label>

          <label className='block'>
            <span className='block mb-1 text-white'>Title</span>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              placeholder='Enter title'
            />
          </label>

          <label className='block'>
            <span className='block mb-1 text-white'>Subtitle</span>
            <input
              type='text'
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className='w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              placeholder='Enter subtitle'
            />
          </label>

          <label className='block'>
            <span className='block mb-1 text-white'>Category</span>
            <input
              type='text'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              placeholder='Enter category'
            />
          </label>
        </div>

        <button
          onClick={handleDownload}
          className='w-full px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700'>
          Download Image
        </button>
      </div>

      {/* Preview */}
      <div className='preview-container'>
        <ImageComponent title={title} subtitle={subtitle} category={category} />
      </div>
    </div>
  );
};

// Variation 1: Modern Geometric
const GeometricFeatureImage = ({ title, subtitle, category }) => {
  const GeometricBackground = () => (
    <div className='absolute inset-0'>
      <div
        className={`absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full blur-3xl bg-emerald-500/20`}
      />
      <div
        className={`absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full blur-3xl bg-amber-500/20`}
      />
      <div
        className={`absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full blur-3xl bg-rose-500/20`}
      />
    </div>
  );

  const GeometricGrid = () => (
    <svg
      className='absolute inset-0 w-full h-full'
      xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern
          id='hexDot'
          width='30'
          height='30'
          patternUnits='userSpaceOnUse'
          patternTransform='rotate(30)'>
          <circle cx='15' cy='15' r='1' fill='rgba(255,255,255,0.09)' />
        </pattern>
        <linearGradient id='geoGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='rgba(255,255,255,0)' />
          <stop offset='50%' stopColor='rgba(255,255,255,0.15)' />
          <stop offset='100%' stopColor='rgba(255,255,255,0)' />
        </linearGradient>
      </defs>

      <rect width='100%' height='100%' fill='url(#hexDot)' />

      {/* Geometric lines */}
      <path d='M 600,0 L 800,200' stroke='url(#geoGradient)' strokeWidth='1' />
      <path d='M 650,0 L 800,150' stroke='url(#geoGradient)' strokeWidth='1' />
      <path d='M 700,0 L 800,100' stroke='url(#geoGradient)' strokeWidth='1' />
      <path
        d='M 600,400 L 800,200'
        stroke='url(#geoGradient)'
        strokeWidth='1'
      />
      <path
        d='M 650,400 L 800,250'
        stroke='url(#geoGradient)'
        strokeWidth='1'
      />
      <path
        d='M 700,400 L 800,300'
        stroke='url(#geoGradient)'
        strokeWidth='1'
      />
    </svg>
  );

  return (
    <div className='flex items-center justify-center p-4 bg-gray-900'>
      <div
        id='feature-image'
        className='w-[800px] h-[400px] relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 shadow-2xl rounded-lg'>
        <GeometricBackground />
        <GeometricGrid />

        <div className='relative flex flex-col justify-between h-full p-12'>
          <div className='space-y-6'>
            <div className='inline-flex'>
              <span className='px-3 py-1.5 text-sm font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-emerald-500 to-emerald-600'>
                {category}
              </span>
            </div>

            <h1 className='max-w-2xl text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-200'>
              {title}
            </h1>
          </div>

          <div>
            <p className='text-xl text-gray-300/90'>{subtitle}</p>
          </div>
        </div>

        <div className='absolute inset-0 border rounded-lg pointer-events-none border-white/10' />
      </div>
    </div>
  );
};

// Variation 2: Cyberpunk Style
const CyberpunkFeatureImage = ({ title, subtitle, category }) => {
  const CyberBackground = () => (
    <div className='absolute inset-0'>
      <div
        className={`absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full blur-3xl bg-fuchsia-500/20`}
      />
      <div
        className={`absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full blur-3xl bg-yellow-500/20`}
      />
      <div
        className={`absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full blur-3xl bg-sky-500/20`}
      />
    </div>
  );

  const CyberGrid = () => (
    <svg
      className='absolute inset-0 w-full h-full'
      xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern
          id='pixelDot'
          width='15'
          height='15'
          patternUnits='userSpaceOnUse'>
          <rect width='1' height='1' fill='rgba(255,255,255,0.12)' />
        </pattern>
        <linearGradient id='cyberGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='rgba(255,255,255,0)' />
          <stop offset='50%' stopColor='rgba(255,255,255,0.25)' />
          <stop offset='100%' stopColor='rgba(255,255,255,0)' />
        </linearGradient>
      </defs>

      <rect width='100%' height='100%' fill='url(#pixelDot)' />

      {/* Cyber grid lines */}
      <line
        x1='550'
        y1='0'
        x2='550'
        y2='400'
        stroke='rgba(255,255,255,0.1)'
        strokeWidth='1'
      />
      <line
        x1='650'
        y1='0'
        x2='650'
        y2='400'
        stroke='rgba(255,255,255,0.1)'
        strokeWidth='1'
      />
      <line
        x1='750'
        y1='0'
        x2='750'
        y2='400'
        stroke='rgba(255,255,255,0.1)'
        strokeWidth='1'
      />

      {/* Glitch effect lines */}
      <path
        d='M 500,150 L 800,150'
        stroke='url(#cyberGradient)'
        strokeWidth='2'
        strokeDasharray='1 8'
      />
      <path
        d='M 400,250 L 800,250'
        stroke='url(#cyberGradient)'
        strokeWidth='2'
        strokeDasharray='8 4'
      />
      <path
        d='M 300,350 L 800,350'
        stroke='url(#cyberGradient)'
        strokeWidth='2'
        strokeDasharray='4 12'
      />
    </svg>
  );

  return (
    <div className='flex items-center justify-center p-4 bg-gray-900'>
      <div
        id='feature-image'
        className='w-[800px] h-[400px] relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 shadow-2xl rounded-none'>
        <CyberBackground />
        <CyberGrid />

        <div className='relative flex flex-col justify-between h-full p-12'>
          <div className='space-y-6'>
            <div className='inline-flex'>
              <span className='px-4 py-1 text-sm font-bold text-white bg-transparent border shadow-lg border-fuchsia-500/50'>
                {category}
              </span>
            </div>

            <h1 className='max-w-2xl text-5xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-100 via-white to-sky-100'>
              {title}
            </h1>
          </div>

          <div>
            <p className='text-xl font-light tracking-wide text-gray-300/90'>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Corner accents */}
        <div className='absolute top-0 right-0 w-20 h-1 bg-fuchsia-500/50' />
        <div className='absolute top-0 right-0 w-1 h-20 bg-fuchsia-500/50' />
        <div className='absolute bottom-0 left-0 w-20 h-1 bg-sky-500/50' />
        <div className='absolute bottom-0 left-0 w-1 h-20 bg-sky-500/50' />
      </div>
    </div>
  );
};

const FeatureImage = ({ title, subtitle, category }) => {
  const BackgroundGradients = () => {
    return (
      <div className='absolute inset-0'>
        <div
          className={`absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/20`}
        />
        <div
          className={`absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full blur-3xl bg-purple-500/20`}
        />
        <div
          className={`absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full blur-3xl bg-cyan-500/20`}
        />
      </div>
    );
  };

  const TechGrid = () => (
    <svg
      className='absolute inset-0 w-full h-full'
      xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern
          id='smallDot'
          width='20'
          height='20'
          patternUnits='userSpaceOnUse'>
          <circle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.09)' />
        </pattern>

        <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='rgba(255,255,255,0)' />
          <stop offset='50%' stopColor='rgba(255,255,255,0.2)' />
          <stop offset='100%' stopColor='rgba(255,255,255,0.05)' />
        </linearGradient>
      </defs>

      <rect width='100%' height='100%' fill='url(#smallDot)' />

      <path
        d='M 300,200 Q 400,180 500,200 T 700,200'
        stroke='url(#lineGradient)'
        strokeWidth='1'
        fill='none'
        strokeDasharray='5 5'
      />

      <path
        d='M 250,150 Q 400,120 550,150 T 750,150'
        stroke='url(#lineGradient)'
        strokeWidth='1'
        fill='none'
        strokeDasharray='5 5'
      />

      <path
        d='M 200,250 Q 400,220 600,250 T 800,250'
        stroke='url(#lineGradient)'
        strokeWidth='1'
        fill='none'
        strokeDasharray='5 5'
      />
    </svg>
  );
  return (
    <div className='flex items-center justify-center p-4 bg-gray-900'>
      <div
        id='feature-image'
        className='w-[800px] h-[400px] relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl rounded-lg'>
        {/* Dynamic background gradients */}
        <BackgroundGradients />

        {/* Tech grid */}
        <TechGrid />

        {/* Content container */}
        <div className='relative flex flex-col justify-between h-full p-12'>
          <div className='space-y-6'>
            <div className='inline-flex'>
              <span className='px-2.5 py-1 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-blue-600'>
                {category}
              </span>
            </div>

            <h1 className='max-w-2xl text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100'>
              {title}
            </h1>
          </div>

          <div>
            <p className='text-xl text-gray-300/90'>{subtitle}</p>
          </div>
        </div>

        <div className='absolute inset-0 border rounded-lg pointer-events-none border-white/5' />
      </div>
    </div>
  );
};

export default ImageEditor;
