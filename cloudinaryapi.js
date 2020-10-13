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




var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dyfsfpiol/upload';
var CLOUDINARY_UPLOAD_PRESET = 'nse81ijw';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function(res) {
    console.log(res);
    imgPreview.src = res.data.secure_url;
  }).catch(function(err) {
    console.log(err);
  });
});