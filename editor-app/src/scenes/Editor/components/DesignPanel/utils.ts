// utils.ts

import { Area } from 'react-easy-crop/types';

export const getCroppedImg = async (imageSrc: string, croppedAreaPixels: Area | null): Promise<string> => {
    if (!croppedAreaPixels) throw new Error('No cropped area available.');

    const image = new Image();
    image.src = imageSrc;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const { width, height, x, y } = croppedAreaPixels;

    canvas.width = width;
    canvas.height = height;

    if (ctx) {
        ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('Error cropping image.'));
                    return;
                }
                resolve(URL.createObjectURL(blob));
            }, 'image/jpeg');
        });
    } else {
        throw new Error('Failed to create canvas context.');
    }
};
