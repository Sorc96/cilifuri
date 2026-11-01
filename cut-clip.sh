#!/usr/bin/env bash
# Cut a clip from an episode and save it as assets/video/NAME.mp4.
# With --audio, save only the sound as assets/audio/NAME.mp3.
#
# Usage: ./cut-clip.sh [--audio] SOURCE START END NAME
#        ./cut-clip.sh [--audio] SOURCE START +DURATION NAME
#
# Times use the ffmpeg format: seconds (75.5) or [HH:]MM:SS[.ms] (1:15.5).
# Examples:
#   ./cut-clip.sh zdroj/dil01.mp4 12:30 12:38.5 klip1
#   ./cut-clip.sh zdroj/dil01.mp4 12:30 +8.5 klip1
#   ./cut-clip.sh --audio zdroj/dil01.mp4 14:02 +2.5 bravo
set -euo pipefail

audio=false
if [ "${1:-}" = "--audio" ]; then
  audio=true
  shift
fi

if [ $# -ne 4 ]; then
  sed -n '5,12s/^# \{0,1\}//p' "$0" >&2
  exit 1
fi

source=$1
start=$2
end=$3
name=$4
if $audio; then
  output="$(dirname "$0")/assets/audio/$name.mp3"
else
  output="$(dirname "$0")/assets/video/$name.mp4"
fi

if [ ! -f "$source" ]; then
  echo "Source file not found: $source" >&2
  exit 1
fi

if [[ $end == +* ]]; then
  length=(-t "${end#+}")
else
  length=(-to "$end")
fi

mkdir -p "$(dirname "$output")"

# All clips and sounds get the same loudness.
# -14 LUFS is the usual web video level. The source episodes are at about -13 LUFS.
loudness=loudnorm=I=-14:TP=-1.5:LRA=11

if $audio; then
  ffmpeg -hide_banner -loglevel warning -stats \
    -ss "$start" "${length[@]}" -i "$source" \
    -vn -af "$loudness" -c:a libmp3lame -q:a 2 -ar 48000 \
    "$output"
  echo "Saved: $output"
  echo "Add \"$name.mp3\" to SOUNDS in kviz.js."
  exit 0
fi

# Re-encode for a frame-accurate cut. All clips get the same format and max height 720 px.
ffmpeg -hide_banner -loglevel warning -stats \
  -ss "$start" "${length[@]}" -i "$source" \
  -vf "scale=-2:'min(720,ih)'" \
  -c:v libx264 -preset medium -crf 23 -pix_fmt yuv420p \
  -af "$loudness" -c:a aac -b:a 128k -ar 48000 \
  -movflags +faststart \
  "$output"

echo "Saved: $output"
echo "Add \"$name.mp4\" to VIDEOS in kviz.js, or use it as INTRO_VIDEO or OUTRO_VIDEO."
