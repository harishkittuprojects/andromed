// Cloudinary Direct Uploader for Andromeda Platform
export const CLOUDINARY_CONFIG = {
  cloudName: 'cla8h056',
  apiKey: '898375328312285'
};

/**
 * Upload an image file directly to Cloudinary
 * @param {File} file 
 * @param {string} folder 
 * @returns {Promise<{url: string, secure_url: string, public_id: string}>}
 */
export async function uploadToCloudinary(file, folder = 'andromeda_website') {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'unsigned_uploads'); // fallback standard or custom
  formData.append('folder', folder);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`, {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    if (!res.ok) {
      // If unsigned preset not yet configured on Cloudinary dashboard, create a data URL as immediate working preview
      console.warn('Cloudinary upload response:', data);
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            secure_url: e.target.result,
            public_id: file.name,
            warning: 'Rendered as local data URL. Please enable unsigned upload preset in Cloudinary for permanent CDN URLs.'
          });
        };
        reader.readAsDataURL(file);
      });
    }

    return data;
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve({
          secure_url: e.target.result,
          public_id: file.name,
          warning: 'Offline/Local fallback data URL'
        });
      };
      reader.readAsDataURL(file);
    });
  }
}
