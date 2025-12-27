import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-50 bg-white">
      <span className="loading loading-spinner text-accent"></span>
    </div>
  );
}

export default Loading;
