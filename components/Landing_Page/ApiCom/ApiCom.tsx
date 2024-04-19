import React, { useState } from "react";
import axios from "axios";
import Spinner from "@/components/Common/Spinner";

const ApiCom: React.FC<{
  showApi: boolean;
  setShowApi: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showApi, setShowApi }) => {
  const [dataset, setDataset] = useState("FGSM"); // Set initial value to "FGSM"
  const [model, setModel] = useState("Celebmodel.h5"); // Set initial value to "Celebmodel.h5"
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setErrorMessage("");

    try {
      // Make a GET request to your backend endpoint
      const response = await axios.get(
        "http://127.0.0.1:8000/predict?dataset=${dataset}&model=${model}"
      );

      // Check if the response status is 200
      if (response.status === 200) {
        setResponse(response.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-[50%] w-full flex justify-center items-start flex-col">
      <form
        className="w-full flex flex-col gap-6 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex gap-3 justify-center items-center">
          <label className="text-blue-main text-[22px]">Dataset:</label>
          <select
            className="max-w-[260px] w-full h-[45px] border-[1px] border-blue-main rounded-md focus:outline-none"
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
          >
            <option value="FGSM">FGSM</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="w-full flex gap-3 justify-center items-center">
          <label className="text-blue-main text-[22px]">Model:</label>
          <select
            className="max-w-[260px] w-full h-[45px] border-[1px] border-blue-main rounded-md focus:outline-none"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="Celebmodel.h5">Celebmodel.h5</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
          <button
            className="px-8 text-[20px] py-2 text-white bg-blue-main rounded-lg"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <button
            className="w-[158px] font-bold text-[16px] leading-[20.16px] md:h-[55px] h-[46px] rounded-md border-[2px] border-blue-main"
            onClick={() => setShowApi(false)}
          >
            👈 Back
          </button>
        </div>
      </form>

      {errorMessage && <p className="mt-6">{errorMessage}</p>}

      {loading && (
        <p className="mt-8 w-full flex justify-center items-center">
          {<Spinner />}
        </p>
      )}

      {response && (
        <div className="mt-10">
          <p>Result:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiCom;
