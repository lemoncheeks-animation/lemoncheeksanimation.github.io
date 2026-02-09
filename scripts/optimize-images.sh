#!/bin/bash
# Optimize images: resize with sips, convert to WebP with cwebp
MEDIA="src/media"
TEMP="/tmp/lemoncheeks-optimize"
mkdir -p "$TEMP"

optimize() {
  local file="$1" maxw="$2" quality="$3"
  local base="${file%.*}"
  local input="$MEDIA/$file"
  local output="$MEDIA/${base}.webp"
  local temp_file="$TEMP/$file"

  if [ ! -f "$input" ]; then
    echo "SKIP: $input not found"
    return
  fi

  local orig_size=$(stat -f%z "$input")
  local orig_kb=$((orig_size / 1024))

  # Copy to temp for resizing (sips modifies in place)
  cp "$input" "$temp_file"

  # Get current width
  local cur_width=$(sips -g pixelWidth "$temp_file" | tail -1 | awk '{print $2}')

  # Resize if needed
  if [ "$cur_width" -gt "$maxw" ]; then
    sips --resampleWidth "$maxw" "$temp_file" > /dev/null 2>&1
  fi

  # Convert to WebP
  cwebp -q "$quality" "$temp_file" -o "$output" > /dev/null 2>&1

  local new_size=$(stat -f%z "$output")
  local new_kb=$((new_size / 1024))
  local reduction=$(( (orig_size - new_size) * 100 / orig_size ))

  echo "$file: ${orig_kb}KB -> ${base}.webp: ${new_kb}KB (${reduction}% smaller)"
}

# Artwork images - high quality, resize the huge ones
optimize "style_frame.png"   1920 85
optimize "characters.png"    1600 85
optimize "tomato.png"        600  85
optimize "border2.jpg"       1400 82
optimize "poppy.png"         600  85
optimize "logo.png"          600  85
optimize "freddy.png"        400  85
optimize "project_photo.jpg" 800  82
optimize "team_photo1.jpg"   1024 82
optimize "team_photo2.jpg"   1024 82

# Clean up
rm -rf "$TEMP"
echo ""
echo "Done! All WebP files created in $MEDIA/"
