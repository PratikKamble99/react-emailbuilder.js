# React Email Editor

A powerful, customizable email template editor built with React and Material-UI. This package provides a user-friendly interface for creating and managing responsive email templates with a drag-and-drop builder.

## Features

- Intuitive drag-and-drop interface
- Built with Material-UI v5 for a polished look
- Real-time preview of email templates
- Responsive design that works on all devices
- Customizable components and styling
- Save and export functionality
- Extensible architecture for adding custom blocks

## Installation

```bash
npm install react-email-editor
# or
yarn add react-email-editor
```

## Usage

```jsx
import React from 'react';
import EmailTemplateEditor from 'react-email-editor';

function App() {
  const handleSave = (template) => {
    console.log('Template saved:', template);
    // Handle the saved template (save to database, etc.)
  };

  return (
    <div style={{ height: '100vh' }}>
      <EmailTemplateEditor 
        onSave={handleSave}
        enableSampleDrawer={true}
      />
    </div>
  );
}

export default App;
```

## Development

This project is built as a wrapper around [EmailBuilder.js](https://github.com/usewaypoint/email-builder-js), providing a more React-friendly interface and additional features.

### Prerequisites

- Node.js 16+
- npm or yarn

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🔌 Available Blocks

- Text
- Image
- Button
- Divider
- Spacer
- Heading
- HTML
- Avatar
- And more...

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Credits

This project is built on top of [EmailBuilder.js](https://github.com/usewaypoint/email-builder-js) by UseWaypoint.
