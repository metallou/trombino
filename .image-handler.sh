for file in $(ls .original-photos); do
    convert .original-photos/$file -resize 500x1000 -quality 50 photos/$file
done
