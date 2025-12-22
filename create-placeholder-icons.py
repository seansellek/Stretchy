#!/usr/bin/env python3
"""
Simple PNG icon generator without external dependencies
Creates solid color PNG files for PWA icons
"""

import struct
import zlib
import os

def create_png(width, height, color_rgb):
    """Create a simple PNG file with a solid color"""
    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'

    # IHDR chunk (image header)
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    ihdr_chunk = create_chunk(b'IHDR', ihdr_data)

    # Create image data - solid color with gradient effect
    raw_data = bytearray()
    r, g, b = color_rgb

    for y in range(height):
        # Add filter byte (0 = no filter) at start of each row
        raw_data.append(0)
        # Vary color slightly for gradient effect
        factor = 1.0 - (y / height * 0.2)
        row_r = int(r * factor)
        row_g = int(g * factor)
        row_b = int(b * factor)

        for x in range(width):
            # Add RGB pixels
            raw_data.extend([row_r, row_g, row_b])

    # Compress the image data
    compressed_data = zlib.compress(bytes(raw_data), 9)
    idat_chunk = create_chunk(b'IDAT', compressed_data)

    # IEND chunk (image end)
    iend_chunk = create_chunk(b'IEND', b'')

    # Combine all parts
    return png_signature + ihdr_chunk + idat_chunk + iend_chunk

def create_chunk(chunk_type, data):
    """Create a PNG chunk with length, type, data, and CRC"""
    length = struct.pack('>I', len(data))
    crc = struct.pack('>I', zlib.crc32(chunk_type + data) & 0xffffffff)
    return length + chunk_type + data + crc

def main():
    # Create icons directory
    icons_dir = os.path.join(os.path.dirname(__file__), 'icons')
    os.makedirs(icons_dir, exist_ok=True)

    # Icon sizes and color (purple from the app theme)
    sizes = [72, 96, 128, 144, 152, 192, 384, 512]
    color = (108, 92, 231)  # #6c5ce7

    for size in sizes:
        png_data = create_png(size, size, color)
        filename = os.path.join(icons_dir, f'icon-{size}x{size}.png')

        with open(filename, 'wb') as f:
            f.write(png_data)

        print(f'Created {filename} ({len(png_data)} bytes)')

    print(f'\n✓ Generated {len(sizes)} placeholder PNG icons')
    print('Note: For custom designed icons, open icon-generator.html in a browser')

if __name__ == '__main__':
    main()
