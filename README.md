# EstatePro — Premium Real Estate Website Frontend

A modern, high-performance, and fully responsive **Real Estate Website Frontend Template** built using **HTML5, CSS3, and Vanilla JavaScript**. Designed for luxury brokerages, property portals, and commercial templates with zero external framework dependencies or build steps.

![EstatePro Preview](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Highlights & Key Features

### 1. Pure Vanilla Architecture
- **Zero build steps or package managers**: Runs directly by opening `index.html` in any modern web browser.
- **No Node.js, React, or Vue dependencies**: Ultra-lightweight, blazing fast load times, and effortless customization.

### 2. Polished Modern Design
- **Sophisticated Color Palette**: Clean white background (`#ffffff`), dark navy headings and body text (`#0b1a30`), and tasteful emerald green accents (`#059669` / `#10b981`).
- **Modern Typography**: High-legibility Google Font `Plus Jakarta Sans`.
- **Micro-Interactions**: Smooth card lift hover effects, image scaling, responsive mobile drawer, and animated toasts.
- **100% Mobile Responsive**: Tested and optimized across mobile phones, tablets, laptops, and ultra-wide desktops.

### 3. Comprehensive Multi-Page Experience
- **Home (`index.html`)**:
  - Sticky glassmorphism header with active page indicators and mobile slide-out drawer.
  - Hero section with interactive multi-parameter search bar (Location, Property Type, Min Price, Max Price).
  - Stats counter bar displaying transaction volume and client satisfaction.
  - Featured properties showcase (6 curated listings).
  - Buy, Rent, and Sell dedicated service cards.
  - "Why Choose Us" feature breakdown with experience badge.
  - Customer testimonial cards with 5-star ratings.
  - Call-to-action banner & professional 4-column footer.

- **Properties Catalog (`properties.html`)**:
  - Live filter engine by Keyword, Location, Property Type, Status (Buy/Rent), and Min/Max Price.
  - Real-time Sorting dropdown (Featured, Price: Low to High, Price: High to Low, Area: Largest).
  - Grid View & List View layout switcher with persistent preference in `localStorage`.
  - Dynamic result counter and friendly empty state with an instant "Reset All Filters" trigger.
  - Full support for URL query parameters from the homepage search bar (`?location=...&type=...`).

- **Property Details (`property-details.html`)**:
  - Interactive multi-image gallery with clickable thumbnail selectors.
  - Comprehensive architectural specifications (Bedrooms, Bathrooms, Sqft, Year Built, Garage, Type).
  - Complete amenities checklist with checkmark icons.
  - **Live Mortgage Calculator Widget**: Real-time monthly payment calculation based on home price, down payment %, interest rate %, and loan term.
  - Sticky agent contact card with direct phone, email, and rating.
  - Contact Agent form with client-side JavaScript validation (name, email, phone, message).
  - Interactive modal dialog confirming inquiry submission (frontend demo friendly).
  - "Similar Properties" recommendation carousel/grid.

- **About Us (`about.html`)**:
  - Company heritage and founding story.
  - Statistics overview ($2.4B+ volume, 1,450+ listings, 99.4% retention).
  - Guiding principles and core values cards.
  - Executive leadership and senior real estate advisors team grid with social links.

- **Contact & Inquiries (`contact.html`)**:
  - Headquarters address, direct telephone lines, concierge email, and office hours.
  - Interactive Contact Form with real-time field validation.
  - Interactive FAQ accordion with collapsible answers.
  - Location showcase card with direct directions link.

### 4. Interactive Favorites & LocalStorage System
- Users can click the heart icon on any property card across any page to save or unsave properties.
- Favorites count badge in the navigation bar automatically updates.
- Clicking the favorites icon opens a dedicated slide-over drawer displaying all saved properties with instant links to view or remove them.
- All saved selections persist between browser sessions via `localStorage`.

---

## 📁 Project Structure

```text
real-state/
│
├── index.html              # Home page with hero, search, featured homes, services & reviews
├── properties.html         # Properties catalog with live filtering, sorting & view toggles
├── property-details.html   # Rich property details with gallery, mortgage calc & agent form
├── about.html              # Company history, mission, values & executive team
├── contact.html            # Contact form, office hours, map mockup & FAQs accordion
├── privacy-policy.html     # Comprehensive real estate data privacy policy
├── terms-of-service.html   # Terms of service & Equal Housing Opportunity commitment
│
├── assets/
│   ├── css/
│   │   └── style.css       # Clean, modular CSS with design variables & responsive queries
│   ├── js/
│   │   └── main.js         # Complete vanilla JS dataset, filtering, favorites & validation
│   └── images/             # Local images directory
│
├── README.md               # Project documentation and guide
└── LICENSE.txt             # MIT License
```

---

## 🚀 How to Run the Website

Because EstatePro uses standard HTML5, CSS3, and JavaScript:

1. **Option 1: Direct File Opening (Fastest)**
   - Double-click `index.html` in your file explorer, or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

2. **Option 2: Using VS Code Live Server (Recommended for development)**
   - Open this folder in VS Code.
   - Right-click `index.html` and click **"Open with Live Server"**.
   - The site will launch automatically at `http://127.0.0.1:5500/index.html`.

3. **Option 3: Any Static Web Server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node npx serve (optional)
   npx serve .
   ```

---

## 💻 Browser Compatibility

Tested and guaranteed to work smoothly across all modern web browsers:
- Google Chrome (latest)
- Microsoft Edge (latest)
- Mozilla Firefox (latest)
- Apple Safari (iOS & macOS)
- Opera & Brave

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
