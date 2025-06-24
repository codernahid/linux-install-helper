
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DistroSelector } from './components/DistroSelector';
import { DistroDetailsDisplay } from './components/DistroDetailsDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { fetchDistroInformation } from './services/geminiService';
import { DistroOption, DistroDetails } from './types';
import { POPULAR_DISTROS } from './constants';

const TuxIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 118" className="w-32 h-32 mx-auto mb-6 text-slate-500 fill-current">
    <path d="M50.22,0A50.022,50.022,0,0,0,28.252,95.3L40.2,74.711A29.3,29.3,0,0,1,45.856,19.3,29.349,29.349,0,0,1,75.14,48.629a29.347,29.347,0,0,1-19.1,26.965l.542,39.671A50.012,50.012,0,0,0,50.22,0Z"/>
    <path d="M51.144,118a49.22,49.22,0,0,0,29.3-11.234l-9.882-20.938A29.156,29.156,0,0,1,25.864,68.455a29.421,29.421,0,0,1,1.758-9.988l-15.68,19.5A49.619,49.619,0,0,0,51.144,118Z"/>
    <path d="M26.7,35.26a14.12,14.12,0,1,0-14.12,14.12A14.12,14.12,0,0,0,26.7,35.26ZM73.3,35.26a14.12,14.12,0,1,0,14.12,14.12A14.12,14.12,0,0,0,73.3,35.26Z"/>
    <path d="M50,56.25A20.75,20.75,0,1,0,29.25,77,20.75,20.75,0,0,0,50,56.25Z" fill="#fff"/>
    <path d="M50,58.75A18.25,18.25,0,1,0,31.75,77,18.25,18.25,0,0,0,50,58.75Z" fill="#ffcc00"/>
  </svg>
);


const App: React.FC = () => {
  const [selectedDistro, setSelectedDistro] = useState<DistroOption | null>(null);
  const [distroDetails, setDistroDetails] = useState<DistroDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState<boolean>(false);

  useEffect(() => {
    // Check for API key on mount
    if (!process.env.API_KEY) {
      setApiKeyMissing(true);
      setError("API_KEY environment variable is not set. Please configure it to use this application.");
    }
  }, []);

  const handleDistroSelect = useCallback(async (distro: DistroOption | null) => {
    setSelectedDistro(distro);
    if (!distro) {
      setDistroDetails(null);
      setError(null);
      return;
    }

    if (apiKeyMissing) return;

    setIsLoading(true);
    setError(null);
    setDistroDetails(null);

    try {
      const details = await fetchDistroInformation(distro.name);
      setDistroDetails(details);
    } catch (e: any) {
      console.error("Failed to fetch distro information:", e);
      setError(e.message || 'An unexpected error occurred while fetching data.');
      setDistroDetails(null);
    } finally {
      setIsLoading(false);
    }
  }, [apiKeyMissing]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl"> {/* Constrain width for better readability */}
        {apiKeyMissing ? (
          <ErrorMessage message="Critical Error: API_KEY is not configured. This application requires an API key to function." />
        ) : (
          <>
            <DistroSelector
              distros={POPULAR_DISTROS}
              selectedDistro={selectedDistro}
              onSelectDistro={handleDistroSelect}
            />
            {isLoading && <LoadingSpinner />}
            {error && !isLoading && <ErrorMessage message={error} />}
            {distroDetails && !isLoading && !error && (
              <DistroDetailsDisplay details={distroDetails} />
            )}
            {!selectedDistro && !isLoading && !error && (
              <div className="mt-12 text-center text-slate-400 p-8 bg-slate-800/50 rounded-xl shadow-xl backdrop-blur-sm">
                <TuxIcon />
                <h2 className="text-2xl font-semibold text-slate-200 mb-3">Welcome to the Linux Distro Guide!</h2>
                <p className="text-lg mb-1">Select a distribution from the dropdown above to discover more about it.</p>
                <p className="text-sm">Explore descriptions, system requirements, and general installation steps, all powered by Gemini AI.</p>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
