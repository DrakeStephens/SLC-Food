// HTML
<CloudinaryContext cloudName="dyfsfpiol">
  <div>
    <Image publicId="sample" width="50" />
  </div>
  <Image publicId="sample" width="0.5" />
</CloudinaryContext>

// // SDK Setup
// API key: 664547614164934 - - - Mandatory for server-side operations. Used together with the API secret to communicate with the Cloudinary API and sign requests.
// N3t0IUGXvWq-UqXPQPPxauHt-iw - - - Mandatory for server-side operations. Used together with the API key to communicate with the Cloudinary API and sign requests.

// Node.js way to add Upload Widget
cloudinary.v2.uploader.upload("https://www.example.com/mysample.jpg",
  { public_id: "sample_woman" }, 
  function(error, result) {console.log(result); });