# ui-pattern-react

This site created with React is an updated version of [an old project built with vanilla JavaScript](https://github.com/nnmcgovern/ui-pattern). It uses data from NASA's [Astronomy Picture of the Day (APOD) API](https://api.nasa.gov/). This project maintains the features of the older version with some additions.

## Home
<img width="720" alt="home" src="https://github.com/nnmcgovern/ui-pattern-react/assets/48661257/71ab19d3-cbc9-4013-ab5d-82cc35fee0a3">
<br /><br />
On load, ten random images pulled from the APOD API are displayed.
<br /><br />
Clicking on an image displays a modal with further information about the image: it's title, the date on which it was chosen as the Astronomy Picture of the Day, and a breif explanation of the image's contents. The image itself is also displayed within the modal.
<br /><br />
<img width="720" alt="home-modal" src="https://github.com/nnmcgovern/ui-pattern-react/assets/48661257/7d34ef93-51ec-478b-9372-0f931347ffec">
<br /><br />

Clicking on ```Randomize``` in the header will fetch another ten random images from the API and replace the currently displayed images with the new images.

## Recently Viewed
<img width="720" alt="recently-viewed" src="https://github.com/nnmcgovern/ui-pattern-react/assets/48661257/df610e1a-8999-4927-8097-ec483050993c">
<br /><br />

Clicking on ```Recently Viewed``` will display the ten most recent images that the user clicked on (i.e. viewed the image modal). The user can also click these images to see further information.
<br /><br />
<img width="720" alt="recently-viewed-modal" src="https://github.com/nnmcgovern/ui-pattern-react/assets/48661257/b2147a60-baa0-4d9a-b773-7c85b1111099">
