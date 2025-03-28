# React Application

## Project Overview
This project is a modern React application built with Vite. It includes various components for a structured UI, utilities for optimized performance, and type definitions for TypeScript support.

## Project Structure
```
src/
├─ assets/            # Static assets like images
│  └─ react.svg
├─ components/        # Reusable UI components
│  ├─ ContactForm.tsx  # Contact form component
│  ├─ Hero.tsx         # Hero section component
│  ├─ Pricing.tsx      # Pricing section component
│  ├─ PricingModal.tsx # Pricing modal component
│  ├─ Services.tsx     # Services section component
│  └─ UserSearch.tsx   # User search component (lazy loaded)

├─ types/            # TypeScript type definitions
│  └─ index.ts
├─ utils/            # Utility functions
│  ├─ debounce.ts      # Debounce utility to optimize function calls
│  └─ searchUtils.ts   # Search utilities using Trie data structure
├─ App.css           # Global styles
├─ App.tsx           # Main application component
├─ index.css         # Index styles
├─ main.tsx          # Entry point
└─ vite-env.d.ts     # Vite environment definitions
```

## Application Structure
###  - `main.tsx`: The entry point that mounts the React app.
 IT is the main /entry of the React application that is using app in it inside to render the react components

### APP.tsx  Main Entry point of application
 `App.tsx ` is the root component of the React application, responsible for rendering sections
The `App` component further child compnonets to
- `Hero`, `Services`, `Pricing`, `ContactForm`, `Navbar`
- `UserSearch` (Lazy loaded for performance)

## Key Features
### **1. Lazy Loading with Suspense**
```javascript
const UserSearch = React.lazy(() => import('./components/UserSearch'));
```
- Enhances performance by deferring loading.
- Wrapped in `Suspense` with a fallback UI.

### **2. Dynamic Navbar Background**
```javascript
const [isDarkBackground, setIsDarkBackground] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    const heroHeight = document.getElementById('hero')?.clientHeight || 0;
    setIsDarkBackground(window.scrollY > heroHeight);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
- Changes `Navbar` background when scrolling past `Hero`.
- Uses event listener cleanup for efficiency.

## Performance Optimizations
1. **Lazy Loading**: Reduces initial load time.
2. **Minimal Re-renders**: Optimized event handling.
3. **Smooth UI Transitions**: Ensures seamless navigation.

###  **Assets** (`src/assets/`)
   - Contains static assets like images and icons.

###  **Components** (`src/components/`)
   - Reusable UI components:
     - `Navbar.tsx` : navigating ac ross different pages
     - `Hero.tsx`: Displays the hero section.
     - `Services.tsx`: Showcases services.
     - `Pricing.tsx`: Displays pricing options.
     - `PricingModal.tsx`: A modal for pricing details.
     - `ContactForm.tsx`: A form for user inquiries.
     - `UserSearch.tsx`: Allows users to search (lazy-loaded for performance).
     

###  **Types** (`src/types/`)
   - TypeScript type definitions for better code maintainability.

###  **Utilities** (`src/utils/`)
   - Helper functions:
     - `debounce.ts`: Implements a debounce function to optimize performance.
     - `searchUtils.ts`: Contains a Trie-based search algorithm for efficient searching.

###  **Global Styles**
   - `App.css`: Contains global styles for the application.
   - `index.css`: Base styles for the project.


## Features
- **React & TypeScript:** Ensures type safety and scalability.
- **Vite:** Fast and optimized build process.
- **Lazy Loading:** `UserSearch` component is lazy-loaded to improve performance.
- **Trie-Based Search:** Efficient search implementation using a Trie data structure.
- **Debounce Functionality:** Optimized search experience using a debounce utility.
- **Responsive Design:** Components designed for a smooth UI experience.

## Installation
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/ihimanshusharma33/miniature-octo-fishstick.git
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173/`

## Usage
- The application consists of multiple sections: **Hero**, **Services**, **Pricing**, and **ContactForm**.
- Users can search using the **UserSearch** component, which is optimized for performance.
- The **PricingModal** component provides modal-based pricing details.


## Code Highlights
### Lazy Loading Example
```tsx
const UserSearch = React.lazy(() => import('./components/UserSearch'));
```
### Debounce Function
```tsx
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
```
### Trie Data Structure for Search
```tsx
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord = false;
  word = '';
}

export class Trie {
  root = new TrieNode();
  insert(word: string): void {
    let current = this.root;
    for (const char of word.toLowerCase()) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }
    current.isEndOfWord = true;
    current.word = word;
  }
}
```


## Author
Developed by **Himanshu Sharma**. 
