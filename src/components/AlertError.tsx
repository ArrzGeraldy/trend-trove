import React from "react";

interface AlterErrorI {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const AlertError = ({ error, setError }: AlterErrorI) => {
  return (
    <div
      className="font-regular relative block w-full mb-4 rounded-lg bg-pink-500 p-4 text-base leading-5 text-white opacity-100"
      data-dismissible="alert"
    >
      <div className="mr-12">{error}</div>
      <div
        className="absolute top-2.5 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
        data-dismissible-target="alert"
      >
        <button
          role="button"
          className="w-max rounded-lg p-1"
          data-alert-dimissible="true"
          onClick={() => setError("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AlertError;
