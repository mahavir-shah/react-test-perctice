import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import { styles } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const dogImg =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';

const Demo = ({ classes }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const cropped_Image = await getCroppedImg(
        dogImg,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(cropped_Image);
      console.log('donee', { cropped_Image });
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 200,
          background: '#333',
          height: 400,
        }}
      >
        <Cropper
          image={dogImg}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={4 / 4}
          cropShape="round"
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div
        style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: '1',
            alignItems: 'center',
          }}
        >
          <p>Selected Image:</p>
          <img
            src={croppedImage}
            height={300}
            width={300}
            alt={
              croppedImage == '' && croppedImage == null
                ? 'No image selected'
                : 'selected Image'
            }
          />
        </div>
        <button
          onClick={showCroppedImage}
          className="btn btn-danger"
          style={{
            flexShrink: 0,
            marginLeft: 16,
          }}
        >
          select Image
        </button>
      </div>
    </div>
  );
};
export default Demo;
