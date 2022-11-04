import { getPlaiceholder } from 'plaiceholder';
import path from 'path';

const generatePlaice = async (imageSrc) => {
  const imagePath = imageSrc.startsWith('https://') ? imageSrc : path.join('/', imageSrc)
  const plaiceData = await getPlaiceholder(imagePath);
  const plaice = {
    width: plaiceData.img.width,
    height: plaiceData.img.height,
    base64: plaiceData.base64,
  };
  return plaice;
};

export default generatePlaice;