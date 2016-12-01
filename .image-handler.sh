for file in $(ls .original-photos); do
    convert .original-photos/$file -resize 500x1000 -quality 50 photos/$file
done
echo "photos resized and compressed"

convert .original-images/fond.jpg -resize 500x1000 -quality 50 images/fond.jpg
#convert .original-images/logo.jpg -resize 500x1000 -quality 50 images/logo.jpg
echo "images resized and compressed"
