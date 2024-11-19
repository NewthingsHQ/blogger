document.addEventListener('DOMContentLoaded', () => {
  // Function to fetch and apply metadata from metadata.json
  async function loadMetadata() {
    try {
      // Fetch the metadata.json file
      const response = await fetch('metadata.json');
      const metadata = await response.json();

      // Apply the name and tagline to the header
      document.getElementById('site-name').innerText = metadata.name;
      document.getElementById('site-tagline').innerText = metadata.tagline;

      // Set the primary and accent colors using CSS variables
      document.documentElement.style.setProperty('--main-color', metadata.color);
      document.documentElement.style.setProperty('--accent-color', metadata['accent-color']);

      // Dynamically load the font from the provided .ttf file
      const fontFace = new FontFace('CustomFont', `url(${metadata.font})`);
      await fontFace.load();
      document.fonts.add(fontFace);
      
      // Apply the font to the body
      document.body.style.fontFamily = 'CustomFont, sans-serif';
    } catch (error) {
      console.error("Error loading metadata:", error);
    }
  }

  // Call the function to load metadata and apply styles
  loadMetadata();
});
