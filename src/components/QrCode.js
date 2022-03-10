import { saveAs } from 'file-saver';
import { useContext } from "react";
import { InputContext } from "../App";

const QrCode = () => {
  const { response, loading, error } = useContext(InputContext);
  const downloadImage = () => {
    saveAs(response, 'qrCode.png');
  }

  if(loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
        <div className="h-32 w-full bg-gray-300"></div>
        <div className="h-8 w-full bg-gray-300"></div>
      </div>
    );
  }

  if(error) {
    return <div className="text-gray-500 flex items-center">Sorry, Something went wrong 😥</div>
  }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
      {response ? (
        <div>
          <img className="w-48" src={response} alt="qrCode" />
          <button
            onClick={downloadImage}
            className="bg-blue-400 text-white mt-2 px-4 py-1 w-full"
          >Download</button>
        </div>
      ) : (
        <div className="text-gray-500">Your QrCode will showing here...</div>
      )}

    </div>
  )
}

export default QrCode