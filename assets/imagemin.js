import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozJpeg from "imagemin-mozjpeg"
import imageminWebp from "imagemin-webp"

imagemin(["./images/*"], {
  destination: "./images/build",
  plugins: [
    imageminWebp({quality: 0.4}),
    imageminMozJpeg({
      quality: [0.6, 0.8]
    }),
    imageminPngquant({
      quality: [0.6, 0.8]
    })
  ]
})

