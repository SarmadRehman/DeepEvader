import React, { useState } from 'react';
import axios from 'axios';

const apicall = () => {
  const [dataset, setDataset] = useState('FGSM'); // Set initial value to "FGSM"
  const [model, setModel] = useState('Celebmodel.h5'); // Set initial value to "Celebmodel.h5"
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setErrorMessage('');

    try {
      // Make a GET request to your backend endpoint
      const response = await axios.get(
        'http://127.0.0.1:8000/predict?dataset=${dataset}&model=${model}'
      );

      // Check if the response status is 200
      if (response.status === 200) {
        setResponse(response.data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dataset:</label>
          <select value={dataset} onChange={(e) => setDataset(e.target.value)}>
            <option value='FGSM'>FGSM</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div>
          <label>Model:</label>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value='Celebmodel.h5'>Celebmodel.h5</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <button type='submit' disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {loading && <p>Loading...</p>}

      {response && (
        <div>
          <p>Result:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default apicall;
